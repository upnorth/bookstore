# Bookstore server

## Setup

Simple node express server with non-persistent memory to showcase APIs for using and managing a bookstore.

Use with:
```
npm run build
```

```
npm run start
```

Runs on port 8080, see .env.

### Testing
```
npm run test
```

## APIS

### GET /

Greeting endpoint.

Can preferably be set up to document available APIs and how to use them

### GET /inventory

Lists current books available in the store

### GET /search?query=yourSearchQuery

Lists all books where the title includes your query

### GET /purchase?id=idOfBookToPurchase

Attempts to process a purchase of a book by if it's available

### POST /book

Add new books to the inventory.

```
{
    name: string,
    price: number
}
```