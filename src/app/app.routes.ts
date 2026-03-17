import { About } from './about/about';
import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Products } from './products/products';
import { Stories } from './stories/stories';
import { AddStory } from './add-story/add-story';
import { AddProduct } from './add-product/add-product';
import { Register } from './register/register';

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
    },
    {
        path: 'add-product',
        component: AddProduct,
    },
    {
        path: 'stories',
        component: Stories,
    },
    {
        path: 'add-story',
        component: AddStory,
    },
    {
        path: 'register',
        component: Register,
    }
];
