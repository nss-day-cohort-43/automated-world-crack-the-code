const MoroccoCities = [
    {
        cityName: "Casablanca",
        population: "3,359,818"
    },
    {
        cityName: "Fez",
        population: "1,112,072"
    },
    {
        cityName: "Tangier",
        population: "947,952"
    },
    {
        cityName: "Marrakesh",
        population: "928,850"
    },
    {
        cityName: "Salé",
        population: "890,403"
    },
    {
        cityName: "Rabat",
        population: "577,827"
    },
]

export const copyCity = () => {
    return MoroccoCities.slice()
}