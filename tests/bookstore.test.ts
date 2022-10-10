import bookstore from "../src/bookstore";

describe('bookstore', () => {
    test('should start with empty inventory', () => {
      expect(bookstore.getInventory()).toEqual([]);
    });
  });