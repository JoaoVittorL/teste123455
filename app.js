function doGet() {
  const html = HtmlService.createTemplateFromFile("index");
  return html
    .evaluate()
    .setTitle("ECO.")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function buscarDadosUsuario(cpf) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DATA");
  var data = sheet.getDataRange().getValues();
  const dataUnique = data.flat();
  const invalido = "invalido";

  if (dataUnique.includes(cpf)) {
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] == cpf) {
        return [data[i][1], data[i][2], data[i][3]];
      }
    }
    return null;
  } else {
    return invalido;
  }
}
