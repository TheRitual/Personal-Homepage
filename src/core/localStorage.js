export const portfolioKey = "portfolio";
export const fetchTimeKey = "fetchTime";

export const saveTaskInLocalStorage = (key ,payload) => {
    return localStorage.setItem(key, JSON.stringify(payload));
}

export const getTaskFromLocalStorage = (key, defaultVal) => {
    return JSON.parse(localStorage.getItem(key)) || defaultVal;
}