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
import { bookLists } from '../shared/books';


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
