// a data copying function to use with any dataProvider, 
//replaces the function at the bottom of each ___DataProvider.js
//call in each country's  ____main.js

export const dataCopier = (dataSet) => {
    return dataSet.slice();
}