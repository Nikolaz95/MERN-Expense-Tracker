import React from 'react'

import { transactionCategories } from "../../constants/transactionCategories";


//import css
/* import "./FilterCategory.css"; */
import styles from "./FilterCategory.module.css";
import { useSearchParams } from 'react-router-dom';

const FilterCategory = ({ type, variant = "", className, value, onChange }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    // ← ako ima value/onChange prop — koristi ih (modal mode)
    // ← ako nema — koristi searchParams (filter mode)
    const isModalMode = value !== undefined && onChange !== undefined;

    const selectedCategory = isModalMode
        ? value
        : (searchParams.get("category") || "all");

    function handleChange(e) {
        if (isModalMode) {
            onChange(e); // ← proslijedi event gore u modal
        } else {
            searchParams.set("category", e.target.value);
            setSearchParams(searchParams);
        }
    }

    const filteredCategories = transactionCategories.filter(cat =>
        type ? cat.category.includes(type) : true
    );


    return (
        <section className={` ${styles.filterByCategorySection} ${styles[variant]} ${className} `}>
            <label htmlFor="typeTra">Filter by Category:</label>
            <select name="typeTra" id="typeTra" value={selectedCategory} onChange={handleChange} className='filterByCa'>
                <option value="all">All Transactions</option>
                {filteredCategories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                        {cat.icon} {cat.label}
                    </option>
                ))}
            </select>
        </section>
    )
}

export default FilterCategory
