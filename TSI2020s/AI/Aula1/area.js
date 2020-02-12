"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var base = rs.question('Entre base : ');
var altura = rs.question('Entre altura: ');
var area = base * altura / 2;
console.log(area);
