import { maliLandmarkHTMLCreator } from "./LandmarkHTML.js";
import { landmarkDataCopier } from "./LandmarkData.js";

export const landmarkListCreator = () => {

    const contentElement = document.querySelector(".landmarks")
    const landmarks = landmarkDataCopier()

    let landmarkHTMLRepresentations = "";

    for (const landmark of landmarks) {
        landmarkHTMLRepresentations += maliLandmarkHTMLCreator(landmark)
    }

    contentElement.innerHTML += `${landmarkHTMLRepresentations}`;
}