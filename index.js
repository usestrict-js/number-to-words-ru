const _0_19 = new Map([
    [0, 'ноль'], [1, 'один'], [2, 'два'], [3, 'три'], [4, 'четыре'], [5, 'пять'], [6, 'шесть'], [7, 'семь'],
    [8, 'восемь'], [9, 'девять'], [10, 'десять'], [11, 'одиннадцать'], [12, 'двенадцать'], [13, 'тринадцать'],
    [14, 'четырнадцать'], [15, 'пятнадцать'], [16, 'шестнадцать'], [17, 'семнадцать'], [18, 'восемнадцать'],
    [19, 'девятнадцать']
]);

const _20_90 = new Map([
    [20, 'двадцать'], [30, 'тридцать'], [40, 'сорок'], [50, 'пятьдесят'], [60, 'шестьдесят'], [70, 'семьдесят'],
    [80, 'восемьдесят'], [90, 'девяносто']
]);

const _100_900 = new Map([
    [100, 'сто'], [200, 'двести'], [300, 'триста'], [400, 'четыреста'], [500, 'пятьсот'], [600, 'шестьсот'],
    [700, 'семьсот'], [800, 'восемьсот'], [900, 'девятьсот']
]);

const _10e3_10e33 = new Map([
    [3, ['тысяча', 'тысячи', 'тысяч']], [6, ['миллион', 'миллиона', 'миллионов']],
    [9, ['миллиард', 'миллиарда', 'миллиардов']], [12, ['триллион', 'триллиона', 'триллионов']],
    [15, ['квадриллион', 'квадриллиона', 'квадриллионов']], [18, ['квинтиллион', 'квинтиллиона', 'квинтиллионов']],
    [21, ['секстиллион', 'секстиллиона', 'секстиллионов']], [24, ['септиллион', 'септиллиона', 'септиллионов']],
    [27, ['октиллион', 'октиллиона', 'октиллионов']], [30, ['нониллион', 'нониллиона', 'нониллионов']],
    [33, ['дециллион', 'дециллиона', 'дециллионов']]
]);

const convert = (num, recursive) => {
    if (num < 20) return _0_19.get(num);
    if (num < 100) {
        const mod10 = num % 10;
        const num10 = Math.floor(num / 10);
        let str = '';
        if (mod10 === 1 && recursive) {
            str = ' одна';
        } else {
            str = mod10 === 0 ? '' : ` ${_0_19.get(mod10)}`;
        }
        return `${_20_90.get(num10 * 10)}${str}`;
    }
    if (num < 1000) {
        const mod100 = num % 100;
        const num100 = Math.floor(num / 100);

        let str10 = '';
        if (mod100 > 19) {
            const mod10 = mod100 % 10;
            const num10 = Math.floor(mod100 / 10);
            const str = mod10 === 0 ? '' : ` ${_0_19.get(mod10)}`;
            str10 = ` ${_20_90.get(num10 * 10)}${str}`;
        }

        let str1 = '';
        if (mod100 < 20 && mod100 !== 0) {
            str1 = ` ${_0_19.get(mod100)}`;
        }
        return `${_100_900.get(num100 * 100)}${str10}${str1}`;
    }

    let _10e = ('' + num).length - 1;
    while (!_10e3_10e33.has(_10e)) _10e--;

    const digit = Math.floor(num / 10 ** _10e);
    const rest = num - digit * 10 ** _10e;

    let lastDigit = digit > 19 ? digit % 10 : digit;
    let ind;
    if (lastDigit === 1) {
        ind = 0;
    } else if (lastDigit < 5 && lastDigit !== 0) {
        ind = 1;
    } else {
        ind = 2;
    }
    let digitStr = '';
    if (digit === 1 && _10e === 3) {
        digitStr = 'одна';
    } else if (digit === 1 && _10e > 3) {
        digitStr = 'один'
    }
    if (digit === 2 && _10e === 3) {
        digitStr = 'две';
    } else if (digit === 2 && _10e > 3) {
        digitStr = 'два'
    }

    let _10e_rep = ('' + digit).length - 1;
    let numRest2_rep = +('' + digit).substr(1, _10e_rep);
    let numRest1_rep = digit - numRest2_rep;


    if (digit > 19 && numRest1_rep && numRest2_rep) {
        let rest2Str = '';
        if (numRest2_rep === 1 && _10e === 3) {
            rest2Str = 'одна';
        }
        if (numRest2_rep === 2 && _10e === 3) {
            rest2Str = 'две';
        }
        if (numRest2_rep > 2) rest2Str = convert(numRest2_rep, true);
        digitStr += `${convert(numRest1_rep)} ${rest2Str}`;
    }

    if (digit > 2 && numRest1_rep && !numRest2_rep) {
        digitStr += `${convert(digit, true)}`;
    }

    if (digit > 10 && digit < 20) {
        digitStr += `${convert(digit, true)}`;
    }

    let restString = '';
    if (rest !== 0) {
        restString = ` ${convert(rest)}`;
    }

    return `${digitStr} ${_10e3_10e33.get(_10e)[ind]}${restString}`;
};

module.exports = convert;
