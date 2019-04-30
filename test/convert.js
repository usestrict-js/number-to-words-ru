const assert = require('assert');
const convert = require('../index').convert;

describe('SIMPLE DIGIT', () => {
  it('0', () => {assert.equal(convert(0), 'ноль')});
  it('1', () => {assert.equal(convert(1), 'один')});
  it('2', () => {assert.equal(convert(2), 'два')});
  it('3', () => {assert.equal(convert(3), 'три')});
  it('4', () => {assert.equal(convert(4), 'четыре')});
  it('5', () => {assert.equal(convert(5), 'пять')});
  it('6', () => {assert.equal(convert(6), 'шесть')});
  it('7', () => {assert.equal(convert(7), 'семь')});
  it('8', () => {assert.equal(convert(8), 'восемь')});
  it('9', () => {assert.equal(convert(9), 'девять')});
});

describe('DIGIT 2', () => {
  it('10', () => {assert.equal(convert(10), 'десять')});
  it('11', () => {assert.equal(convert(11), 'одиннадцать')});
  it('12', () => {assert.equal(convert(12), 'двенадцать')});
  it('13', () => {assert.equal(convert(13), 'тринадцать')});
  it('14', () => {assert.equal(convert(14), 'четырнадцать')});
  it('15', () => {assert.equal(convert(15), 'пятнадцать')});
  it('16', () => {assert.equal(convert(16), 'шестнадцать')});
  it('17', () => {assert.equal(convert(17), 'семнадцать')});
  it('18', () => {assert.equal(convert(18), 'восемнадцать')});
  it('19', () => {assert.equal(convert(19), 'девятнадцать')});
  it('20', () => {assert.equal(convert(20), 'двадцать')});
  it('21', () => {assert.equal(convert(21), 'двадцать один')});
  it('22', () => {assert.equal(convert(22), 'двадцать два')});
  it('23', () => {assert.equal(convert(23), 'двадцать три')});
  it('24', () => {assert.equal(convert(24), 'двадцать четыре')});
  it('25', () => {assert.equal(convert(25), 'двадцать пять')});
  it('26', () => {assert.equal(convert(26), 'двадцать шесть')});
  it('27', () => {assert.equal(convert(27), 'двадцать семь')});
  it('28', () => {assert.equal(convert(28), 'двадцать восемь')});
  it('29', () => {assert.equal(convert(29), 'двадцать девять')});
  it('30', () => {assert.equal(convert(30), 'тридцать')});
  it('31', () => {assert.equal(convert(31), 'тридцать один')});
  it('32', () => {assert.equal(convert(32), 'тридцать два')});
  it('33', () => {assert.equal(convert(33), 'тридцать три')});
  it('34', () => {assert.equal(convert(34), 'тридцать четыре')});
  it('35', () => {assert.equal(convert(35), 'тридцать пять')});
  it('36', () => {assert.equal(convert(36), 'тридцать шесть')});
  it('37', () => {assert.equal(convert(37), 'тридцать семь')});
  it('38', () => {assert.equal(convert(38), 'тридцать восемь')});
  it('39', () => {assert.equal(convert(39), 'тридцать девять')});
  it('40', () => {assert.equal(convert(40), 'сорок')});
  it('41', () => {assert.equal(convert(41), 'сорок один')});
  it('42', () => {assert.equal(convert(42), 'сорок два')});
  it('43', () => {assert.equal(convert(43), 'сорок три')});
  it('44', () => {assert.equal(convert(44), 'сорок четыре')});
  it('45', () => {assert.equal(convert(45), 'сорок пять')});
  it('46', () => {assert.equal(convert(46), 'сорок шесть')});
  it('47', () => {assert.equal(convert(47), 'сорок семь')});
  it('48', () => {assert.equal(convert(48), 'сорок восемь')});
  it('49', () => {assert.equal(convert(49), 'сорок девять')});
  it('50', () => {assert.equal(convert(50), 'пятьдесят')});
  it('51', () => {assert.equal(convert(51), 'пятьдесят один')});
  it('52', () => {assert.equal(convert(52), 'пятьдесят два')});
  it('53', () => {assert.equal(convert(53), 'пятьдесят три')});
  it('54', () => {assert.equal(convert(54), 'пятьдесят четыре')});
  it('55', () => {assert.equal(convert(55), 'пятьдесят пять')});
  it('56', () => {assert.equal(convert(56), 'пятьдесят шесть')});
  it('57', () => {assert.equal(convert(57), 'пятьдесят семь')});
  it('58', () => {assert.equal(convert(58), 'пятьдесят восемь')});
  it('59', () => {assert.equal(convert(59), 'пятьдесят девять')});
  it('60', () => {assert.equal(convert(60), 'шестьдесят')});
  it('61', () => {assert.equal(convert(61), 'шестьдесят один')});
  it('62', () => {assert.equal(convert(62), 'шестьдесят два')});
  it('63', () => {assert.equal(convert(63), 'шестьдесят три')});
  it('64', () => {assert.equal(convert(64), 'шестьдесят четыре')});
  it('65', () => {assert.equal(convert(65), 'шестьдесят пять')});
  it('66', () => {assert.equal(convert(66), 'шестьдесят шесть')});
  it('67', () => {assert.equal(convert(67), 'шестьдесят семь')});
  it('68', () => {assert.equal(convert(68), 'шестьдесят восемь')});
  it('69', () => {assert.equal(convert(69), 'шестьдесят девять')});
  it('70', () => {assert.equal(convert(70), 'семьдесят')});
  it('71', () => {assert.equal(convert(71), 'семьдесят один')});
  it('72', () => {assert.equal(convert(72), 'семьдесят два')});
  it('73', () => {assert.equal(convert(73), 'семьдесят три')});
  it('74', () => {assert.equal(convert(74), 'семьдесят четыре')});
  it('75', () => {assert.equal(convert(75), 'семьдесят пять')});
  it('76', () => {assert.equal(convert(76), 'семьдесят шесть')});
  it('77', () => {assert.equal(convert(77), 'семьдесят семь')});
  it('78', () => {assert.equal(convert(78), 'семьдесят восемь')});
  it('79', () => {assert.equal(convert(79), 'семьдесят девять')});
  it('80', () => {assert.equal(convert(80), 'восемьдесят')});
  it('81', () => {assert.equal(convert(81), 'восемьдесят один')});
  it('82', () => {assert.equal(convert(82), 'восемьдесят два')});
  it('83', () => {assert.equal(convert(83), 'восемьдесят три')});
  it('84', () => {assert.equal(convert(84), 'восемьдесят четыре')});
  it('85', () => {assert.equal(convert(85), 'восемьдесят пять')});
  it('86', () => {assert.equal(convert(86), 'восемьдесят шесть')});
  it('87', () => {assert.equal(convert(87), 'восемьдесят семь')});
  it('88', () => {assert.equal(convert(88), 'восемьдесят восемь')});
  it('89', () => {assert.equal(convert(89), 'восемьдесят девять')});
  it('90', () => {assert.equal(convert(90), 'девяносто')});
  it('91', () => {assert.equal(convert(91), 'девяносто один')});
  it('92', () => {assert.equal(convert(92), 'девяносто два')});
  it('93', () => {assert.equal(convert(93), 'девяносто три')});
  it('94', () => {assert.equal(convert(94), 'девяносто четыре')});
  it('95', () => {assert.equal(convert(95), 'девяносто пять')});
  it('96', () => {assert.equal(convert(96), 'девяносто шесть')});
  it('97', () => {assert.equal(convert(97), 'девяносто семь')});
  it('98', () => {assert.equal(convert(98), 'девяносто восемь')});
  it('99', () => {assert.equal(convert(99), 'девяносто девять')});
});

