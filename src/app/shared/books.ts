import { BookList } from "../models/models";

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