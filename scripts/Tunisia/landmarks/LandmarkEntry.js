export const LandmarkEntryComponent = (entry) => {
    return `
    <section>
        <ul>
            <li>City Name: ${entry.landmark}</li> 
        <div> Population: ${entry.locatedIn}</div>
        </ul>
    </section>
    `
}