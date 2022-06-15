function demo(input) {
    let name = "Asq";

    switch (name) {
        case "Asq":
        case "Nicole":
        case "Milena":
        case "Peter": console.log("Admin"); break;
        default: console.log(`${name} is user!`); break;
    }
}

demo();