export const LandmarkEntryComponent = (entry) => {
    return `
    <section>
        <ul>
            <li>Landmark Name: ${entry.landmarkName}</li> 
            <div>Location: ${entry.location}</div>
            <div>Description: ${entry.description}</div><br>
        </ul>
    </section>
    `
}