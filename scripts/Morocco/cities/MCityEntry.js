export const CityEntryComponent = (entry) => {
    return `
    <section>
        <ul>
            <li>City Name: ${entry.cityName}</li>
            <div>Population: ${entry.population}</div><br> 
        </ul>
    </section>
    `
}