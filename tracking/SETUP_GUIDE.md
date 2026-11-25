# Website Visitor Tracking & Analytics — Setup, Deployment & Testing Guide

## 1. Project Structure

```text
tracking/
├── index.html                     # All-in-one Dashboard (HTML + CSS + JS + Login)
├── tracker.js                     # Self-contained visitor tracking script for your 3 HTML pages
├── SETUP_GUIDE.md                 # Setup, deployment & testing instructions
└── google-apps-script/
    └── Code.gs                    # Google Apps Script backend for Google Sheets
```

---

## 2. Google Sheets Setup Instructions

1. Open [Google Sheets](https://sheets.google.com) and create a **Blank spreadsheet**.
2. Name the spreadsheet (for example: **FEAT Library Visitor Analytics**).
3. Rename the bottom sheet tab from `Sheet1` to **`Visitors`** (optional — `Code.gs` will automatically create the `Visitors` tab and headers if it does not exist).
4. In **Row 1**, ensure the 9 column headers are in this exact order:

| S.No | Visitor ID | Device Name | Device Type | OS | Browser | Page Name | Visit Date | Visit Time |
|---|---|---|---|---|---|---|---|---|

---

## 3. Google Apps Script Backend Setup & Deployment

1. Inside your Google Sheet, click **Extensions → Apps Script**.
2. Delete any default `myFunction` code inside `Code.gs`.
3. Copy the entire contents of `tracking/google-apps-script/Code.gs` and paste it into the Apps Script editor.
4. Click **Save** (Ctrl + S) and name the project (e.g., `Visitor Tracking API`).
5. Click **Deploy → New deployment**.
6. Click the gear icon next to **Select type** and choose **Web app**.
7. Configure the deployment settings:
   - **Description**: `Visitor Tracking API v1`
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone**
8. Click **Deploy**, authorize access, and copy the generated `/exec` Web app URL.

> **Note:** Whenever you edit `Code.gs` in the future, you must click **Deploy → Manage deployments → Edit (pencil icon) → New version → Deploy** for changes to take effect.

---

## 4. Testing Instructions

1. Serve the root project folder using any static server (e.g., VS Code **Live Server**, GitHub Pages, or `python -m http.server`).
2. Open `index.html`, `gallery.html`, and `virtual-tour.html` in your browser.
3. Wait 1–2 seconds and check your **Google Sheet (`Visitors` tab)** — three rows should appear automatically with `S.No` 1, 2, 3, the same `Visitor ID`, accurate `Device Name`, `Device Type`, `OS`, `Browser`, `Page Name`, `Visit Date`, and `Visit Time`.
4. Refresh the same page immediately within 15 seconds — no duplicate row is inserted.
5. Open a **Private / Incognito** window and visit `index.html` — a new anonymous `Visitor ID` is generated and **Total Unique Visitors** increments by 1.
6. Open `tracking/index.html` and sign in to view live stats, individual page metrics, search/filters, auto-refresh, and CSV export.
