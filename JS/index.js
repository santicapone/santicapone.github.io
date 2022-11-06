async function opciones (){
    let {getCitiesFromLocalStorage} = await import("./common.js");
    let seleccion = document.getElementById("seleccionable");
    let ciudad = getCitiesFromLocalStorage();
    for(let ciudades of ciudad){
        let opcion = document.createElement("option")
        opcion.value = ciudades;
        opcion.innerHTML = ciudades;
        seleccion.appendChild(opcion);
    }
    
}
async function Consultar() {
    let { llamada_api } = await import("./common.js"); //Importacion en funcion :/
    let seleccion = document.getElementById("seleccionable").value;

    document.getElementById("card").style.display = "none";
    document.getElementById("error").style.display = "none";

    let objeto = await llamada_api(seleccion);

    if (objeto.cod != 200) {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("card").style.display = "block";
        document.getElementById("ciudades").innerHTML = objeto.name;
        document.getElementById("p1").innerHTML = `Temperatura: ${objeto.main.temp}°`;
        document.getElementById("p2").innerHTML = `Sensación térmica: ${objeto.main.feels_like}°`;
        document.getElementById("p3").innerHTML = `Humedad: ${objeto.main.humidity}%`;
        document.getElementById("p4").innerHTML = `Velocidad del viento: ${(objeto.wind.speed * 1.60934).toFixed(2)}km/h`;
        document.getElementById("p5").innerHTML = `Presión: ${objeto.main.pressure} P`;
    }
}