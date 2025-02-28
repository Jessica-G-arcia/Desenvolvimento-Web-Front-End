import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PostDetail1Component } from './post-detail1/post-detail1.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'post-list', component: PostListComponent,
        children: [
            {path: 'post-detail', component: PostDetailComponent},
            {path: 'post-detail1', component: PostDetail1Component},
            
        ]
    },
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotFoundComponent}
];
