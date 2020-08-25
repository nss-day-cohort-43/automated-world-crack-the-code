export const LeaderEntryComponent = (entry) => {
    return `
    <section>
        <ul>
            <li>Leader's Name: ${entry.leaderName}</li> 
            <div>Title: ${entry.title}</div><br>
        </ul>
    </section>
    `
}