// ** React Imports
import { useState, MouseEvent, useCallback } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TableHeader from './tableHeader'
import Chip from '../customChip'
import { store } from './dummy-data';
import AddDrawer from '../addDrawer';

interface UserRoleType {
    [key: string]: { icon: string; color: string }
}

interface UserStatusType {
    [key: string]: any
}

// ** Vars
const userRoleObj: UserRoleType = {
    admin: { icon: 'mdi:laptop', color: 'error.main' },
    author: { icon: 'mdi:cog-outline', color: 'warning.main' },
    editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
    maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
    subscriber: { icon: 'mdi:account-outline', color: 'primary.main' }
}

interface CellType {
    row: any
}

const userStatusObj: UserStatusType = {
    active: 'success',
    pending: 'warning',
    inactive: 'secondary'
}

const LinkStyled = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    '&:hover': {
        color: theme.palette.primary.main
    }
}))


// ** renders client column

const RowOptions = ({ id }: { id: number | string }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const rowOptionsOpen = Boolean(anchorEl)
    const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleRowOptionsClose = () => {
        setAnchorEl(null)
    }

    const handleDelete = () => {
        // dispatch(deleteUser(id))
        handleRowOptionsClose()
    }

    return (
        <>
            <IconButton size='small' onClick={handleRowOptionsClick}>
                <MoreVertIcon fontSize='small' className='text-black' />
            </IconButton>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={rowOptionsOpen}
                onClose={handleRowOptionsClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                PaperProps={{ style: { minWidth: '8rem' } }}
            >
                <MenuItem
                    component={Link}
                    sx={{ '& svg': { mr: 2 } }}
                    onClick={handleRowOptionsClose}
                    href='/apps/user/view/overview/'
                >
                <RemoveRedEyeIcon fontSize='small' className="text-black" />
                    View
                </MenuItem>
                <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
                    <ModeEditIcon fontSize='small' className="text-black" />
                    Edit
                </MenuItem>
                <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
                    <DeleteIcon fontSize='small'  className="text-black" />

                    Delete
                </MenuItem>
            </Menu>
        </>
    )
}

const columns: GridColDef[] = [
    {
        flex: 0.05,
        minWidth: 20,
        field: 'id',
        headerName: 'S.No.',
        renderCell: ({ row }: CellType) => {
            const { fullName } = row
            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }} className="px-5">
                    <h2>{row.id + 1}</h2>
                </Box>
            )
        }
    },
    {
        flex: 0.2,
        minWidth: 200,
        field: 'fullName',
        headerName: 'Passenger Name',
        renderCell: ({ row }: CellType) => {
            const { fullName } = row
            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <LinkStyled href='#' className='mx-2'>{fullName}</LinkStyled>
                </Box>
            )
        }
    },
    // {
    //     flex: 0.2,
    //     minWidth: 200,
    //     field: 'fullName',
    //     headerName: 'Passenger Name',
    //     renderCell: ({ row }: CellType) => {
    //         const { fullName } = row
    //         return (
    //             <Box sx={{ display: 'flex', alignItems: 'center',backgroundColor:'red' }} className="px-10">
    //                     <LinkStyled href='#' className='mx-2'>{fullName}</LinkStyled>
    //             </Box>
    //         )
    //     }
    // },
    {
        flex: 0.1,
        minWidth: 100,
        field: 'phoneNo',
        headerName: 'Phone Number',
        renderCell: ({ row }: CellType) => {
            return (
                <Typography noWrap variant='body2'>
                    {row.phone || '9022s388963'}
                </Typography>
            )
        }
    },
    {
        flex: 0.15,
        minWidth: 250,
        field: 'email',
        headerName: 'Email',
        renderCell: ({ row }: CellType) => {
            return (
                <Typography noWrap variant='body2'>
                    {row.email}
                </Typography>
            )
        }
    },
    {
        flex: 0.09,
        field: 'tripDuration',
        minWidth: 100,
        headerName: 'Trip Duration',
        renderCell: ({ row }: CellType) => {
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: userRoleObj[row.role].color } }}>
                    <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                        {row.tripDuration || '3 Days'}
                    </Typography>
                </Box>
            )
        }
    },
    {
        flex: 0.09,
        minWidth: 100,
        headerName: 'Cost',
        field: 'cost',
        renderCell: ({ row }: CellType) => {
            return (
                <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
                    &#36; {row.cost || 400}
                </Typography>
            )
        }
    },
    {
        flex: 0.1,
        minWidth: 110,
        field: 'status',
        headerName: 'Status',
        renderCell: ({ row }: CellType) => {
            return (
                <Chip
                    skin='light'
                    size='small'
                    label={row.status}
                    color={userStatusObj[row.status]}
                    sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
                />
            )
        }
    },
    {
        flex: 0.1,
        minWidth: 90,
        sortable: false,
        field: 'actions',
        headerName: 'Actions',
        renderCell: ({ row }: CellType) => <RowOptions id={row.id} />
    }
]

const HomeComponent = () => {
    const [value, setValue] = useState<string>('')
    const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

    const handleFilter = useCallback((val: string) => {
        setValue(val)
    }, [])

    const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)


    return (
        <div className='w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-center items-center rounded-xl bg-white '>
            <CardHeader title='Customer Details' className='font-[900] text-[#696969ee]'  sx={{  px:4,py:3,'& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
            <Divider />
            <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
            <DataGrid
                autoHeight
                rows={store?.data}
                columns={columns}
                disableRowSelectionOnClick
                pageSizeOptions={[10, 25, 50]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
            />
            <AddDrawer open={addUserOpen} toggleDrawer={toggleAddUserDrawer} />
        </div>
    )
}
export default HomeComponent
