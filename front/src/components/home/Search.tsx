import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { EndPoint } from '../../lib/hook/useFetchEndPoints';

interface SearchBarProps {
    searched: string;
    initialRows: Array<EndPoint>;
    setRows: React.Dispatch<React.SetStateAction<EndPoint[]>>;
    setSearched: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = (props: SearchBarProps) => {
    const { searched, initialRows, setRows, setSearched } = props;

    const requestSearch = (searchedVal: string) => {
        const filteredRows: Array<EndPoint> = initialRows.filter((row: EndPoint) => {
            return row.path.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };
    const changeSearchedHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearched(event.target.value);
        requestSearch(event.target.value);
    };

    const toggleSearch = () => {
        setSearched("");
        setRows(initialRows);
    };

    return (
        <Box sx={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            pb: '5px',
        }}>
            <TextField
                id="search"
                value={searched}
                placeholder="Search API Name"
                onChange={(event) => changeSearchedHandler(event)}
            />
            {searched === "" && <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>}
            {searched !== "" && <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => toggleSearch()}>
                <CloseIcon />
            </IconButton>}
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => toggleSearch()}>
                <RestartAltIcon />
            </IconButton>

        </Box>
    );
}

export default SearchBar;