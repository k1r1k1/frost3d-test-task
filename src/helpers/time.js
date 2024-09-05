export const formatDateTime = (dateIsoString) => {
    if (!dateIsoString) return
    const thisDate = new Date(dateIsoString)
    return ((thisDate.getDate() < 10) ? "0" : "")
        + thisDate.getDate() + "."
        + (thisDate.getMonth() + 1)  + "." 
        + thisDate.getFullYear() + " "  
        + thisDate.getHours() + ":"  
        + ((thisDate.getMinutes() < 10) ? "0" : "") + thisDate.getMinutes()
}

export const sortByTime = (arr) =>
    arr.sort((a, b) => {
        const dateA = new Date(a.time)
        const dateB = new Date(b.time)
        
        return dateB - dateA;
    })

export const filterByDate = (arr, from, to) => {

    const start = new Date(from || '01-01-2007')
    const end = new Date(to || Date.now())

    return arr.filter(item => {
        const itemDate = new Date(item.time).setHours(0)
        return itemDate >= start.setHours(0) && itemDate <= end.setHours(0)
    });
}