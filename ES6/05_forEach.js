// forEach() calls a provided callback function once for each elements in an array in ascending order

var colorArray = [{color: 'red'}, {color: 'blue'}, {color: 'green'}];

colorArray.forEach(function (color, index) {
    console.log(`${index + 1}. Name: ${color.color}`);
});

// challenge

var employees = [
    {name: 'Beth', title: 'manager', salary: 90000},
    {name: 'Bill', title: 'developer', salary: 72000},
    {name: 'Charlie', title: 'support team member', salary: 50000}
];

employees.forEach(function(employe, index) {
    console.log(`${index + 1}: ${employe.name} is a ${employe.title} who makes ${employe.salary} dollars every year.`);
});