describe('DIGIT 3', () => {
  it('100', () => {assert.equal(convert(100), 'сто')});
  it('101', () => {assert.equal(convert(101), 'сто один')});
  it('110', () => {assert.equal(convert(110), 'сто десять')});
  it('119', () => {assert.equal(convert(119), 'сто девятнадцать')});
  it('121', () => {assert.equal(convert(121), 'сто двадцать один')});
  it('199', () => {assert.equal(convert(199), 'сто девяносто девять')});
  it('200', () => {assert.equal(convert(200), 'двести')});
  it('300', () => {assert.equal(convert(300), 'триста')});
  it('400', () => {assert.equal(convert(400), 'четыреста')});
  it('500', () => {assert.equal(convert(500), 'пятьсот')});
  it('600', () => {assert.equal(convert(600), 'шестьсот')});
  it('700', () => {assert.equal(convert(700), 'семьсот')});
  it('800', () => {assert.equal(convert(800), 'восемьсот')});
  it('808', () => {assert.equal(convert(808), 'восемьсот восемь')});
  it('900', () => {assert.equal(convert(900), 'девятьсот')});
  it('911', () => {assert.equal(convert(911), 'девятьсот одиннадцать')});
  it('999', () => {assert.equal(convert(999), 'девятьсот девяносто девять')});
});

