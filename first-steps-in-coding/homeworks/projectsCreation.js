function neededHoursForProjects(input) {
    let architectName = input[0];
    let projectsNumber = Number(input[1]);
    console.log(`The architect ${architectName} will need ${3 * projectsNumber} hours to complete ${projectsNumber} project/s.`);
}


neededHoursForProjects(["Sanya", "9"]);
