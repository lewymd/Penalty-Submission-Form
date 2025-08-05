function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getPlayers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Players");
  const names = sheet.getRange(2, 1, sheet.getLastRow() - 1).getValues(); // Assuming names start from A2
  return names.flat().filter(n => n); // Remove blanks
}

function getStaff() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Staff");
  const names = sheet.getRange(2, 1, sheet.getLastRow() - 1).getValues(); // Assuming names start from A2
  return names.flat().filter(n => n); // Remove blanks
}

function getpenaltiesForPlayer(selectedName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Penalties");
  const data = sheet.getDataRange().getValues();

  if (!data || data.length < 2) {
    Logger.log("No data found in the sheet.");
    return JSON.parse('[]');
  }

  const headers = data[0];

  const nameIndex = headers.indexOf("Player Name");
  const tableIndex = headers.indexOf("Table Number");
  const roundIndex = headers.indexOf("Round");
  const infractionIndex = headers.indexOf("Infraction");
  const penaltyIndex = headers.indexOf("Penalty");
  const notesIndex = headers.indexOf("Notes");

  if (nameIndex === -1) {
    Logger.log("Player name column not found.");
    return JSON.parse('[]');
  }

  const matchedpenalties = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const nameInRow = row[nameIndex] ? row[nameIndex].toString().trim() : '';
    if (nameInRow.toLowerCase() === selectedName.trim().toLowerCase()) {
      const penalty = {
        table: row[tableIndex] || '',
        round: row[roundIndex] || '',
        infraction: row[infractionIndex] || '',
        penalty: row[penaltyIndex] || '',
        notes: row[notesIndex] || ''
      };
      matchedpenalties.push(penalty);
    }
  }

  Logger.log("Returning penalties: " + JSON.stringify(matchedpenalties, null, 2));
  return JSON.parse(JSON.stringify(matchedpenalties)); // Safe serialization
}





function submitpenalty(player, table, round, infraction, severity, penalty, notes, staff) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Penalties");
  sheet.appendRow([
    new Date(), player, table, round, infraction, severity, penalty, notes, staff
  ]);
  return true;
}
