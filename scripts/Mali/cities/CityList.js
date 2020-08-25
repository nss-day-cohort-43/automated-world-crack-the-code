import { CityHTMLCreator } from "./CityHTML.js";
import { cityDataCopier } from "./CityDataProvider.js"

export const CityListCreator = () => {
    const contentElement = document.querySelector(".cities")
    const cities = cityDataCopier()
    let cityHTMLRepresentations = "";
    for (const city of cities) {
        cityHTMLRepresentations += CityHTMLCreator(city)
    }
    contentElement.innerHTML += `${cityHTMLRepresentations}`


}