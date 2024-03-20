// ** React Imports
import { useState, MouseEvent, useCallback } from 'react'

// ** Next Imports
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

import Avatar from '@mui/material/Avatar';
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { SelectChangeEvent } from '@mui/material/Select'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TableHeader from './tableHeader'
import IconifyIcon from '../Icon'
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
const renderClient = (row: any) => {
    if (row.avatar.length) {
        return <Avatar sx={{ bgcolor: userStatusObj[row.status] }} className='text-sm'>
            {row.avatar[0] + row.avatar[1]}
        </Avatar>
    } else {
        return (
            <AccountCircleIcon
                fontSize='large' className='text-black' />
        )
    }
}

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
                <MoreVertIcon size="large" color='black' className='text-black' />
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
                    <RemoveRedEyeIcon fontSize='small' color="black" className="text-black" />
                    View
                </MenuItem>
                <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
                    <ModeEditIcon fontSize='small' color="black" className="text-black" />
                    Edit
                </MenuItem>
                <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
                    <DeleteIcon fontSize='small' color="black" className="text-black" />

                    Delete
                </MenuItem>
            </Menu>
        </>
    )
}

const columns: GridColDef[] = [
    {
        flex: 0.2,
        minWidth: 230,
        field: 'fullName',
        headerName: 'Passenger Name',
        renderCell: ({ row }: CellType) => {
            const { fullName } = row
            return (
                <Box sx={{ display: 'flex', alignItems: 'center' }} className="px-10">
                    {renderClient(row)}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }} className="ml-3">
                        <LinkStyled href='#' className='mx-2'>{fullName}</LinkStyled>
                    </Box>
                </Box>
            )
        }
    },
    {
        flex: 0.2,
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
        flex: 0.15,
        field: 'role',
        minWidth: 150,
        headerName: 'Role',
        renderCell: ({ row }: CellType) => {
            return (
                <Box  sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: userRoleObj[row.role].color } }}>
                    <IconifyIcon icon={userRoleObj[row.role].icon} fontSize={20} />
                    <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
                        {row.role}
                    </Typography>
                </Box>
            )
        }
    },
    {
        flex: 0.15,
        minWidth: 120,
        headerName: 'Plan',
        field: 'currentPlan',
        renderCell: ({ row }: CellType) => {
            return (
                <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
                    {row.currentPlan}
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
        <div className='w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl '>
            <CardHeader title='Passenger Details' className='font-[900] text-[#696969ee]' sx={{ pb: 1, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
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
            <AddDrawer open={addUserOpen} toggleDrawer={toggleAddUserDrawer}/>
        </div>
    )
}
export default HomeComponent
