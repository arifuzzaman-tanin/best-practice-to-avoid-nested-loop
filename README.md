### Right way to check an array contains any element of another array, with time and space complexity.

<p style="color: red;">Bad approach</p>

```javascript
const STUDENT_OF_SCIENCE_CLUB = new Array(100000).fill('abc');
const STUDENT_OF_SPORTS_CLUB = new Array(100000).fill('cdf');

const {performance} = require('perf_hooks');

function hasCommonStudentInBothClub(studentsOfScienceClub, studentsOfSportClub) {

    for (let i = 0; i < studentsOfScienceClub.length; i++) {
        for (let j = 0; j < studentsOfSportClub.length; j++) {
            if (studentsOfScienceClub[i] == studentsOfSportClub[j]) {
                return false;
            }
        }
    }
    return false;
}

let t0 = performance.now();

let hasCommonStudent = hasCommonStudentInBothClub(STUDENT_OF_SCIENCE_CLUB, STUDENT_OF_SPORTS_CLUB);
console.log(hasCommonStudent);
let t1 = performance.now();

let a = t1 - t0;
console.log("Time spends " + a + ' milliseconds');
```

<p style="margin-bottom: 0px;">Explain:</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
<small>Here we are working with a nested loop. We have two arrays every array has 100000 data.</small>
</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
<small>The second loop is running 100000 times for every element of the first loop. We are making a ton of cycles of a loop. The cycle will increase by 100000 if we add an extra element in the first array.</small>
</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
<small>The time complexity of this code is O(N^2). Just for understanding how O(N^2)?</small>
</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
<small>O(array1 x array2) = O(a x b) = O (N^2)</small>
</p>
<p style="margin-top: 0px;margin-bottom: 0px;"> The calculated time complexity of this conde is <b>37488.77419500053</b> milliseconds</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
But the space complexity of the code is better than others. Here space complexity is <b> O(1)</b>.
Because we are not taking any extra variable of anything than can take space in memory.
</p>


<p style="color: blue;">Good approach</p>

```javascript
const STUDENT_OF_SCIENCE_CLUB = new Array(100000).fill('abc');
const STUDENT_OF_SPORTS_CLUB = new Array(100000).fill('cdf');

const {performance} = require('perf_hooks');

function convertArrayToObject(studentsOfScienceClub) {
    let mapOfScienceStudents = {};
    for (let i = 0; i < studentsOfScienceClub.length; i++) {
        if (!mapOfScienceStudents[studentsOfScienceClub[i]]) {
            const student = studentsOfScienceClub[i];
            mapOfScienceStudents[student] = true;
        }
    }

    return mapOfScienceStudents;
}

function hasCommonStudentInBothClub(studentsOfScienceClub, studentsOfSportClub) {

    let mapOfScienceStudents = convertArrayToObject(studentsOfScienceClub);

    for (let i = 0; i < studentsOfSportClub.length; i++) {
        if (mapOfScienceStudents[studentsOfSportClub[i]]) {
            return true;
        }
    }

    return false;
}

let t0 = performance.now();

let hasCommonStudent = hasCommonStudentInBothClub(STUDENT_OF_SCIENCE_CLUB, STUDENT_OF_SPORTS_CLUB);
console.log(hasCommonStudent);
let t1 = performance.now();

let a = t1 - t0;
console.log("Time spends " + a + ' milliseconds');
```

<p style="margin-bottom: 0px;">Explain:</p>

<p style="margin-top: 0px;margin-bottom: 0px;">
<small>
Here we avoided the nested loop. We converted the studentsOfScienceClub array into an object (It is called a hash table in another programming language). And mapped the array data by setting the studentsOfScienceClub elements as key and value is true.
</small>
</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
<small>
Then from the 2nd loop, we have checked the key of a mapped object with the 2nd array.
</small>
</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
<small>Here time complexity is O(a+b)</small>
</p>
<p style="margin-top: 0px;margin-bottom: 0px;"> The calculated time complexity of this conde is <b>5.414189994335175</b> milliseconds</p>
<p style="margin-top: 0px;margin-bottom: 0px;">
But the space complexity of the code is better than others. Here space complexity is <b> O(a)</b>.
Because we are taking extra variable that take space in memory.
</p>

### HOW TO RUN

<small style='color:gray'>To compile TypeScript to javascript, run the command.</small>

```diff
tsc
```

<small style='color:gray'>Run the main js file</small>

```diff
node main.js
```

<small style='color:gray'>
TypeScript has a dependency of <b>node js</b>, if node js is not available on your machine then install the node js.
</small>