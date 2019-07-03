const timer = function(alarms) {
  let alarmArray = alarms.slice(2);
  for (const item of alarmArray) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },item*1000)
  }
}



timer(process.argv.slice(2));