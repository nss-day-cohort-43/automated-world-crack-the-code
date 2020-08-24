import { CityEntryComponent } from "./CityEntry.js";
import { makeCity } from "./CityDataProvider.js"

export const CityList = () => {


    const contentElement = document.querySelector(".cities")

    const cities = makeCity()

    let cityHTMLRepresentations = "";

    for (const city of cities) {

        cityHTMLRepresentations += CityEntryComponent(city)

    }

    contentElement.innerHTML += `
    
   
        ${cityHTMLRepresentations}

`


}