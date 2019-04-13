// Your code goes here
const links = document.querySelectorAll('.nav-link');
console.log(links[0]);
links.forEach(function(i) {
    i.addEventListener('mouseover', (e) => e.target.style.color = 'green');
    i.addEventListener('mouseout', (e) => e.target.style.color = '');
})

const dbl = document.querySelector('body');

const testing = document.getElementsByTagName('head');
console.log(testing);

function createClass(name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name + "{" + rules + "}", 0);
}
createClass('.switched', "background-color: #212529; color: white;");
const navCont = document.querySelector(mainNavigation);
console.log(navCont);

dbl.addEventListener("dblclick", function () {

    document.body.classList.toggle("switched");

});
    
