let student_name = "satinder";
let student_gpa = 3.5;
let honor_role = false;
if (honor_role === true) {
    console.log(`congrats ${student_name} you are on the honor's list.`);
} else {
    console.log(`just keep working ${student_name} you will earn it one day`);
}
if (student_gpa >= 0 && student_gpa <= 1.9) {
    console.log(`F`);
} else if (student_gpa >= 2.0 && student_gpa <= 2.4) {
    console.log(`D`);
} else if (student_gpa >= 2.5 && student_gpa <= 2.9) {
    console.log(`C`);
} else if (student_gpa >= 3.0 && student_gpa <= 3.4) {
    console.log(`B`);
} else {
    console.log(`A`);
}

let student_names = [`sam`, `mani`, `nani`];
let student_gpas = [2, 3, 4];
let honor_roles = [false,true,true];
if((honor_roles[0] === true) && (honor_roles[1] === true) && (honor_roles[2] === true)){
    console.log(`all student are honored`);
} else if ((honor_roles[0] === true && honor_roles[1] === true && honor_roles[2] === false ) || 
( honor_roles[0] === false && honor_roles[1] === true && honor_roles[2] === true  )|| (honor_roles[0] === true && honor_roles[1] === true && honor_roles[2]===false)){
    console.log(`some of them did not make it.`);
} else if (honor_roles[0]===false && honor_roles[1] === false && honor_roles[2] === false ){
    console.log(`All of them failed`);
}

student_names.push(`nit`);
student_gpas.push(5);
honor_roles.push(true);

let last_student = student_names.pop();
let last_student_gpa = student_gpas.pop();
let last_student_honor = honor_roles.pop();
if ((last_student_gpa > student_gpas[0]) && (last_student_gpa > student_gpas[1]) && (last_student_gpa > student_gpas[2]) ){
console.log(`last student is the best`);
}