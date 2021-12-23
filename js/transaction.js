document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("form").addEventListener('submit', formValidate);


});

//funcion de transaccion 
function formValidate(event) {
  event.preventDefault();

  var transaccion = document.querySelector(`input[name="transaccion"]:checked`).value;
  var ivaType = document.querySelector(`input[name="iva"]:checked`).value;
  var subtotal = document.getElementById("subtotal").value;
  var descripcion = document.getElementById("descripcion").value;
  var fecha = document.getElementById("fecha").value;

  const table = document.getElementById("table");

  if (transaccion && ivaType && subtotal && descripcion && fecha) {

  }

  function ivaCalculate(iva) {
    return subtotal * iva;
  };

  let htmlContentToAppend = "";

  htmlContentToAppend += `
    <tr><td>`+ descripcion + `</td>
    <td>` + transaccion + `</td>
    <td>`+ subtotal + `</td>
    <td>` + ivaCalculate(ivaType) + `</td>
    <td>`+ (parseFloat(subtotal) + parseFloat(ivaCalculate(ivaType))) + `</td>
    <td>`+ fecha + `</td></tr>
    `

  table.innerHTML += htmlContentToAppend;

}