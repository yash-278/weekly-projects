// var typeNumber = 0;
// var errorCorrectionLevel = "L";
// var qr = qrcode(typeNumber, errorCorrectionLevel);
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
  // console.log(text);

  // document.getElementById("demo").innerHTML = text;
}

function generateCode() {
  //   let QrText = Qrcode();

  //   qr.addData(QrText);
  //   qr.make();
  //   document.getElementById("placeHolder").innerHTML = qr.createImgTag(4);

  var qrData = Qrcode();

  qrCode.makeCode(qrData);
}
