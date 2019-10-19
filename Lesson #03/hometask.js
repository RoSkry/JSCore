// Timer
// - Create method that accepts a number of seconds and timer name as arguments and returns an object with state - name of timer, duration in seconds, methods start(), stop(), pause(). When you call start() method of that object you must show in console the name of timer and elapsed time in seconds per second:
// ```
// Timer1: 30 -> Timer1: 29 -> Timer1: 28
// ```
// -

function getTimer(name, seconds) {
  var interval;
  var timer = {
    status: "stopped",
    name: name,
    start: start,
    stop: stop,
    pause: pause,
    seconds: seconds
  };

  function pause() {
    if (timer.status != "on pause") {
      timer.status = "on pause";
      clearInterval(interval);
      console.log(`Timer ${timer.name} status: ${timer.status}`);
    } else {
      console.log(`Timer is already on pause: status: ${timer.status}`);
    }
  }

  function start() {
    if (timer.status != "started") {
      timer.status = "started";
      console.log(`Timer status: ${timer.status}`);
      interval = setInterval(() => {
        console.log(`${timer.name} : ${timer.seconds}`);
        timer.seconds--;

        if (timer.seconds == 0) {
          console.log("Boom");
          clearInterval(interval);
        }
      }, 1000);
    } else {
      console.log(`Timer is already started: status: ${timer.status}`);
    }
  }

  function stop() {
    if (timer.status != "stopped") {
      timer.status = "stopped";
      timer.seconds = seconds;
      clearInterval(interval);
      console.log(`Timer status: ${timer.status}; Name: ${timer.name}`);
    } else {
      console.log(`Timer is already stopped: status: ${timer.status}`);
    }
  }
  return timer;
}

var timer = getTimer("Timer1", 10);

timer.start();

// 	- When you pause your timer it shows name of timer and caption - paused. When you start it again, it starts from the same position. If you call stop() it shows - timer_name and status stopped and timer is set to default number of seconds. When the value is 0 write to console BOOM and terminate execution

setTimeout(() => {
  timer.pause();
}, 3000);
setTimeout(() => {
  timer.start();
}, 4000);
setTimeout(() => {
  timer.stop();
}, 7000);
setTimeout(() => {
  timer.start();
}, 9000);
// Maintanance timer
// - Create timer, which accepts time duration as string in format "hh:mm:ss", i.e "00:15:30" means 0 hours, 15 minutes, 30 seconds. Write down to console once per second elapsed time in the same format.
function createTimer(time, timeout = 1) {
  var seconds = time.split(":")[2];
  var minutes = time.split(":")[1];
  var hours = time.split(":")[0];
  var totalSeconds = hours * 60 * 60 + +minutes * 60 + +seconds;

  var interval1 = setInterval(() => {
    totalSeconds--;
    var interval2;
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor(totalSeconds / 60);
    seconds = Math.floor(totalSeconds % 60);
    if (timeout > 1) {
        interval2 =   setInterval(() => {
        console.log(timeout);
        console.log(`${hours != 0 ? hours : "00"} : ${minutes} : ${seconds}`);
        
      }, timeout * 1000);
    } else {
       console.log(`${hours != 0 ? hours : "00"} : ${minutes} : ${seconds}`);
    }
    
    if (totalSeconds < 0) {
      clearInterval(interval1);
    }

  }, 1000);
}

//createTimer("00:15:30");

// - Additionally extend tis method with optional arguments of seconds for result output - if you have it write down to console once per N seconds, if you don't have it - once per second.

 createTimer("00:15:30", 5);
