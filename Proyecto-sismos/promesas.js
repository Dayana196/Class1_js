//for (let i = 0; i < 100; i++) {
//console.log(`Ciclo 1 ${i + 1}`);
//}

//for (let a = 0; a < 100; a++) {
// console.log(`Ciclo 2 ${a + 1}`);
//}



import {dataFromRequest, isSignificant} from "./earthquakes.js"

const mapearDatos = ({mag, place, tsunami, time, type, geometry}) =>
{

    let {type: typeGeometry, coordinates} = geometry
    let [lat,ln] = coordinates
    return {
        mag: mag,
        place: place,
        tsunami: tsunami,
        time: time,
        type: type,
        geometry: {
            type: typeGeometry,
            coordinates:{
                lat: lat,
                ln: ln
            }
        }
    }
}

let earthquakes = []


let dataParce = JSON.parse(dataFromRequest)

dataParce.features.forEach(feature => {
    let data = {
        mag: feature.properties.mag,
        place: feature.properties.place,
        tsunami: feature.properties.tsunami,
        time: feature.properties.time,
        type: feature.properties.type,
        geometry: feature.geometry
    }
    let convertData = mapearDatos(data)
    earthquakes.push(convertData);
});

let earthquakeFilter = earthquakes.filter(item => {
        return isSignificant(item, 5.0)
    
    }
).map(item => ({
    mag: item.mag,
    title: item.place
})).sort((a,b) => b.mag - a.mag)

console.log(earthquakeFilter);






