const MoroccoLandmarks = [
    {
        landmarkName: "Here",
        location: "Morocco"
    },
    {
        landmarkName: "There",
        location: "Another place in Morocco"
    },
    {
        landmarkName: "Everywhere",
        location: "Somewhere else"
    }
]

export const copyLandmark = () => {
    return MoroccoLandmarks.slice()
}