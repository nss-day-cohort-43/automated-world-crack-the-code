const MoroccoLeaders = [
    {
        leaderName: "Mohammed VI of Morocco",
        title: "King of Morocco"
    },
    {
        leaderName: "Saadeddine Othmani",
        title: "16th Prime Minister of Morocco"
    },
    {
        leaderName: "Prince Moulay Rachid of Morocco",
        title: "Prince of Morocco"
    }
]

export const copyLeader = () => {
    return MoroccoLeaders.slice()
}