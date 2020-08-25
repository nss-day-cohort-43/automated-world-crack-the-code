import { cityHTMLCreator } from "./CityHTML.js";
import { cityDataCopier } from "./CityDataProvider.js"

export const cityListCreator = () => {
    const contentElement = document.querySelector(".cities")
    // debugger;
    const cities = cityDataCopier()
    let cityHTMLRepresentations = "";
    for (const city of cities) {
        cityHTMLRepresentations += cityHTMLCreator(city)
    }
    contentElement.innerHTML += `${cityHTMLRepresentations}`


}