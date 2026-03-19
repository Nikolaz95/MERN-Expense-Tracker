import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

//import css
import "./PaginationComponent.css"

const PaginationComponent = ({ data = [], itemsPerPage = 10, onPageData }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    // Šaljemo parentu podatke
    useEffect(() => {
        if (onPageData) {
            onPageData(currentData);
        }
    }, [currentPage, data, itemsPerPage]);
    return (
        <div className="pagination">
            <Stack spacing={2}>
                <Pagination
                    count={totalPages || 1}
                    page={currentPage}
                    onChange={handleChange}
                    color="primary"
                    shape="rounded"
                />
            </Stack>
        </div>
    )
}

export default PaginationComponent