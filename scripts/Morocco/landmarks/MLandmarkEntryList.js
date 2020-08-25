import { LandmarkEntryComponent } from "./MLandmarkEntry.js";
import { copyLandmark } from "./MLandmarkDataProvider.js";

export const LandmarkList = () => {

    const contentElement = document.querySelector(".landmarks")
    const landmarks = copyLandmark()

    let landmarkHTMLRepresentations = "";

    for (const landmark of landmarks) {
        landmarkHTMLRepresentations += LandmarkEntryComponent(landmark)
    }

    contentElement.innerHTML += `${landmarkHTMLRepresentations}`;
}