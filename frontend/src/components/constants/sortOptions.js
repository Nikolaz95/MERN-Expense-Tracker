export const sortOptions = [
    { value: "date-desc", label: "Latest" },
    { value: "date-asc", label: "Oldest" },
    { value: "recipient-asc", label: "A to Z" },
    { value: "recipient-desc", label: "Z to A" },
    { value: "amount-desc", label: "Highest" },
    { value: "amount-asc", label: "Lowest" },
];

export const sortTransactions = (data, sortBy) => {
    console.log("sortBy:", sortBy);
    console.log("data before sort:", data);

    const [field, direction] = sortBy.split("-");
    console.log("field:", field, "direction:", direction);

    const modifier = direction === "asc" ? 1 : -1;

    return [...data].sort((a, b) => {
        if (field === "date") {
            return (new Date(a.date) - new Date(b.date)) * modifier;
        }
        if (typeof a[field] === "string") {
            return a[field].localeCompare(b[field]) * modifier;
        }
        return (a[field] - b[field]) * modifier;
    });
};