describe('DIGIT 4', () => {
  it('1000', () => {assert.equal(convert(1000), 'одна тысяча')});
  it('2000', () => {assert.equal(convert(2000), 'две тысячи')});
  it('3000', () => {assert.equal(convert(3000), 'три тысячи')});
  it('4000', () => {assert.equal(convert(4000), 'четыре тысячи')});
  it('5000', () => {assert.equal(convert(5000), 'пять тысяч')});
  it('6000', () => {assert.equal(convert(6000), 'шесть тысяч')});
  it('7000', () => {assert.equal(convert(7000), 'семь тысяч')});
  it('8000', () => {assert.equal(convert(8000), 'восемь тысяч')});
  it('8001', () => {assert.equal(convert(8001), 'восемь тысяч один')});
  it('8099', () => {assert.equal(convert(8099), 'восемь тысяч девяносто девять')});
  it('8201', () => {assert.equal(convert(8201), 'восемь тысяч двести один')});
  it('9000', () => {assert.equal(convert(9000), 'девять тысяч')});
});

describe('DIGIT 5', () => {
  it('10000', () => {assert.equal(convert(10000), 'десять тысяч')});
  it('10001', () => {assert.equal(convert(10001), 'десять тысяч один')});
  it('20000', () => {assert.equal(convert(20000), 'двадцать тысяч')});
  it('30000', () => {assert.equal(convert(30000), 'тридцать тысяч')});
  it('40000', () => {assert.equal(convert(40000), 'сорок тысяч')});
  it('50000', () => {assert.equal(convert(50000), 'пятьдесят тысяч')});
  it('60000', () => {assert.equal(convert(60000), 'шестьдесят тысяч')});
  it('70000', () => {assert.equal(convert(70000), 'семьдесят тысяч')});
  it('80000', () => {assert.equal(convert(80000), 'восемьдесят тысяч')});
  it('82000', () => {assert.equal(convert(82000), 'восемьдесят две тысячи')});
  it('82322', () => {assert.equal(convert(82322), 'восемьдесят две тысячи триста двадцать два')});
  it('85001', () => {assert.equal(convert(85001), 'восемьдесят пять тысяч один')});
  it('90000', () => {assert.equal(convert(90000), 'девяносто тысяч')});
  it('90999', () => {assert.equal(convert(90999), 'девяносто тысяч девятьсот девяносто девять')});
  it('90019', () => {assert.equal(convert(90019), 'девяносто тысяч девятнадцать')});
  it('91999', () => {assert.equal(convert(91999), 'девяносто одна тысяча девятьсот девяносто девять')});
});

describe('DIGIT 6', () => {
  it('100000', () => {assert.equal(convert(100000), 'сто тысяч')});
  it('100500', () => {assert.equal(convert(100500), 'сто тысяч пятьсот')});
  it('100001', () => {assert.equal(convert(100001), 'сто тысяч один')});
  it('100201', () => {assert.equal(convert(100201), 'сто тысяч двести один')});
  it('102201', () => {assert.equal(convert(102201), 'сто две тысячи двести один')});
  it('191021', () => {assert.equal(convert(191021), 'сто девяносто одна тысяча двадцать один')});
  it('303303', () => {assert.equal(convert(303303), 'триста три тысячи триста три')});
});

describe('DIGIT 7', () => {
  it('1000000', () => {assert.equal(convert(1000000), 'один миллион')});
  it('1000001', () => {assert.equal(convert(1000001), 'один миллион один')});
  it('1010233', () => {assert.equal(convert(1010233), 'один миллион десять тысяч двести тридцать три')});
  it('1110233', () => {assert.equal(convert(1110233), 'один миллион сто десять тысяч двести тридцать три')});
  it('3033233', () => {assert.equal(convert(3033233), 'три миллиона тридцать три тысячи двести тридцать три')});
  it('3333233', () => {assert.equal(convert(3333233), 'три миллиона триста тридцать три тысячи двести тридцать три')});
  it('2000000', () => {assert.equal(convert(2000000), 'два миллиона')});
  it('3000000', () => {assert.equal(convert(3000000), 'три миллиона')});
  it('7000000', () => {assert.equal(convert(7000000), 'семь миллионов')});
});

describe('DIGIT 8', () => {
  it('10000000', () => {assert.equal(convert(10000000), 'десять миллионов')});
  it('10000001', () => {assert.equal(convert(10000001), 'десять миллионов один')});
  it('10010233', () => {assert.equal(convert(10010233), 'десять миллионов десять тысяч двести тридцать три')});
  it('11100233', () => {assert.equal(convert(11100233), 'одиннадцать миллионов сто тысяч двести тридцать три')});
  it('19000101', () => {assert.equal(convert(19000101), 'девятнадцать миллионов сто один')});
  it('20100000', () => {assert.equal(convert(20100000), 'двадцать миллионов сто тысяч')});
  it('23100000', () => {assert.equal(convert(23100001), 'двадцать три миллиона сто тысяч один')});
  it('50550505', () => {assert.equal(convert(50550505), 'пятьдесят миллионов пятьсот пятьдесят тысяч пятьсот пять')});
  it('99999999', () => {assert.equal(convert(99999999), 'девяносто девять миллионов девятьсот девяносто девять тысяч девятьсот девяносто девять')});
});

