module.exports = {
  getLocalTimeString() {
    const UTCdate = new Date();
    const TZOffsetMS = UTCdate.getTimezoneOffset() * 60 * 1000;
    const localDate = new Date(UTCdate.getTime() - TZOffsetMS);
    const year = localDate.getUTCFullYear();
    let month = localDate.getUTCMonth() + 1;
    month = month > 9 ? month : '0' + month;
    let day = localDate.getDate();
    day = day > 9 ? day : '0' + day;
    let hour  = localDate.getUTCHours();
    hour = hour > 9 ? hour : '0' + hour;
    let minute = localDate.getUTCMinutes();
    minute = minute > 9 ? minute : '0' + minute;
    let second = localDate.getUTCSeconds();
    second = second > 9 ? second : '0' + second;
    return `${year}${month}${day}${hour}${minute}${second}`;
  }
}
