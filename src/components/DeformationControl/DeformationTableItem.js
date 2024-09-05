import React from "react";
import { formatDateTime } from '../../helpers/time'

const DeformationTableItem = ({ item }) => {
    const { data: { delta, value }, state, time } = item
    const formatedDate = formatDateTime(time)

    return (
        <div className="table-row">
            <div className="row-item">{formatedDate}</div>
            <div className="row-item">Нет данных</div>
            <div className="row-item">{value?.toFixed(4) || 'Нет данных'}</div>
            <div className={`row-item ${state === 'Danger' ? 'danger' : ''}`}>{delta?.toFixed(4) || 'Нет данных'}</div>
        </div>
    )
}

export default DeformationTableItem
