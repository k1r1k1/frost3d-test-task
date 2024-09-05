export const getDeformationData = async () => {
    try {
        const response = await fetch('mock_json/deformation_response.json')
        // /api/measurements/{id}
        const json = await response.json();

        return json
    } catch(e) {
        return e
    }
}

export const getDeformationTrend = async () => {
    try {
        const response = await fetch('mock_json/deformation_trend_response.json')
        // /api/measurements/trend/{id}
        const json = await response.json();

        return json
    } catch(e) {
        return e
    }
}
