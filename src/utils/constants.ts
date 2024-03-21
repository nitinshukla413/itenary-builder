import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';
export const link = {
    'Home': '/',
    'ItenaryBuilder': '/itenary-builder',
    'Add': '/admin',
}
export const allLinks = {
    [link.Home]: {
        title: 'Home',
        link: link.Home,
        icon:HomeIcon,
    },
    [link.ItenaryBuilder]: {
        title: 'Itenary Builder',
        link: link.ItenaryBuilder,
        icon:HandymanIcon,
    },
    [link.Add]: {
        title: 'Add',
        link: link.Add,
        icon:AddCircleIcon,
        sublinks:[{
            title:'Add Hotels',
            link:'/admin',
        },{
            title:'Add Destinations',
            link:'/admin',
        },
        {
            title:'Add Activity',
            link:'/admin',
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