/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++ ) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let results = []; // 1

    for (let i = 0; i < array.length; i++ ) { // 2
        let item = fn(array[i], i, array); // 3

        results.push(item); // 4
    }

    return results; // 5
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let i = 0;
    let result = initial || array[i++];

    while (i < array.length) {
        result = fn(result, array[i], i, array);
        i++;
    }

    return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

function slice(array, from = 0, to = array.length) {
    var array2 = [];

    (from < 0 && Math.abs(from) > array.length)? from = 0:
        (from < 0)? from = array.length + from:
            (from > array.length)? from = array.length:
                from;

    (to < 0 && Math.abs(to) < array.length)? to = array.length + to:
        (to > array.length)? to = array.length:
            to;

    for (var i = from; i < to; i++) {
        array2.push(array[i]);
    }

    return array2;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

const proxies = new WeakSet();

function createProxy(obj) {
    const handler = {};

    const proxy = new Proxy(obj, handler);

    proxies.add(proxy);

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
