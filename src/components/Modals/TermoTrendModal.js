import React from "react";
import Modal from "../Modal";
import Plot from "react-plotly.js";
import { formatDatePlotly } from "../../helpers/time";

const TermoTrendModal = (props) => {
    const { data: { trendData: { points, criticalEndDate }, filteredData } } = props

    const graphData = {
        x: Object.keys(points).map((key) => formatDatePlotly(key)),
        y: Object.keys(points).map((key) => points[key]),
        type: 'scatter',
        mode: 'lines+markers',
        // name: 'Тренд Δ',
        name: 'Тренд Те',
        marker: { color: 'red' },
    }
    const end = {
        type: 'scatter',
        x: [formatDatePlotly(criticalEndDate), formatDatePlotly(criticalEndDate)],
        y: [points[criticalEndDate], -5],
        // x: data?.map((item) => item.criticalTemperature),
        mode: 'lines',
        name: 'Конец эксплуатации',
        showlegend: true,
        line: {
            color: 'black'
        }
    }
    const criticalData = {
        x: filteredData.map((item) => formatDatePlotly(item.time)),
        y: filteredData.map((item) => item.criticalTemperature),
        type: 'scatter',
        mode: 'lines',
        name: 'Te max, °C',
        line: {
            color: 'orange',
            dash: 'dash'
        }
    }
    const averageData = {
        x: filteredData.map((item) => formatDatePlotly(item.time)),
        y: filteredData.map((item) => item.averageTemperature),
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Te, °C',
        line: {
            color: '1f77b4'
        }
    }

    console.log(props)


    return (
        <Modal {...props}>
            <Plot
                data={[
                    graphData,
                    criticalData,
                    averageData,
                    end
                ]}
                layout={{
                    width: 800,
                    height: 600,
                    title: '',
                    xaxis: {
                        type: 'date',
                        title: 'Дата'
                    },
                    yaxis: {
                        title: 'Температура, °C'
                    },
                }}
            />
        </Modal>
    )
}

export default TermoTrendModal
