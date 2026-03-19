import React, { useRef } from 'react'
import Button from '../Buttons/Button'
import { iconSearch } from '../../../assets/BtnIcons'


//import css
import "./SearchForm.css";
import Form from '../FormComponents/FormWrapper/Form';
import Input from '../FormComponents/FormWrapper/Input/Input';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const inputRef = useRef(null);

    function handleSearch(e) {
        searchParams.set("search", e.target.value);
        setSearchParams(searchParams);
    }

    const handleFocusInput = () => inputRef.current?.focus();
    return (
        <>
            <Form action="" variant="formSearchTransition">
                <Input type="text"
                    ref={inputRef}
                    placeholder='Search Transactions'
                    variant="inputSearchTransition"
                    onChange={handleSearch}
                    value={searchParams.get("search") || ""} />

            </Form>
            <Button icon={iconSearch}
                onClick={handleFocusInput}
                variant='btnSearchTransition'>
            </Button>
        </>
    )
}

export default SearchForm
