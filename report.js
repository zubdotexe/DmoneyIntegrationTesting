const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection: `https://api.postman.com/collections/35170552-75b03bd0-5736-4cf2-8340-4a74996d0ce2?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});