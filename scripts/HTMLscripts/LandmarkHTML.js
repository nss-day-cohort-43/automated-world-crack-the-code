export const landmarkHTMLCreator= (entry) => {
    return `
    <section>
        <ul>
            <li>Landmark: ${entry.landmark}</li><br> 
            <div>location: ${entry.location}</div>
            <div>${entry.description}</div>
        </ul>
    </section>
    `
}