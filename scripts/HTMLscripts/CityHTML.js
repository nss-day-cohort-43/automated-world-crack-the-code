export const cityHTMLCreator = (entry) => {
    return `
    <section>
        <ul>
            <li>City Name : ${entry.cityName} </li> <br> 
        <div> Population: ${entry.population} </div>
        </ul>
    </section>
    `

}