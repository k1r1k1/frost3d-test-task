import React, { useRef, useState } from "react";
import '../DeformationControl/deformation.css'
import './termistor.css'
import { filterByDate, formatDateTime, sortByTime } from "../../helpers/time";
import { getAllDeepMarks } from './helpers'
import TermistorTableItem from "./TermistorTableItem";
import TableDateHeader from "../TableDateHeader";
import TermoModal from "../Modals/TermoModal";
import TermoTrendModal from "../Modals/TermoTrendModal";

const TermistorChain = ({ data, trend }) => {
    const { data: tableData } = data || {};
    const sortedTableData = tableData && sortByTime(tableData)
    const allDeepMarks = getAllDeepMarks(tableData)

    const [expanded, setExpanded] = useState(true)
    const [filterDateFrom, setDateFrom] = useState(undefined)
    const [filterDateTo, setDateTo] = useState(undefined)
    const [isModalShowing, setModalShow] = useState(false)
    const [isTrendModalShowing, setTrendModalShow] = useState(false)

    const isFiltersShowing = filterDateFrom || filterDateTo
    const filteredData = sortedTableData &&
        isFiltersShowing ?
        filterByDate(sortedTableData, filterDateFrom, filterDateTo) :
        sortedTableData

    const handleClose = (e) => {
        e.stopPropagation()
        setExpanded(false)
    }

    const handleShowModal = (e) => {
        e.stopPropagation()
        setModalShow(!isModalShowing)
    }

    const handleShowTrendModal = (e) => {
        e.stopPropagation()
        setTrendModalShow(!isTrendModalShowing)
    }

    // scroll sync 
    const firstDivRef = useRef();
    const secondDivRef = useRef();
  
    const handleScrollFirst = (scroll) => {
      secondDivRef.current.scrollTop = scroll.target.scrollTop;
    };
    const handleScrollSecond = (scroll) => {
      firstDivRef.current.scrollTop = scroll.target.scrollTop;
    };

    return (
        <>
            <div className="defComponent">
                <img alt="mockedPicture" src="def_mock.jpg" loading="lazy" />
            </div>
            <div className={`defTable ${expanded ? '' : 'hidden'}`}>
                <div className="table-toggler" onClick={() => setExpanded(true)}>
                    <span>Термометрическая скважина</span>
                    <button className="button-show-modal" type="button" onClick={handleShowModal}>График температур</button>
                    <button className="button-show-modal" type="button" onClick={handleShowTrendModal}>График трендов</button>
                    <button className="table-toggler-close" type="button" onClick={handleClose}>×</button>
                </div>
                <div className="d-flex">
                    <div className="table-container table-container-short">
                        <div className="table-row heading">
                            <div className="row-item date-header">
                                <TableDateHeader {...{
                                    filterDateFrom,
                                    filterDateTo,
                                    isFiltersShowing,
                                    setDateFrom,
                                    setDateTo
                                }} />
                            </div>
                            <div className="row-item te-header">T<span>e</span></div>
                        </div>
                        <div className="table-data" ref={firstDivRef} onScroll={handleScrollFirst}>
                            {filteredData?.map((item, index) => (
                                <div className="table-row" key={`td-termistor-${index}`}>
                                    <div className="row-item date-item">{formatDateTime(item.time)}</div>
                                    <div className="row-item te-header">{item.averageTemperature.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="table-container table-container-vscroll">
                        <div className="table-row heading">
                            <div className="row-sub-container">
                                <div className="row-item">Глубина, м</div>
                                <div className="row-subitems-horizontal">
                                    {allDeepMarks.map((item, index) => (
                                        <div className="row-item" key={`deep-mark-${index}`}>{item}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="table-data" ref={secondDivRef} onScroll={handleScrollSecond}>
                            {filteredData?.map((item, index) => (
                                <TermistorTableItem
                                    item={item}
                                    marks={allDeepMarks}
                                    key={`termistor-table-item-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isModalShowing && (
                <TermoModal
                    caption="Распределение температур по глубине"
                    onClose={() => setModalShow(false)}
                    data={filteredData}
                />
            )}
            {isTrendModalShowing && (
                <TermoTrendModal
                    caption="График трендов"
                    onClose={() => setTrendModalShow(false)}
                    data={{ trendData: trend?.data, filteredData }}
                />
            )}
        </>
    )
}

export default TermistorChain
