import { Request, Response } from "express";
import bookstore from "./bookstore";
import { NewBook } from "./types/book";

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser());

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send(bookstore.greeting());
});

app.get('/inventory', (req: Request, res: Response) => {
  const inventory = bookstore.getInventory();
  res.send(inventory);
});

app.get('/search', (req: Request, res: Response) => {
  if(typeof req.query.query == "string") {
    const inventory = bookstore.search(req.query.query);
    res.send(inventory);
  }
  res.sendStatus(400)
});

app.get('/purchase/:id', (req: Request, res: Response) => {
  try {
    if(typeof req.query.id == "string") {
      const id = Number.parseInt(req.query.id)
      const purchasedOrMessage = bookstore.purchaseBook(id)
      res.send(purchasedOrMessage);
    }
  } catch (err: unknown) {
    res.sendStatus(400)
  }
  res.sendStatus(400)
});

// TODO: Add admin authorization
app.post('/book', (req: Request, res: Response) => {
    const newBook: NewBook = req.body
    const addedId = bookstore.addBook(newBook);
    res.send(`"${newBook.name}" was added and got id ${addedId}`);
  });

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});