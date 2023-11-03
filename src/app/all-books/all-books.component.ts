import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { Book } from '../models/models';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { bookLists } from '../book-list/book-list.component';
import { Dialog } from '../shared/dialog.component';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, RouterModule, MatDialogModule],
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit{
  constructor(private router: Router, public dialog: MatDialog){}

  ngOnInit(): void {
      bookLists.map(list => {
        this.dataSource.push(...list.books);
      });
  }

  dataSource: Book [] = [];

  columns = [
    {
      columnDef: 'bookTitle',
      header: 'Book Title',
      cell: (book: Book) => `${book.bookTitle}`,
    },
    {
      columnDef: 'year',
      header: 'Year',
      cell: (book: Book) => `${book.year}`,
    },
    {
      columnDef: 'authorName',
      header: 'Author Name',
      cell: (book: Book) => `${book.authorName}`,
    },
  ];
  
  displayedColumns = this.columns.map(c => c.columnDef);

  viewLists(){
    this.router.navigateByUrl('my-lists');
  }

  addList() {
    const dialogRef = this.dialog.open(Dialog, {
      data: {listName: '', isList: true},
      width: '300px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.listName);
      bookLists.push({title: result.listName, books: []});
    }); 
  }
}