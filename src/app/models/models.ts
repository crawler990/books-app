export interface Book {
    bookTitle: string;
    year: string;
    authorName: string;
}

export interface BookList {
    title: string;
    books: Book [];
}

export interface DialogData{
    listName: string;
    bookTitle: string;
    year: string;
    authorName: string;
    isList: boolean
}