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
