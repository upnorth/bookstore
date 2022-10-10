import { Book, BookInfo, NewBook } from "./types/book";

let id = 0;
const inventory: Book[] = [];

const getBookInfo = (books: Book[]) => {
    return books.map(book => {
        return { name: book.name, price: book.price} 
    });
}

const bookstore = {
    greeting: (): string => {
        return 'Welcome to the book store!';
    },
    getInventory: (): BookInfo[] => {
        return getBookInfo(inventory);
    },
    search: (query: string): BookInfo[] | string => {
        const matching = inventory.filter((book: Book) => book.name.toLowerCase().includes(query.toLowerCase()));
        if(!matching.length) return `"No books found matching "${query}`;
        return getBookInfo(matching);
    },
    purchaseBook: (id: number): Book | string => {
        const available = inventory.find((book: Book) => book.id === id);
        if(!available) return "Out of stock";
        const purchased = { ...available };
        const index = inventory.indexOf(available);
        inventory.splice(index, 1)
        return purchased;
    },
    addBook: (newBook: NewBook): number => {
        const book: Book = {
            id: id,
            name: newBook.name,
            price: newBook.price
        }
        id++;
        inventory.push(book)
        return book.id
    },
}

export default bookstore;