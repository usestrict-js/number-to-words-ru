const baseNumbers = {
    0:  'ноль',
    1:  'один',
    2:  'два',
    3:  'три',
    4:  'четыре',
    5:  'пять',
    6:  'шесть',
    7:  'семь',
    8:  'восемь',
    9:  'девять',
    10: 'десять',
    11: 'одиннадцать',
    12: 'двенадцать',
    13: 'тринадцать',
    14: 'четырнадцать',
    15: 'пятнадцать',
    16: 'шестнадцать',
    17: 'семнадцать',
    18: 'восемнадцать',
    19: 'девятнадцать'
};

this.numbers = {};
this.numbers.masculine = JSON.parse(JSON.stringify(baseNumbers));

this.numbers.feminine = JSON.parse(JSON.stringify(baseNumbers));
this.numbers.feminine[1] = 'одна';
this.numbers.feminine[2] = 'две';

this.numbers.neuter = JSON.parse(JSON.stringify(baseNumbers));
this.numbers.neuter[1] = 'одно';

this.toOneHundred = {
    2: 'двадцать',
    3: 'тридцать',
    4: 'сорок',
    5: 'пятьдесят',
    6: 'шестьдесят',
    7: 'семьдесят',
    8: 'восемьдесят',
    9: 'девяносто'
};

this.toThousand = {
    1: 'сто',
    2: 'двести',
    3: 'триста',
    4: 'четыреста',
    5: 'пятьсот',
    6: 'шестьсот',
    7: 'семьсот',
    8: 'восемьсот',
    9: 'девятьсот'
};

this.bases = {};
this.bases[3] = ['тысяча', 'тысячи', 'тысяч'];
this.bases[6] = ['миллион', 'миллиона', 'миллионов'];
this.bases[9] = ['миллиард', 'миллиарда', 'миллиардов'];
this.bases[12] = ['триллион', 'триллиона', 'триллионов'];
this.bases[15] = ['квадриллион', 'квадриллиона', 'квадриллионов'];
this.bases[18] = ['квинтиллион', 'квинтиллиона', 'квинтиллионов'];
this.bases[21] = ['секстиллион', 'секстиллиона', 'секстиллионов'];
this.bases[24] = ['септиллион', 'септиллиона', 'септиллионов'];
this.bases[27] = ['октиллион', 'октиллиона', 'октиллионов'];
this.bases[30] = ['нониллион', 'нониллиона', 'нониллионов'];
this.bases[33] = ['дециллион', 'дециллиона', 'дециллионов'];

const thousandToString = function (number, gender) {
    if (!gender || !this.numbers[gender]) {
        gender = 'masculine';
    }

    if (number > 1000) {
        throw `${number} is too large`;
    }

    if (number < 20) {
        return this.numbers[gender][number];
    }

    const result = [];
    if (number >= 100) {
        result.push(this.toThousand[number / 100 | 0]);
        number %= 100;
    }

    if (number > 19) {
        result.push(this.toOneHundred[number / 10 | 0]);
        number %= 10;
    }

    if (number) {
        result.push(this.numbers[gender][number]);
    }

    return result.join(' ');
};

const integerToString = function (number, gender) {

    const result = [];

    if (number === 0 || (number % 1000)) {
        result.push(this.thousandToString(number % 1000, gender));
    }

    for (const power in this.bases) {
        if (!this.bases.hasOwnProperty(power)) {
            return;
        }

        const base = Math.pow(10, power);

        if (number < base) {
            break;
        }

        // for example base=1000 => 23000656 -> 0 23945656 -> 945
        const part = (number / base | 0) % 1000;
        const partGender = power == 3 ? 'feminine' : 'masculine';

        if (part == 0) {
            continue;
        }

        result.push(
          `${this.thousandToString(part, partGender)
            } ${
            this.formChoosing(part, this.bases[power][0], this.bases[power][1], this.bases[power][2])}`
        );
    }

    return result.reverse().join(' ');
};

const _0_19 = new Map([
    [0, 'ноль'],
    [1, 'один'],
    [2, 'два'],
    [3, 'три'],
    [4, 'четыре'],
    [5, 'пять'],
    [6, 'шесть'],
    [7, 'семь'],
    [8, 'восемь'],
    [9, 'девять'],
    [10, 'десять'],
    [11, 'одиннадцать'],
    [12, 'двенадцать'],
    [13, 'тринадцать'],
    [14, 'четырнадцать'],
    [15, 'пятнадцать'],
    [16, 'шестнадцать'],
    [17, 'семнадцать'],
    [18, 'восемнадцать'],
    [19, 'девятнадцать']
]);

const _20_90 = new Map([
    [20, 'двадцать'],
    [30, 'тридцать'],
    [40, 'сорок'],
    [50, 'пятьдесят'],
    [60, 'шестьдесят'],
    [70, 'семьдесят'],
    [80, 'восемьдесят'],
    [90, 'девяносто']
]);

const _100_900 = new Map([
    [100, 'сто'],
    [200, 'двести'],
    [300, 'триста'],
    [400, 'четыреста'],
    [500, 'пятьсот'],
    [600, 'шестьсот'],
    [700, 'семьсот'],
    [800, 'восемьсот'],
    [900, 'девятьсот']
]);

const _10e3_10e33 = new Map([
  [3, ['тысяча', 'тысячи', 'тысяч']],
  [6, ['миллион', 'миллиона', 'миллионов']],
  [9, ['миллиард', 'миллиарда', 'миллиардов']],
  [12, ['триллион', 'триллиона', 'триллионов']],
  [15, ['квадриллион', 'квадриллиона', 'квадриллионов']],
  [18, ['квинтиллион', 'квинтиллиона', 'квинтиллионов']],
  [21, ['секстиллион', 'секстиллиона', 'секстиллионов']],
  [24, ['септиллион', 'септиллиона', 'септиллионов']],
  [27, ['октиллион', 'октиллиона', 'октиллионов']],
  [30, ['нониллион', 'нониллиона', 'нониллионов']],
  [33, ['дециллион', 'дециллиона', 'дециллионов']]
]);

const convert = (num) => {
    if (num < 20) return _0_19.get(num);
    if (num < 100) {
        const mod10 = num % 10;
        const num10 = Math.floor(num / 10);
        const str = mod10 === 0 ? '' : ` ${_0_19.get(mod10)}`;
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
            str1 = ` ${_0_19.get(mod100)}`
        }
        return `${_100_900.get(num100 * 100)}${str10}${str1}`;
    }

    const _10e = ('' + num).length - 1;
    const digit = Math.floor(num / (Math.pow(10, _10e)));
    let ind;
    if (digit === 1) {
        ind = 0;
    } else if (digit < 5) {
        ind = 1;
    } else {
        ind = 2;
    }
    let digitStr;
    if (digit === 1 && _10e === 3) digitStr = 'одна';
    if (digit === 2 && _10e === 3) digitStr = 'две';
    if (digit > 2) digitStr = _0_19.get(digit);
    return `${digitStr} ${_10e3_10e33.get(_10e)[ind]}`;
};

module.exports = convert;
