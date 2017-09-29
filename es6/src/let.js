//es5时，只支持全局作用域、函数作用域
var a5 = [];
for (var i = 0; i < 10; i++) {
    a5[i] = function () {
        console.log(i);
    };
}
a5[6](); // 10


//es6 支持块级作用域
var a6 = [];
for (let i = 0; i < 10; i++) {
    a6[i] = function () {
        console.log(i);
    };
}
a6[6](); // 6