describe('DIGIT 9', () => {
  it('153429099', () => {assert.equal(convert(153429099), 'сто пятьдесят три миллиона четыреста двадцать девять тысяч девяносто девять')});
  it('100000000', () => {assert.equal(convert(100000000), 'сто миллионов')});
  it('100000001', () => {assert.equal(convert(100000001), 'сто миллионов один')});
});

describe('DIGIT 10', () => {
  it('1000000000', () => {assert.equal(convert(1000000000), 'один миллиард')});
});

describe('DIGIT 13', () => {
  it('1000000000000', () => {assert.equal(convert(1000000000000), 'один триллион')});
});

describe('DIGIT 15', () => {
  it('1000000000000000', () => {assert.equal(convert(1000000000000000), 'один квадриллион')});
  it('2000000000000000', () => {assert.equal(convert(2000000000000000), 'два квадриллиона')});
  it('9999999999999999', () => {assert.fail(convert(9999999999999999), 'Нельзя передавать число больше Number.MAX_SAFE_INTEGER. Передайте число строкой, чтобы избежать ошибок округления.')});
});

describe('DIGIT 18', () => {
  it('1000000000000000000', () => {assert.fail(convert(1000000000000000000), 'Нельзя передавать число больше Number.MAX_SAFE_INTEGER. Передайте число строкой, чтобы избежать ошибок округления.')});
  it('2000000000000000000', () => {assert.fail(convert(2000000000000000000), 'Нельзя передавать число больше Number.MAX_SAFE_INTEGER. Передайте число строкой, чтобы избежать ошибок округления.')});
  it('1000000000000000000_str', () => {assert.equal(convert('1000000000000000000'), 'один квинтиллион')});
  it('2000000000000000000_str', () => {assert.equal(convert('2000000000000000000'), 'два квинтиллиона')});
});

describe('DIGIT 19', () => {
  it('10000000000000000000', () => {assert.equal(convert(10000000000000000000), 'десять квинтиллионов')});
  it('20000000000000000000', () => {assert.equal(convert(20000000000000000000), 'двадцать квинтиллионов')});
  it('99999999999999999999', () => {assert.equal(convert(99999999999999999999), 'двадцать квинтиллионов')});
});

describe('DIGIT 21', () => {
  it('1000000000000000000000', () => {assert.equal(convert('1000000000000000000000'), 'один секстиллион')});
  it('2000000000000000000000', () => {assert.equal(convert('2000000000000000000000'), 'два секстиллиона')});
});

describe('DIGIT 24', () => {
  it('1000000000000000000000000', () => {assert.equal(convert('1000000000000000000000000'), 'один септиллион')});
  it('2000000000000000000000000', () => {assert.equal(convert('2000000000000000000000000'), 'два септиллиона')});
});

describe('DIGIT 27', () => {
  it('1000000000000000000000000000', () => {assert.equal(convert('1000000000000000000000000000'), 'один октиллион')});
  it('2000000000000000000000000000', () => {assert.equal(convert('2000000000000000000000000000'), 'два октиллиона')});
});

describe('DIGIT 30', () => {
  it('1000000000000000000000000000000', () => {assert.equal(convert('1000000000000000000000000000000'), 'один нониллион')});
  it('2000000000000000000000000000000', () => {assert.equal(convert('2000000000000000000000000000000'), 'два нониллиона')});
});

describe('DIGIT 33', () => {
  it('100000000000000000000000000000000', () => {assert.equal(convert('100000000000000000000000000000000'), 'сто нониллионов')});
});

describe('DIGIT 34', () => {
  it('1000000000000000000000000000000000', () => {assert.equal(convert('1000000000000000000000000000000000'), 'один дециллион')});
  it('1000000000000000000000000002000000', () => {assert.equal(convert('1000000000000000000000000002000000'), 'один дециллион два миллиона')});
  it('1500000000000000000000000000000000', () => {assert.equal(convert('1500000000000000000000000000000000'), 'один дециллион пятьсот нониллионов')});
});

describe('DIGIT 35', () => {
  it('11500000000000000000000000000000001', () => {assert.equal(convert('11500000000000000000000000000000001'), 'одиннадцать дециллионов пятьсот нониллионов один')});
});
