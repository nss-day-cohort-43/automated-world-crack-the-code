import { maliLeaderDataCopier } from "./LeaderDataProvider.js"
import { maliLeaderHTMLCreator } from "./LeaderEntry.js"
export const leaderListCreator = () => {
    const contentElement = document.querySelector(".leaders");
    const leaders = maliLeaderDataCopier();
    const leaderHTML = ""
    for (const leader of leaders) { 
        leaderHTML += maliLeaderHTMLCreator(leader);
    }
    contentElement.innerHTML += `${leaderHTML}`
}