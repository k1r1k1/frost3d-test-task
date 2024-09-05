import React, { useState } from "react";
import './deformation.css'
import DeformationTableItem from "./DeformationTableItem";
import { filterByDate, sortByTime } from "../../helpers/time";

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
    const handleResetFilters = () => {
        setDateFrom(undefined)
        setDateTo(undefined)
    }
    const handleFilterFrom = (value) => setDateFrom(value)
    const handleFilterTo = (value) => setDateTo(value)

    return (
        <>
            <div className="defComponent">
                <img alt="mockedPicture" src="def_mock.jpg" loading="lazy" />
            </div>
            <div className={`defTable ${expanded ? '' : 'hidden'}`}>
                <div className="table-toggler" onClick={() => setExpanded(true)}>
                    <span>Деформационная марка</span>
                    <button type="button" onClick={handleClose}>×</button>
                </div>
                <div className="table-container">
                    <div className="table-row heading">
                        <div className="row-item">
                            <div className="date-table-header">
                                <div>
                                    <span>Дата и время измерения</span>
                                    {!isFiltersShowing &&
                                        (<button
                                            type="button"
                                            className="filter-button"
                                            onClick={() => setDateTo(
                                                new Date(Date.now())
                                                    .toISOString()
                                                    .slice(0,10)
                                                )}
                                        >
                                            Фильтр Ⴤ
                                        </button>)
                                    }
                                    {isFiltersShowing &&
                                        (<button
                                            type="button"
                                            className="filter-button"
                                            onClick={handleResetFilters}
                                        >
                                            Сброс ×
                                        </button>)
                                    }
                                </div>
                                {isFiltersShowing &&
                                    (<div className="date-table-filter">
                                        <label>С</label>
                                        <input
                                            type="date"
                                            value={filterDateFrom}
                                            onChange={({ target }) => handleFilterFrom(target.value)}
                                        />
                                        <label>ПО</label>
                                        <input
                                            type="date"
                                            value={filterDateTo}
                                            onChange={({ target }) => handleFilterTo(target.value)}
                                        />
                                    </div>)
                                }
                            </div>
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
