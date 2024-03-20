export const link = {
    'Home': '/',
    'ItenaryBuilder': '/itenary-builder',
    'Add': '/admin',
}
export const allLinks = {
    [link.Home]: {
        title: 'Home',
        link: link.Home,
    },
    [link.ItenaryBuilder]: {
        title: 'Itenary Builder',
        link: link.ItenaryBuilder,
    },
    [link.Add]: {
        title: 'Add',
        link: link.Add,
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