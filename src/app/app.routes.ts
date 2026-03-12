import { About } from './about/about';
import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';

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
    }
];
