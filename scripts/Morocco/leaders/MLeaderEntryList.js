import { LeaderEntryComponent } from "./MLeaderEntry.js";
import { copyLeader } from "./MLeaderDataProvider.js";

export const LeaderList = () => {

    const contentElement = document.querySelector(".leaders")
    const leaders = copyLeader()

    let leaderHTMLRepresentations = "";

    for (const leader of leaders) {
        leaderHTMLRepresentations += LeaderEntryComponent(leader)
    }

    contentElement.innerHTML += `${leaderHTMLRepresentations}`;
}