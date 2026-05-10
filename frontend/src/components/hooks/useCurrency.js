


const useCurrency = () => ({
    currency: { symbol: "$" },
    convert: (amount) => Number(amount).toFixed(2),
});

export default useCurrency;