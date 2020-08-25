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
    }

]

export const cityDataCopier = () => {
    return malianCities.slice()
}