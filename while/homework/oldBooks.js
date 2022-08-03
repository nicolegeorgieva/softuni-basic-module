function oldBooks(input) {
    let favoriteBook = input[0];
    let booksCounter = 0;
    let bookFound = false;

    for (i = 1; i < input.length; i++) {
        if (input[i] === "No More Books") {
            break;
        } else if (input[i] === favoriteBook) {
            bookFound = true;
            booksCounter++;

            console.log(`You checked ${booksCounter - 1} books and found it.`);
            break;
        }

        booksCounter++;
    }

    if (!bookFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCounter} books.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "TG"]);
