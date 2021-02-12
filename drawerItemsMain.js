export const drawerItemsMain = [
    {
        key: 'Home',
        title: 'Home',
        routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
    },
    {
        key: 'Profile',
        title: 'Profile',
        routes: [
            {nav: 'MainDrawer', routeName: 'Project1', title: 'Project 1'},
            {nav: 'MainDrawer', routeName: 'Project2', title: 'Project 2'},
            {nav: 'MainDrawer', routeName: 'Project3', title: 'Project 3'},
        ],

    },
    {
        key: 'Settings',
        title: 'Settings',
        routes: [
            {nav: 'MainDrawer', routeName: 'Settings1', title: 'Settings 1'},
            {nav: 'MainDrawer', routeName: 'Settings2', title: 'Settings 2'},
        ],
    },
];
