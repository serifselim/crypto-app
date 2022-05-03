// Get Data From API 
export const fetchData = async (url) => {
    const res = await fetch(url);
    return res.json();
};

// Format Price Text
export const formatToCurrency = (amount) => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};