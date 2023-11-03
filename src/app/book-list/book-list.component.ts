import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { BookList } from "../models/models";
import { Dialog } from '../shared/dialog.component';


export const bookLists: BookList [] = [
{
  title: 'My Favourite Science Fiction Books',
  books: [
    { bookTitle: 'Dune', year: '1965', authorName: 'Frank Herbert' },
    { bookTitle: "Ender's Game", year: '1985', authorName: 'Orson Scott Card' },
    { bookTitle: '1984', year: '1949', authorName: 'George Orwell' },
    { bookTitle: 'Fahrenheit 451', year: '1953', authorName: 'Ray Bradbury' },
    { bookTitle: 'Brave New World', year: '1932', authorName: 'Aldous Huxley' }
  ]
},
{
  title: 'Scariest Books on Earth',
  books: [
    { bookTitle: "Dracula", year: '1897', authorName: "Bram Stoker" },
    { bookTitle: "Frankenstein", year: '1818', authorName: "Mary Shelley" },
    { bookTitle: "The Shining", year: '1977', authorName: "Stephen King" },
    { bookTitle: "The Haunting of Hill House", year: '1959', authorName: "Shirley Jackson" },
    { bookTitle: "The Exorcist", year: '1971', authorName: "William Peter Blatty" }
  ]
},
{
  title: 'Romance Novels',
  books: [
    { bookTitle: "Pride and Prejudice", year: '1813', authorName: "Jane Austen" },
    { bookTitle: "Wuthering Heights", year: '1847', authorName: "Emily Brontë" },
    { bookTitle: "Gone with the Wind", year: '1936', authorName: "Margaret Mitchell" },
    { bookTitle: "The Notebook", year: '1996', authorName: "Nicholas Sparks" },
    { bookTitle: "Outlander", year: '1991', authorName: "Diana Gabaldon" }
  ]
}
];

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @ViewChildren(MatTable) tables!: QueryList<MatTable<BookList>>;

  constructor(public dialog: MatDialog){}

  bookListIndex!: number;

  bookLists = bookLists;

  displayedColumns: string[] = ['bookTitle', 'year', 'authorName', 'delete'];

  addList() {
    const dialogRef = this.dialog.open(Dialog, {
      data: {listName: '', isList: true},
      width: '280px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.bookLists.push({title: result.listName, books: []});
    }); 
  }

  removeList(listIndex: number){
    this.bookLists.splice(listIndex, 1);
  }

  addBook(listIndex: number){
    const currentList = this.bookLists[listIndex];
    const tableToUpdate = this.tables.toArray()[listIndex];
    
    const dialogRef = this.dialog.open(Dialog, {
      data: {listName: currentList.title, bookTitle: '', year: '', authorName: '', isList: false},
      width: '600px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      delete result.listName;
      this.bookLists[listIndex].books.push(result);

      tableToUpdate.renderRows();
    });   
  }

  removeBook(listIndex: number, bookIndex: number){
    this.bookLists[listIndex].books.splice(bookIndex, 1);
    const tableToUpdate = this.tables.toArray()[listIndex];
    tableToUpdate.renderRows();
  }
}
