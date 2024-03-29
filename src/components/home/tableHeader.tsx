// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CustomButton from '../button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface TableHeaderProps {

    value: string
    toggle: () => void
    handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
    // ** Props
    const { handleFilter, toggle, value } = props

    return (
        <Box className="max-md:space-y-5 max-md:justify-center max-md:items-center" sx={{ p: 3, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextField
                size='small'
                value={value}
                className='w-1/2 max-md:w-full '
                placeholder='Search Passengers'
                onChange={e => handleFilter(e.target.value)}
                // InputProps={{
                //     endAdornment: (
                //         <InputAdornment>
                //             <IconButton>
                //                 <SearchIcon />
                //             </IconButton>
                //         </InputAdornment>
                //     )
                // }}
            />
            <div className='w-[15%] max-md:w-1/2 flex'>
                <CustomButton variant='primary' leadingIcon={<AddCircleIcon fontSize='small' className='text-white mr-2' />} title='Add User' onClick={toggle} >
                </CustomButton>
            </div>

        </Box>
    )
}

export default TableHeader
