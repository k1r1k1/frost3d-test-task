import React, { useState } from "react";
import './deformation.css'
import DeformationTableItem from "./DeformationTableItem";
import { filterByDate, sortByTime } from "../../helpers/time";
import TableDateHeader from "../TableDateHeader";

const DeformationControl = ({ data, trend }) => {
    const { data: tableData } = data || {};
    const sortedTableData = tableData && sortByTime(tableData)

    const [expanded, setExpanded] = useState(true)
    const [filterDateFrom, setDateFrom] = useState(undefined)
    const [filterDateTo, setDateTo] = useState(undefined)

    const isFiltersShowing = filterDateFrom || filterDateTo
    const filteredData = sortedTableData &&
        isFiltersShowing ?
        filterByDate(sortedTableData, filterDateFrom, filterDateTo) :
        sortedTableData

    const handleClose = (e) => {
        e.stopPropagation()
        setExpanded(false)
    }

    return (
        <>
            <div className="defComponent">
                <img alt="mockedPicture" src="def_mock.jpg" loading="lazy" />
            </div>
            <div className={`defTable ${expanded ? '' : 'hidden'}`}>
                <div className="table-toggler" onClick={() => setExpanded(true)}>
                    <span>Деформационная марка</span>
                    <button type="button" className="table-toggler-close" onClick={handleClose}>×</button>
                </div>
                <div className="table-container">
                    <div className="table-row heading">
                        <div className="row-item">
                            <TableDateHeader {...{ filterDateFrom, filterDateTo, isFiltersShowing, setDateFrom, setDateTo }} />
                        </div>
                        <div className="row-item">Цикл измерения</div>
                        <div className="row-item">Отметка, м</div>
                        <div className="row-item">△, м</div>
                    </div>
                    <div className="table-data">
                        {filteredData?.map((item, index) => (
                            <DeformationTableItem key={`def-table-item-${index}`} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeformationControl
