const microservice = async () => {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word')
        const data = response.json()
        const parsedData = data[0]

        return parsedData
    } catch (error) {
        console.error("Error in MS", error)
    }
}

export default microservice