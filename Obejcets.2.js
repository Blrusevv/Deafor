function solve() {
    let bookCollection = [];

    let book1 = {
        title: 'A song of ice and fire',
        author: 'Goerge R. R. Martin',
        pages: 893
    };

    let book2 = {
        title: 'American Psycho',
        author: 'Someone',
        pages: 243
    };

    bookCollection.push(book1);
    bookCollection.push(book2);

    bookCollection.forEach(book => {
        console.log(`The book ${book.title} by ${book.author} is ${book.pages} pages long.`)
    });
}

solve()