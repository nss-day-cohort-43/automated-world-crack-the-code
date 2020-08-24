import { LandmarkEntryComponent } from "./MLandmarkEntry.js";
import { makeLandmark } from "./MLandmarkDataProvider.js";

export const LandmarkList = () => {

    const contentElement = document.querySelector(".landmarks")
    const landmarks = makeLandmark()

    let landmarkHTMLRepresentations = "";

    for (const landmark of landmarks) {
        landmarkHTMLRepresentations += LandmarkEntryComponent(landmark)
    }

    contentElement.innerHTML += `${landmarkHTMLRepresentations}`;
}