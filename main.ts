const STUDENT_OF_SCIENCE_CLUB = ['abc', 'cdf', 'efg', 'hij', 'klm'];
const STUDENT_OF_SPORTS_CLUB = ['nop', 'qrs', 'uvw', 'xyz', 'abc'];

function convertArrayToObject(studentsOfScienceClub: string[]): any {
    let mapOfScienceStudents: any = {};
    for (let i = 0; i < studentsOfScienceClub.length; i++) {
        if (!mapOfScienceStudents[studentsOfScienceClub[i]]) {
            const student = studentsOfScienceClub[i];
            mapOfScienceStudents[student] = true;
        }
    }

    return mapOfScienceStudents;
}

function hasCommonStudentInBothClub(studentsOfScienceClub: string[], studentsOfSportClub: string[]): boolean {
    let mapOfScienceStudents: any = convertArrayToObject(studentsOfScienceClub);

    for (let i = 0; i < studentsOfSportClub.length; i++) {
        if (mapOfScienceStudents[studentsOfSportClub[i]]) {
            return true;
        }
    }

    return false;
}

let hasCommonStudent = hasCommonStudentInBothClub(STUDENT_OF_SCIENCE_CLUB, STUDENT_OF_SPORTS_CLUB);
console.log(hasCommonStudent);