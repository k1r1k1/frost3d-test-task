import React from "react";
import Modal from "../Modal";
import Plot from "react-plotly.js";
import { formatDatePlotly } from "../../helpers/time";

const DeformationModal = (props) => {
    const { data: { trend: { points, criticalEndDate }, data } } = props

    const graphData = {
        x: Object.keys(points).map((key) => formatDatePlotly(key)),
        y: Object.keys(points).map((key) => points[key]),
        showlegend: true,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Тренд Δ',
        marker: { color: 'red' },
    }
    const end = {
        type: 'scatter',
        x: [formatDatePlotly(criticalEndDate), formatDatePlotly(criticalEndDate)],
        y: [points[criticalEndDate], 0],
        mode: 'lines',
        name: 'Конец эксплуатации',
        showlegend: true,
        line: {
            color: 'black'
        }
    }
    const criticalData = {
        x: data.map((item) => formatDatePlotly(item.time)),
        y: data.map((item) => item.criticalDelta),
        showlegend: true,
        type: 'scatter',
        mode: 'lines',
        name: 'Макс. Δ, м',
        line: {
            color: 'orange',
            dash: 'dash'
        }
    }
    const delta = {
        x: data.map((item) => formatDatePlotly(item.time)),
        y: data.map(({ data }) => data.delta),
        showlegend: true,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Δ',
        line: {
            color: '1f77b4',
        }
    }

    return (
        <Modal {...props}>
            <Plot
                data={[
                    // minData,
                    graphData,
                    criticalData,
                    delta,
                    // averageData,
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
                        title: 'Смещение (Δ), м'
                    },
                }}
            />
        </Modal>
    )
}

export default DeformationModal
