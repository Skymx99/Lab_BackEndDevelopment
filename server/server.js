let path = require('path');
let fs = require('fs');

let chirps = [
{
author: 'Alex',
chirp: 'Insert chirp text here',
},
{
author: 'Alex',
chirp: 'Insert chirp text here',
},
{
author: 'Alex',
chirp: 'Insert chirp text here',
},
{
author: 'Alex',
chirp: 'Insert chirp text here',
},
{
author: 'Alex',
chirp: 'Insert chirp text here',
}
];

fs.writeFile(path.join(__dirname, '../chirps.json'), JSON.stringify(chirps, null, 4), function(err) {
if(err) return console.log(err);

console.log(chirps);
});