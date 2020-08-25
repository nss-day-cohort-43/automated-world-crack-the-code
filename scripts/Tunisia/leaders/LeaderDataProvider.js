const TunisiaLeaders = [

    {
        president: "Habib Bourguiba",
        timeInOffice: 30
    },
    {
        president: "Zine El Abidine Ben Ali",
        timeInOffice: 24
    },
    {
        president: "Fouad Mebazaa",
        timeInOffice: 1
    },
    {
        president: "Moncef Marzouki",
        timeInOffice: 3
    },
    {
        president: "Beji Caid Essebsi",
        timeInOffice: 5
    },
    {
        president: "Mohamed Ennaceur",
        timeInOffice: 1
    },
    {
        president: "Kais Saied",
        timeInOffice: 1
    },
]

export const makeLeader = () => {
    return TunisiaLeaders.slice()
}