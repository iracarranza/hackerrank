/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
//Given a time in -hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
    let time = s.split(":") //separate the given time into individual components via array
    let hours =  time[0]
    let minutes = time[1]
    let seconds = time[2].slice(0,2) //take off the AM/PM from the time
    let ampm = time[2].slice(2) //keep the AM/PM somewhere
    
    if (ampm === "PM" && hours !== "12") {
        parseInt(hours) += 12 //turn hours into an integer and add 12
    } else if (ampm === "AM" && hours === "12") {
        hours = 0 //if it's midnight, set the hours to 0
    }
    
    let militaryTime = `${hours.toString()}:${minutes}:${seconds}` //need to add the extra zero when hours is one digit?
    return militaryTime
    }
