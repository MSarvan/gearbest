function loadData(key) {
    try {
    let data = window.localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
    } catch (e) {
    console.log("e:", e);
    return undefined;
    }
}

export default loadData;