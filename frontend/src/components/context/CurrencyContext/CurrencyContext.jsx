import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import transitionData from '../../data/TransactionData';
const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(
        () => JSON.parse(localStorage.getItem("currency")) || { value: "SEK", label: "SEK", symbol: "SEK" }
    );
    const [rates, setRates] = useState({});
    const [currencies, setCurrencies] = useState([]);

    const { data, loading, error } = useFetch(
        `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_API_KEY}/latest/SEK`
    );

    useEffect(() => {
        if (!data) return;
        setRates(data.conversion_rates);
        const currencyList = Object.keys(data.conversion_rates).map(code => ({
            value: code,
            label: code,
            symbol: code,
        }));
        setCurrencies(currencyList);
    }, [data]);

    function changeCurrency(value) {
        const selected = currencies.find(c => c.value === value);
        setCurrency(selected);
        localStorage.setItem("currency", JSON.stringify(selected));
    }

    function convert(amountInSEK) {
        if (!rates[currency.value]) return Number(amountInSEK).toFixed(2);
        return (amountInSEK * rates[currency.value]).toFixed(2);
    }

    return (
        <CurrencyContext.Provider value={{
            currency,
            changeCurrency,
            currencies,
            convert,
            loading,
            error
        }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);