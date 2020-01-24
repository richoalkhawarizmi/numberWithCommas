const numberWithCommas = (x) => {
    if (!x) x = 0;
    const a = parseFloat(Math.round(x * 100) / 100).toFixed(2)
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default numberWithCommas;