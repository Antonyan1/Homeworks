function createBook() {
    return {}; 
}

let myPhone = createBook();
function addContact(book, name, phone) {
    book[name] = phone;
    return "adding contact was successful"
}

function findContact(book, name) {
    if (book[name] !== undefined) {
        return book[name];
    } else {
        return "contact not found";
    }
}

function deleteContact(book, name) {
    delete book[name];
    return "contact deletion was successful"
}

function listAll(book) {
    let result = ""
    for (let key in book) {
        result = result + key + ":" + book[key] + "\n";
    }
    return result
}

let book = createBook();
console.log (addContact(book, "Anton", "+7 900 123 45 67"));
console.log (addContact(book, "Maria", "+7 911 987 65 43"));
console.log (addContact(book, "Igor",  "+7 925 555 00 11"));


console.log (findContact(book, "Maria"))
console.log (findContact(book, "Alexei")) 

console.log (listAll(book))

console.log (deleteContact(book, "Igor"))

console.log (listAll(book))