(function () {
    'use strict';



    fetch(`https://api.github.com/users/kattyeye`)
        .then((response) => response.json())
        .then((data) => generateHTML(data));


    fetch(`https://api.github.com/users/kattyeye/repos`)
        .then(response => response.json())
        .then((data) => generateRepoStuff(data));


    fetch(`https://api.github.com/users/kattyeye/followers`)
        .then(response => response.json())
        .then((data) => console.log(data));


    fetch(`https://api.github.com/users/kattyeye/following`)
        .then(response => response.json())
        .then((data) => console.log(data));



    const generateHTML = (data) => {
        const source = document.querySelector("#git-bio-template").innerHTML;
        const template = Handlebars.compile(source);
        const html = template(data);
        console.log('user data', data);
        document.querySelector(".container").innerHTML = html;
    };

    const generateRepoStuff = (data) => {
        const source = document.querySelector("#git-repo-template").innerHTML;
        const template = Handlebars.compile(source);
        const html = template({ repos: data });
        document.querySelector(".repo-container").innerHTML = html;
    };

}) ();