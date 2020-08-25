const malianCities = [
    {
        cityName: "Bamako",
        population: "101,016,167"
    },
    {
        cityName: "Sikasso",
        population: "134,774"
    },
    {
        cityName: "Ségou",
        population: "105,305"
    },
    {
        cityName: "Mopti",
        population: "80,472"
    },    
    {
        cityName: "Koutiala",
        population: "76,914"
    },    
    {
        cityName: "Kayes",
        population: "67,424"
    },
]

export const cityDataCopier = () => {
    return malianCities.slice()
}