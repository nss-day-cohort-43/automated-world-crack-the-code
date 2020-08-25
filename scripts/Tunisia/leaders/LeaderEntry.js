export const LeaderEntryComponent = (entry) => {

    return `
    <section>
        <ul>
            <li>President Name: ${entry.president}</li> 
        <div>Time in office: ${entry.timeInOffice}</div>
        </ul>
    </section>
    `
}