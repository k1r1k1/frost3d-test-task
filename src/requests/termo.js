export const getTermoData = async () => {
    try {
        const response = await fetch('mock_json/termo_response.json')
        const json = await response.json();

        return json
    } catch(e) {
        console.log(e)
    }
}

export const getTermoTrend = async () => {
    try {
        const response = await fetch('mock_json/termo_trend_response.json')
        const json = await response.json();

        return json
    } catch(e) {
        console.log(e)
    }
}
