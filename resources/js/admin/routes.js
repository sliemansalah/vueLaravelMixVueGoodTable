import Home from './components/Home.vue';
import Customers from './components/customers/Customers.vue';
import NewCustomer from './components/customers/NewCustomer.vue';
import Index from './components/customers/Index.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/customers', component: Index,children:[
        {path:'', component: Customers},
        {path:'new', component: NewCustomer}
    ] },
    // { path: '/NewCustomer', component: NewCustomer }
];