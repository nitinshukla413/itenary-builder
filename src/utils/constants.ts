export const link = {
    'Home': '/',
    'ItenaryBuilder': '/itenary-builder',
    'Add': '/add',
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