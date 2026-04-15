import React from 'react'

//import css
import "./Table.css";

import styled from "styled-components";



/* styled css */

const TalbeSectionNoData = styled.section`
    display: flex;
    justify-content: center;
`;



const Table = ({ data = [], columns = [], noDataText }) => {
    if (data.length === 0) {
        return (
            <TalbeSectionNoData>
                <p className='noDataText'>{noDataText}</p>
            </TalbeSectionNoData>
        );
    }
    return (
        <section className='talbeSection'>
            <table className='table'>
                <thead>
                    <tr className='tableRow'>
                        {columns.map((col, index) => (
                            <th key={index} className={col.className || ''}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={item.id || rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className={col.className || ''}>
                                    {/* Proveravamo da li imamo custom render ili samo polje */}
                                    {col.render ? col.render(item) : item[col.field]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Table
