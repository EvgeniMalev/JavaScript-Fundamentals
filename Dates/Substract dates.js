function calculateDateDifferenceAndAddPeriod(date1, date2, period) {

    let utcDate1 = new Date(Date.UTC(
        date1.getUTCFullYear(),
        date1.getUTCMonth(),
        date1.getUTCDate(),
        date1.getUTCHours(),
        date1.getUTCMinutes(),
        date1.getUTCSeconds(),
        date1.getUTCMilliseconds()
    ));
    
    let utcDate2 = new Date(Date.UTC(
        date2.getUTCFullYear(),
        date2.getUTCMonth(),
        date2.getUTCDate(),
        date2.getUTCHours(),
        date2.getUTCMinutes(),
        date2.getUTCSeconds(),
        date2.getUTCMilliseconds()
    ));
    
    let diffInMillis = utcDate1 - utcDate2;
    
    let resultDate = new Date(diffInMillis);
    
    if (period.years) resultDate.setUTCFullYear(resultDate.getUTCFullYear() + period.years);
    if (period.months) resultDate.setUTCMonth(resultDate.getUTCMonth() + period.months);
    if (period.days) resultDate.setUTCDate(resultDate.getUTCDate() + period.days);
    if (period.hours) resultDate.setUTCHours(resultDate.getUTCHours() + period.hours);
    if (period.minutes) resultDate.setUTCMinutes(resultDate.getUTCMinutes() + period.minutes);
    if (period.seconds) resultDate.setUTCSeconds(resultDate.getUTCSeconds() + period.seconds);
    if (period.milliseconds) resultDate.setUTCMilliseconds(resultDate.getUTCMilliseconds() + period.milliseconds);
    
    return resultDate;
}

let date1 = new Date("2023-10-10T12:00:00Z");
let date2 = new Date("2023-10-05T08:30:00Z");

let period = {
    years: 1,
    months: 2,
    days: 5,
    hours: 4,
    minutes: 10,
    seconds: 30,
    milliseconds: 500
};

let finalDate = calculateDateDifferenceAndAddPeriod(date1, date2, period);
console.log("Final Date:", finalDate.toISOString());
