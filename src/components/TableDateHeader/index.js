import React from "react";

const TableDateHeader = ({
    isFiltersShowing,
    setDateTo,
    setDateFrom,
    filterDateFrom,
    filterDateTo
  }) => {

  const handleResetFilters = () => {
    setDateFrom(undefined)
    setDateTo(undefined)
  }
  const handleFilterFrom = (value) => setDateFrom(value)
  const handleFilterTo = (value) => setDateTo(value)

    return (
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
    )
}

export default TableDateHeader
