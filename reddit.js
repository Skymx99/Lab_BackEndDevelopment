const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise')


rp('https://reddit.com/r/popular.json')
    .then(html => {

        let posts = JSON.parse(html).data.children;

        posts.forEach((item) => {
            let post = {
                title: item.data.title,
                url: item.data.url,
                author: item.data.author
            }
            fs.appendFileSync('popular-articles.json', JSON.stringify(post, null, 4) + '\n');
        });


    })


    .catch(function (err) {
        console.log(err)
    });




//     rp('https://reddit.com/r/popular.json', (err, res, body) => {

//     if (!!err) {
//         console.log(err);
//         return;
//     }

//     let data = JSON.parse(body).data;

//     data.children.forEach((item) => {
//         fs.appendFileSync('popular-articles.json', item.data.title + '\n');
//     });
// });
