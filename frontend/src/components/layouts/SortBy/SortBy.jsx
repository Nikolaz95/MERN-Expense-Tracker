import React from 'react'


//import css
import "./SortBy.css";
import { sortOptions } from '../../constants/sortOptions';

const SortBy = ({ value, onChange }) => {


    return (
        <section className='sortBySection'>
            <label htmlFor="sortBy">Sort by:</label>
            <select name="sortBy" id="sortBy"
                value={value}
                onChange={(e) => onChange(e.target.value)}>
                {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </section>
    )
}

export default SortBy
