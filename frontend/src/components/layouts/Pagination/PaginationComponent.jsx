import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

//import css
import "./PaginationComponent.css"

const PaginationComponent = ({ data = [], itemsPerPage = 10, onPageData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const isMobile = useMediaQuery("(max-width: 425px)");
    const isXSmall = useMediaQuery("(max-width: 320px)");

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
                    siblingCount={0}
                    boundaryCount={isXSmall ? 0 : isMobile ? 0 : 1}
                    hidePrevButton={false}
                    hideNextButton={false}

                />
            </Stack>
        </div>
    )
}

export default PaginationComponent