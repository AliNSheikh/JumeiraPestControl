function doPost(e) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("Leads") || spreadsheet.insertSheet("Leads");
  ensureHeaders_(sheet);

  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.fullName || "",
    data.phone || "",
    data.email || "",
    data.service || "",
    data.area || "",
    data.preferredDate || "",
    data.preferredTime || "",
    data.notes || "",
    "JPC Dubai Website"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    "Received At",
    "Full Name",
    "Phone",
    "Email",
    "Service",
    "Area",
    "Preferred Date",
    "Preferred Time",
    "Notes",
    "Source"
  ]);
}
