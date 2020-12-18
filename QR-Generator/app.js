var qrCode = new QRCode(document.getElementById("qrcode"));

function Qrcode() {
  var x = document.getElementById("qrForm");
  var text = "";
  var i;
  console.log(x.elements);
  for (i = 0; i < x.length; i++) {
    text += `${x.elements[i].name} : ${x.elements[i].value}, `;
  }
  return text;
}

function generateCode() {
  var qrData = Qrcode();
  qrCode.makeCode(qrData);
}
