import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DialogData } from "../models/models";

@Component({
    selector: 'form-dialog',
    template: `
    <div *ngIf="data.isList; else bookForm">
      <h1 mat-dialog-title>Add new List</h1>
  
      <div mat-dialog-content>
        <p>Enter New List name</p>
        <mat-form-field class="field">
          <mat-label>Name</mat-label>
          <input matInput [(ngModel)]="data.listName">
        </mat-form-field>
      </div>
    </div>
  
    <ng-template #bookForm>
      <h1 mat-dialog-title>Add new Book to {{data.listName}}</h1>
  
      <div mat-dialog-content>
        <p>Enter Book Title</p>
        <mat-form-field class="field">
          <mat-label>Title</mat-label>
          <input matInput [(ngModel)]="data.bookTitle">
        </mat-form-field>
  
        <p>Enter Book Year</p>
        <mat-form-field class="field">
          <mat-label>Year</mat-label>
          <input matInput [(ngModel)]="data.year">
        </mat-form-field>
  
        <p>Enter Book Author</p>
        <mat-form-field class="field">
          <mat-label>Author</mat-label>
          <input matInput [(ngModel)]="data.authorName">
        </mat-form-field>
      </div>
    </ng-template>
  
    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-button disabled="{{(data.isList)? (!data.listName) : (!data.bookTitle || !data.year || !data.authorName)}}" [mat-dialog-close]="data" cdkFocusInitial>Ok</button>
    </div>
    `,
    styles:[
    `:host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }`,
    `.field {
      width: 100%
    }
    `
  ],
    standalone: true,
    imports: [
      MatFormFieldModule, 
      MatInputModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      MatDialogModule,
      CommonModule,
    ],
  })
  export class Dialog {
    constructor(
      public dialogRef: MatDialogRef<Dialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    cancel(): void {
      this.dialogRef.close();
    }
  }