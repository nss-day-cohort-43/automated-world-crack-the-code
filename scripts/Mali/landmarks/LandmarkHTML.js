export const maliLandmarkHTMLCreator= (entry) => {
    return `
    <section>
        <ul>
            <li>Landmark: ${entry.landmarkName}</li><br> 
            <div>location: ${entry.location}</div>
            <div>${entry.description}</div>
        </ul>
    </section>
    `
}