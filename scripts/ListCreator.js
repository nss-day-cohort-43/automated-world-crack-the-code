import {cityHTMLCreator} from "./HTMLscripts/CityHTML.js"
import {landmarkHTMLCreator} from "./HTMLscripts/LandmarkHTML.js"
import {leaderHTMLCreator} from "./HTMLscripts/LeaderHTML.js"

// a function to create the HTML list from the data, 
//replaces the individual ___List.js files by using two arguments and a switch case,
//call in each country's  ____main.js, passing in a const for data and a string 

export const listCreator = (dataSet, subject) => {
    let target =""
    let subjectHTMLCreator = ""
    switch (subject) {
    case "cities":
        target = ".cities"
        subjectHTMLCreator = cityHTMLCreator
        break;
    case "landmarks":
        target = ".landmarks"
        subjectHTMLCreator=landmarkHTMLCreator
        break;
    case "leaders":
        target = ".leaders"
        subjectHTMLCreator=leaderHTMLCreator
        break;
    }
    const contentElement = document.querySelector(target)
    let HTMLList = "";
    for (const item of dataSet) {
        HTMLList += subjectHTMLCreator(item)
    }
    contentElement.innerHTML += `${HTMLList}`
}

