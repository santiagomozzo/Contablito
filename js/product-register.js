
var array = [];

document.addEventListener("DOMContentLoaded", function (e) {
    //boton que guarda la info de registro de productos y la imprime
    document.getElementById("guardar").addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const id = document.getElementById("id").value;
        const description = document.getElementById("description").value;
        const stock = document.getElementById("stock").value;
        const costo = document.getElementById("costo").value;

        const tableRegister = document.getElementById("tableRegister");

        array.push = [
            nombre,
            id,
            description,
            stock,
            costo,
        ];

        localStorage.setItem("saveProduct", JSON.stringify(array));

        nombre.value = " ";
        id.value = " ";
        description.value = " ";
        stock.value = " ";
        costo.value = " ";


        tableRegister.innerHTML += `
        <tr><td>`+ nombre + `</td>
        <td>` + id + `</td>
        <td>`+ description + `</td>
        <td>` + stock + `</td>
        <td>`+ costo + `</td></tr>
        `
        

    });



});




