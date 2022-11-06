export function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if(cities) {
    cities = JSON.parse(cities);
    } else {
    cities = [];
    }
    return cities;
}
export async function llamada_api(ciudad){
    let datos ;
    let respuesta ;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4d2b079e97915c96f3da5f2f3465b85b&units=metric&lang=es`;
    respuesta = await fetch(api);
    datos= await respuesta.json();
    return datos;
}