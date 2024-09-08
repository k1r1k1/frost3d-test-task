import React from "react";

const TermistorTableItem = ({ item, marks }) => {
    const { data, state } = item

    return (
        <div className="table-row">
            {marks?.map((item, index) => data[item] ? (
                <div
                    className={`row-item mark-item ${state === 'Danger' ? 'danger' : ''}`}
                    key={`termistor-table-item-mark-${index}`}
                >{data[item].value.toFixed(2)}</div>
            ) : (
                <div key={`termistor-table-item-mark-${index}`} className="row-item mark-item">-</div>
            )
        )}
        </div>
    )
}

export default TermistorTableItem
