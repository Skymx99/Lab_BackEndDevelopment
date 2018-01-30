const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');
const download = require('download');




rp('https://reddit.com/r/popular.json')
    .then(html => {

        let posts = JSON.parse(html).data.children;

        posts.forEach((item) => {
            let post = {
                id: item.data.id,
                url: item.data.url,
            }

            let ext = path.extname(post.url);
            let pathName = path.join(__dirname, 'downloads', post.id + ext)

            if (ext === '.jpg') {

                const options = {
                    url: post.url,
                    encoding: null
                };

                rp(options)
                    .then((res) => {
                        const buffer = Buffer.from(res, 'utf8');
                        fs.writeFileSync(pathName, buffer);
                    });

            }

            else if (ext === '.png') {

                const options = {
                    url: post.url,
                    encoding: null
                };

                rp(options)
                    .then((res) => {
                        const buffer = Buffer.from(res, 'utf8');
                        fs.writeFileSync(pathName, buffer);
                    });

            }



        });


    })


    .catch(function (err) {
        console.log(err)
    });


