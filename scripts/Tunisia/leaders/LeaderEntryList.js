import { LeaderEntryComponent } from "./LeaderEntry.js";
import { makeLeader } from "./LeaderDataProvider.js"

export const LeaderList = () => {


    const contentElement = document.querySelector(".leaders")

    const leaders = makeLeader()

    let leaderHTMLRepresentations = "";

    for (const leader of leaders) {

        leaderHTMLRepresentations += LeaderEntryComponent(leader)

    }

    contentElement.innerHTML += `
    
   
        ${leaderHTMLRepresentations}

`


}