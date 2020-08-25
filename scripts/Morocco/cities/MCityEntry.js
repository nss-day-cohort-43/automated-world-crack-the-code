export const CityEntryComponent = (entry) => {
    return `
    <section class="entryComp">
        <ul>
            <li>City Name: ${entry.cityName}</li>
            <div>Population: ${entry.population}</div><br> 
        </ul>
    </section>
    `
}