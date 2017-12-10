const { DateTime } = require('luxon');

/**
 * 使用UNIX时间格式计算
 * 
 */
//莫斯科开始时间
const startMoscow = DateTime.fromObject({ year: 2017, month: 12, day: 8, hour: 14, minute: 0, second: 0, zone: 'Europe/Moscow' });
const startMoscowUNIX = startMoscow.valueOf();
//洛杉矶开始时间
const startLosAngeles = DateTime.fromMillis(startMoscowUNIX);
const startLosAngelesUNIX = startLosAngeles.valueOf();

console.log('startMoscowUNIX:' + startMoscowUNIX);
console.log('startLosAngelesUNIX:' + startLosAngelesUNIX);


//莫斯科2天之后
const endMoscow = startMoscow.plus({ days: 2 });
const endMoscowUNIX = endMoscow.valueOf();
//洛杉矶2天之后
const endLosAngeles = startLosAngeles.plus({ days: 2 });
const endLosAngelesUNIX = endLosAngeles.valueOf();

console.log('endMoscowUNIX:' + endMoscowUNIX);
console.log('endLosAngelesUNIX:' + endLosAngelesUNIX);

//莫斯科2天之后换算洛杉矶当时的时间
const endLosAngeles2 = DateTime.fromMillis(endMoscowUNIX);
const endLosAngeles2UNIX = endLosAngeles2.valueOf();

console.log(endLosAngelesUNIX === endLosAngeles2UNIX);



/**
 * 使用ISO 8601时间格式计算
 * 
 */

//莫斯科开始时间
const startMoscow = DateTime.fromObject({ year: 2017, month: 12, day: 8, hour: 14, minute: 0, second: 0, zone: 'Europe/Moscow' });
const startMoscowISO = startMoscow.toISO();
//洛杉矶开始时间
const startLosAngeles = DateTime.fromISO(startMoscowISO);
const startLosAngelesISO = startLosAngeles.toISO();

console.log('startMoscowISO:' + startMoscowISO);
console.log('startLosAngelesISO:' + startLosAngelesISO);


//莫斯科2天之后
const endMoscow = startMoscow.plus({ days: 2 });
const endMoscowISO = endMoscow.toISO();
//洛杉矶2天之后
const endLosAngeles = startLosAngeles.plus({ days: 2 });
const endLosAngelesISO = endLosAngeles.toISO();

console.log('endMoscowISO:' + endMoscowISO);
console.log('endLosAngelesISO:' + endLosAngelesISO);

//莫斯科2天之后换算洛杉矶当时的时间
const endLosAngeles2 = DateTime.fromISO(endMoscowISO);
const endLosAngeles2ISO = endLosAngeles2.toISO();

console.log(endLosAngelesISO === endLosAngeles2ISO);
