import DefaultPage from '../Components/DefaultPage/DefaultPage.js';

const router = [
    {
        path: '/',
        element: <DefaultPage />
    }
];

const navItems = [{
    text: 'navItem',
    path: '/navItem1'
},
{
    text: 'navItem',
    path: '/navItem2'
},
{
    text: 'navItem',
    path: '/navItem3'
}, {
    text: 'navItem',
    path: '/navItem4'
}, {
    text: 'navItem',
    path: '/navItem5'
}];

export default router;
export { navItems };