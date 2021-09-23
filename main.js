(function () {
    'use strict';



    fetch(`https://api.github.com/users/kattyeye/repos`)
    .then((response) => response.json())
    .then((data) => console.log(data))
        .then((data) => generateHTML(data));

    const generateHTML = (data) => {
    const source = document.querySelector("#repos-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = data;
    const html = template(context);
    document.querySelector(".container").innerHTML = html;
    };



    // fetch(`https://api.github.com/users/kattyeye/repos`)
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    //     .then((data) => generateHTML(data));

    // const generateHTML = (data) => {
    // const source = document.querySelector("#repos-template").innerHTML;
    // const template = Handlebars.compile(source);
    // const context = data;
    // const html = template(context);
    // document.querySelector(".container").innerHTML = html;
    // };



}) ();