const malianLandmarks = [
    {
        landmark: "The Bandiagara Cliffs",
        location: "here", 
        description:""
    },
    {
        landmark: "The Great Mosque of Djenne",
        location: "there",
        description:""
    },
    {
        landmark: "Bamako City Centre Market",
        location: "everywhere",
        description: ""
    },
]
export const landmarkDataCopier = () => {
    return malianLandmarks.slice()
}