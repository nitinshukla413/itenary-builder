import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';
import HotelIcon from '@mui/icons-material/Hotel';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import RowingIcon from '@mui/icons-material/Rowing';
export const link = {
    'Home': '/',
    'ItenaryBuilder': '/itenary-builder',
    'Add': '/admin/hotel',
}
export const allLinks = {
    [link.Home]: {
        title: 'Home',
        link: link.Home,
        icon:HomeIcon,
    },
    [link.ItenaryBuilder]: {
        title: 'Itinerary Builder',
        link: link.ItenaryBuilder,
        icon:HandymanIcon,
    },
    [link.Add]: {
        title: 'Add',
        link: link.Add,
        icon:AddCircleIcon,
        sublinks:[{
            title:'Add Hotels',
            link:'/admin/hotel',
            icon:HotelIcon
        },{
            title:'Add Destinations',
            link:'/admin/destination',
            icon:AddLocationIcon
        },
        {
            title:'Add Activity',
            link:'/admin/activity',
            icon:RowingIcon
        }]

    },
}

export const links=[allLinks[link.Home],allLinks[link.ItenaryBuilder],allLinks[link.Add]]
export enum typeOfFood{
    'Lunch'='Lunch',
    'Breakfast'='Breakfast',
    'Dinner'='Dinner',
    'Packed Lunch'='Packed Lunch',
}
export enum typeOfVehicle{
    'Car'='Car',
    'Bike'='Bike'
}
export enum typeOfFuel{
    'Petrol'='Petrol',
    'Diesel'='Diesel'
}
export const navBarLinks=[allLinks[link.Home],allLinks[link.ItenaryBuilder],allLinks[link.Add]]