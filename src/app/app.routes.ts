import { Route, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { QueryStringComponent } from './components/query-string/query-string.component';

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
        path: "parent",
        component: ParentComponent,
        children: [
            {
                path: "",
                redirectTo: "child1",
                pathMatch: "full"
            },
            {
                path: "child1",
                component: Child1Component
            },
            {
                path: "child2",
                component: Child2Component
            }
        ]
    },
    {
        path: "query-string",
        component: QueryStringComponent
    },
    {
        path: "**",
        component: NotfoundComponent
    }
];
