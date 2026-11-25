/**
 * Google Apps Script Backend for Website Visitor Tracking & Analytics
 * ------------------------------------------------------------------
 * Connects your static HTML pages and Dashboard directly to Google Sheets.
 *
 * Sheet Columns (Row 1):
 * S.No | Visitor ID | Device Name | Device Type | OS | Browser | Page Name | Visit Date | Visit Time
 */

var SHEET_NAME = 'Visitors';
var HEADERS = [
  'S.No',
  'Visitor ID',
  'Device Name',
  'Device Type',
  'OS',
  'Browser',
  'Page Name',
  'Visit Date',
  'Visit Time'
];

/**
 * Get the Visitors sheet, creating it with formatted headers if missing.
 */
function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#0f172a');
    headerRange.setFontColor('#f8fafc');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/**
 * Prevent accidental formula injection when storing user-supplied strings.
 */
function sanitizeCell(value, fallback) {
  var str = (value === undefined || value === null) ? '' : String(value).trim();
  if (!str) return fallback || '';
  if (/^[=+\-@]/.test(str)) {
    return "'" + str;
  }
  return str;
}

/**
 * Handle POST requests from tracker.js to log a new visitor record.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var sheet = getOrCreateSheet();
    var lastRow = sheet.getLastRow();
    var nextSNo = 1;

    if (lastRow > 1) {
      var prevSNo = Number(sheet.getRange(lastRow, 1).getValue());
      nextSNo = isNaN(prevSNo) ? lastRow : prevSNo + 1;
    }

    var now = new Date();
    var tz = Session.getScriptTimeZone() || 'Asia/Kolkata';
    var defaultDate = Utilities.formatDate(now, tz, 'yyyy-MM-dd');
    var defaultTime = Utilities.formatDate(now, tz, 'hh:mm:ss a');

    var row = [
      nextSNo,
      sanitizeCell(data.visitorId, 'Unknown'),
      sanitizeCell(data.deviceName, 'Unknown'),
      sanitizeCell(data.deviceType, 'Unknown'),
      sanitizeCell(data.os, 'Unknown'),
      sanitizeCell(data.browser, 'Unknown'),
      sanitizeCell(data.pageName, 'Unknown'),
      sanitizeCell(data.visitDate, defaultDate),
      sanitizeCell(data.visitTime, defaultTime)
    ];

    sheet.appendRow(row);

    return createJsonResponse({
      status: 'success',
      message: 'Visit recorded',
      sNo: nextSNo
    });
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: err.message || 'Failed to record visit'
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (releaseErr) {
      // Ignore if lock was not held
    }
  }
}

/**
 * Handle GET requests from the Dashboard to fetch analytics stats and all visitor rows.
 */
function doGet(e) {
  try {
    var sheet = getOrCreateSheet();
    var lastRow = sheet.getLastRow();

    if (lastRow <= 1) {
      return createJsonResponse({
        status: 'success',
        stats: {
          totalViews: 0,
          uniqueVisitors: 0,
          page1Views: 0,
          page2Views: 0,
          page3Views: 0
        },
        records: []
      });
    }

    // Use getDisplayValues() so dates and times stay formatted exactly as strings
    var values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getDisplayValues();
    var records = [];
    var uniqueVisitorSet = {};
    var page1Views = 0;
    var page2Views = 0;
    var page3Views = 0;

    for (var i = 0; i < values.length; i++) {
      var row = values[i];
      var visitorId = String(row[1] || '').trim();
      var pageName = String(row[6] || '').trim();

      if (visitorId) {
        uniqueVisitorSet[visitorId] = true;
      }

      var lowerPage = pageName.toLowerCase();
      if (lowerPage.indexOf('index.html') !== -1 || lowerPage.indexOf('page 1') !== -1) {
        page1Views++;
      } else if (lowerPage.indexOf('gallery.html') !== -1 || lowerPage.indexOf('page 2') !== -1) {
        page2Views++;
      } else if (lowerPage.indexOf('virtual-tour.html') !== -1 || lowerPage.indexOf('page 3') !== -1) {
        page3Views++;
      }

      records.push({
        sNo: row[0],
        visitorId: visitorId,
        deviceName: row[2],
        deviceType: row[3],
        os: row[4],
        browser: row[5],
        pageName: pageName,
        visitDate: row[7],
        visitTime: row[8]
      });
    }

    return createJsonResponse({
      status: 'success',
      stats: {
        totalViews: records.length,
        uniqueVisitors: Object.keys(uniqueVisitorSet).length,
        page1Views: page1Views,
        page2Views: page2Views,
        page3Views: page3Views
      },
      records: records
    });
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: err.message || 'Failed to read visitor data'
    });
  }
}

/**
 * Helper to return a JSON response.
 */
function createJsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
