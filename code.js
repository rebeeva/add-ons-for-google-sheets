var SIDEBAR_TITLE = 'Example Sidebar';
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createAddonMenu()
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}
function onInstall(e) {
  onOpen(e);
}
function showSidebar() {
  var ui = HtmlService.createTemplateFromFile('Sidebar')
      .evaluate()
      .setTitle(SIDEBAR_TITLE);
  SpreadsheetApp.getUi().showSidebar(ui);
}
function setActiveValue(value) {
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  cell.setValue(value);
}

