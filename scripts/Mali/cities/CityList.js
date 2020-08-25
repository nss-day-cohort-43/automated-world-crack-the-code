import { CityHTMLcreator } from "./CityHTML.js";
import { cityDataCopier } from "./CityDataProvider.js"

export const CityList = () => {
    const contentElement = document.querySelector(".cities")
    const cities = cityDataCopier()
    let cityHTMLRepresentations = "";
    for (const city of cities) {
        cityHTMLRepresentations += CityHTMLcreator(city)
    }
    contentElement.innerHTML += `${cityHTMLRepresentations}`


}