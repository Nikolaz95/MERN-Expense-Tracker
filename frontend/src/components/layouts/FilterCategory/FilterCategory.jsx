import React from 'react'

import { transactionCategories } from "../../constants/transactionCategories";


//import css
/* import "./FilterCategory.css"; */
import styles from "./FilterCategory.module.css";
import { useSearchParams } from 'react-router-dom';

const FilterCategory = ({ type, variant = "", className }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category") || "all";

    function handleChange(e) {
        searchParams.set("category", e.target.value);
        setSearchParams(searchParams);
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
