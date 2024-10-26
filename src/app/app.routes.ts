import { Route, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
    , {
        path: "home",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "product-detail",
        component: ProductDetailComponent
    },
    {
        path: "product-detail/:id",
        component: ProductDetailComponent
    },
    {
        path: "product-detail/:id1/:id2",
        component: ProductDetailComponent
    },
    {
        path: "**",
        component: NotfoundComponent
    }
];
