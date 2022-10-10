import { Book, NewBook } from "./types/book";

const initialInventory: Book[] = [
{ id: 0, name: "Hitchhikers guide to the galaxy", price: 120.00 },
{ id: 1, name: "Hitchhikers guide to the galaxy", price: 120.00 },
{ id: 2, name: "Typescript for beginners", price: 100.00 },
{ id: 3, name: "The lost symbol", price: 120.00 }
]
let nextId = 4;
// TODO: Possibly restructure to symbolic rather than logistical data with just name, number of books, and with common price per title
const inventory: Book[] = initialInventory;

const bookstore = {
    greeting: (): string => {
        return 'Welcome to the book store!';
    },
    getInventory: (): Book[] => {
        // TODO: Summarize with title, price and number of available books
        return inventory;
    },
    search: (query: string): Book[] | string => {
        // TODO: Summarize with just one title and price per book
        const matching = inventory.filter((book: Book) => book.name.toLowerCase().includes(query.toLowerCase()));
        if(!matching.length) return `No books found matching "${query}"`;
        return matching;
    },
    purchaseBook: (id: number): Book | string => {
        // TODO: Add some kind of financial transaction handling
        const available = inventory.find((book: Book) => book.id === id);
        if(!available) return "Out of stock";
        const purchased = { ...available };
        const index = inventory.indexOf(available);
        inventory.splice(index, 1)
        return purchased;
    },
    addBook: (newBook: NewBook): number => {
        const book: Book = {
            id: nextId,
            name: newBook.name,
            price: newBook.price
        }
        nextId++;
        inventory.push(book)
        return book.id
    },
}

export default bookstore;