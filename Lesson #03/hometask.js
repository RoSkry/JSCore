// Timer
// - Create method that accepts a number of seconds and timer name as arguments and returns an object with state - name of timer, duration in seconds, methods start(), stop(), pause(). When you call start() method of that object you must show in console the name of timer and elapsed time in seconds per second:
// ```
// Timer1: 30 -> Timer1: 29 -> Timer1: 28
// ```
// -

function getTimer(name, seconds) {


}
// 	- When you pause your timer it shows name of timer and caption - paused. When you start it again, it starts from the same position. If you call stop() it shows - timer_name and status stopped and timer is set to default number of seconds. When the value is 0 write to console BOOM and terminate execution

	
// Maintanance timer
// - Create timer, which accepts time duration as string in format "hh:mm:ss", i.e "00:15:30" means 0 hours, 15 minutes, 30 seconds. Write down to console once per second elapsed time in the same format.
// - Additionally extend tis method with optional arguments of seconds for result output - if you have it write down to console once per N seconds, if you don't have it - once per second.