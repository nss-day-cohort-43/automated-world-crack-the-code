export const maliLandmarkHTMLCreator= (entry) => {
    return `
    <section>
        <ul>
            <li>City Name: ${entry.landmarkName}</li><br> 
            <div>Population: ${entry.location}</div>
        </ul>
    </section>
    `
}