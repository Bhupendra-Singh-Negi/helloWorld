import fs from 'fs';
import os from 'os';
import nodes from './nodes.js';
import _ from 'lodash';

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greet.txt',`hello ${user.username} !!\n`, ()=>{
    console.log('File created and data written successfully');
});


nodes();


// Using lodash to create an array and find the minimum value
const array = [1, 2, 3, 4, 5,5,4,3,2,1];
const minValue = _.min(array);
console.log(`The minimum value in the array ${array} is: ${  minValue}`);
console.log(`The uniquie value in the array ${array} is: ${_.uniq(array)}`);