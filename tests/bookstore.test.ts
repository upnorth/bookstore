import bookstore from "../src/bookstore";
import { NewBook } from "../src/types/book";

describe('bookstore', () => {
    test('should start with empty inventory', () => {
      expect(bookstore.getInventory()).toEqual([]);
    });

    test('should add book', () => {
      const newBook: NewBook = { name: "Book", price: 100 }

      const addedId = bookstore.addBook(newBook);

      const currentInventory = bookstore.getInventory()
      expect(typeof addedId).toBe("number")
      expect(currentInventory.length).toBe(1);
      expect(currentInventory[0]).toEqual(newBook);
    });
  });