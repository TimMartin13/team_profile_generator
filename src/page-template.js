// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card text-white">
            <div class="card-header">
                <h2>${ manager.getName() }</h2>
                <h3><span class="fas fa-mug-hot"></span> ${ manager.getRole() }</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="far fa-id-card"style="font-size: 28px;"></span> : ${ manager.getId() }</li>
                <li class="list-group-item"><span class="far fa-envelope" style="font-size: 31px;"></span> : <a href="mailto:${ manager.getEmail() }">${ manager.getEmail() }</a></li>
                <li class="list-group-item"><span class="fas fa-door-open"  style="font-size: 25px;"></span> : ${ manager.getOfficeNumber() }</li>
            </ul>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card text-white">
            <div class="card-header">
                <h2>${ engineer.getName() }</h2>
                <h3><span class="fas fa-laptop-code"></span> ${ engineer.getRole() }</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="far fa-id-card"style="font-size: 28px;"></span> : ${ engineer.getId() }</li>
                <li class="list-group-item"><span class="far fa-envelope" style="font-size: 31px;"></span> : <a href="mailto:${ engineer.getEmail() }">${ engineer.getEmail() }</a></li>
                <li class="list-group-item"><span class="fab fa-github" style="font-size: 33px;"></span> : <a href="https://github.com/${ engineer.getGithub() }" target="_blank">${ engineer.getGithub() }</a></li>
            </ul>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card text-white">
            <div class="card-header">
                <h2>${ intern.getName() }</h2>
                <h3><span class="fas fa-graduation-cap"></span> ${ intern.getRole() }</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="far fa-id-card"style="font-size: 28px;"></span> : ${ intern.getId() }</li>
                <li class="list-group-item"><span class="far fa-envelope" style="font-size: 31px;"></span> : <a href="mailto:${ intern.getEmail() }">${ intern.getEmail() }</a></li>
                <li class="list-group-item"><span class="fas fa-university" style="font-size: 31px;"></span> : ${ intern.getSchool() }</li>
            </ul>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <header>My Team</header>
    <div class="container-fluid">
        ${generateTeam(team)}
    </div>
</body>
</html>
    `;
};







