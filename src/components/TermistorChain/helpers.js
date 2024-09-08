export const getAllDeepMarks = (arr) => {
    const allDeepMarks = []

    arr?.forEach(({ data }) => {
        Object.keys(data).forEach((item) => {
            if (!allDeepMarks.find((mark) => mark === item)) allDeepMarks.push(item)
        })
    })

    return allDeepMarks.sort((a, b) => a - b)
}