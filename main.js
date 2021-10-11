(function () {
    'use strict';




     const userFetch = fetch(`https://api.github.com/users/kattyeye`)
            .then((response) => response.json())
            .then((data) => generateHTML(data))


    const repoFetch = fetch(`https://api.github.com/users/kattyeye/repos`)
        .then(response => response.json())
            .then((data) => generateRepoStuff(data))


    const followersFetch = fetch(`https://api.github.com/users/kattyeye/followers`)
        .then(response => response.json())
        .then((data) => console.log(data))


   const followingFetch = fetch(`https://api.github.com/users/kattyeye/following`)
        .then(response => response.json())
        .then((data) => console.log(data))

    const allData = Promise.all([
        userFetch, repoFetch, followersFetch, followingFetch,
    ])

    allData.then(() => {
        const generateHTML = (data) => {
            const source = document.querySelector("#git-bio-template").innerHTML;
            const template = Handlebars.compile(source);
            const html = template(data);
            document.querySelector(".container").innerHTML = html;
        };

    const generateRepoStuff = (data) => {
        // console.log(document.querySelector("#git-bio-template").innerHTML)
        const source = document.querySelector("#git-repo-template").innerHTML;
        const template = Handlebars.compile(source);
        const html = template(data);
        console.log(data)
        document.querySelector(".repo-container").innerHTML = html;
    };
    })


}) ();