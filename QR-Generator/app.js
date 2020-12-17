var typeNumber = 0;
var errorCorrectionLevel = "L";
var qr = qrcode(typeNumber, errorCorrectionLevel);

function myFunction() {
  var x = document.getElementById("qrForm");
  var text = "";
  var i;
  console.log(x.elements);
  for (i = 0; i < x.length; i++) {
    text += `${x.elements[i].name} : ${x.elements[i].value}, `;
  }

  // console.log(text);
  qr.addData(text);
  qr.make();
  document.getElementById("placeHolder").innerHTML = qr.createImgTag(4);
  // document.getElementById("demo").innerHTML = text;
}
