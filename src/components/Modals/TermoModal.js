import React from "react";
import Modal from "../Modal";
import Plot from "react-plotly.js";
import { formatDateTime } from "../../helpers/time";

const TermoModal = (props) => {
    const { data } = props

    const getRandomColor = () =>
        Math.floor(Math.random() * 16777215).toString(16)

    const graphData = data?.map((item) => ({
        x: Object.keys(item.data).map((key) => item.data[key].value),
        y: Object.keys(item.data).map((key) => Number(key)),
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: getRandomColor() },
        name: formatDateTime(item.time)
    }))
    const Te = {
        type: 'scatter',
        // y: [],
        x: data?.map((item) => item.criticalTemperature),
        mode: 'lines',
        name: 'Te max, °C',
        showlegend: true,
        line: {
            color: 'red',
            dash: 'dash'
        }
    }

    return (
        <Modal {...props}>
            <Plot
                data={[...graphData, Te]}
                layout={{
                    xaxis: {
                        title: 'Температура, °C'
                    },
                    yaxis: {
                        title: 'Глубина, м'
                    },
                    width: 800,
                    height: 600,
                    title: ''
                }}
            />
        </Modal>
    )
}

export default TermoModal
