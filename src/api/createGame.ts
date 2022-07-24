const createGameAndGetNumber = async (name: string): Promise<string | null> => {
    const url = "/create-game"
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            host_name: name,
        }),
    }
    const response = await fetch(url, options)
    const responseOK = response && response.ok
    if (responseOK) {
        const data = await response.json()
        const gameId: string = data.game_id
        // do something with data
        return gameId
    }
    return null
}

export default createGameAndGetNumber
