import { Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: 'books'},
    {
        path: 'books', 
        component: AllBooksComponent,
    }, 
    {
        path: 'my-lists', 
        component: BookListComponent
        // loadComponent: () => import('./book-list/book-list.component').then(x => x.BookListComponent)
    },
];
