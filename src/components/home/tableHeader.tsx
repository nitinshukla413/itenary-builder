// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '../button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface TableHeaderProps {

    value: string
    toggle: () => void
    handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
    // ** Props
    const { handleFilter, toggle, value } = props

    return (
        <Box sx={{ p: 3, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextField
                size='small'
                value={value}
                className='w-1/2'
                placeholder='Search Passengers'
                onChange={e => handleFilter(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <div className='w-[15%] flex'>
                <Button leadingIcon={<AddCircleIcon fontSize='small' className='text-white mr-2' />} title='Add User' onClick={toggle} >
                </Button>
            </div>

        </Box>
    )
}

export default TableHeader
