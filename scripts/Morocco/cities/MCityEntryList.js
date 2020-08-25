import { CityEntryComponent } from "./MCityEntry.js";
import { copyCity } from "./MCityDataProvider.js"

export const CityList = () => {

    const contentElement = document.querySelector(".cities")
    const cities = copyCity()

    let cityHTMLRepresentations = "";

    for (const city of cities) {
        cityHTMLRepresentations += CityEntryComponent(city)
    }

    contentElement.innerHTML += `${cityHTMLRepresentations}`;
}