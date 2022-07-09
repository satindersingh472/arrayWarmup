let student_name = "satinder";
let student_gpa = 3.5;
let honor_role = true;
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
let honor_roles = [false, true, true];

student_names.push(`nit`);
student_gpas.push(3);
honor_roles.push(true);
console.log(student_names);

let last_student = student_names.pop();
console.log(student_names);
let last_student_gpa = student_gpas.pop();
let last_student_honor = honor_roles.pop();
if (last_student_gpa > student_gpas){
console.log(`last student is the best`);
}