import { About } from './about/about';
import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Products } from './products/products';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'contact',
        component: Contact,
    },
    {
        path: 'products',
        component: Products,
    }
];
