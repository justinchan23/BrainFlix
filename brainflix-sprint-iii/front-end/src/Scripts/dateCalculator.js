export default function dateCalculator(date) {
  // calculate days since last post
  var dateSince = ''
  var date1 = new Date(date).getTime()
  var today = new Date().getTime()

  // calculate difference between dates in milliseconds
  var difference = today - date1

  // calculate difference between dates in seconds
  difference = difference / 1000
  var seconds = Math.floor(difference % 60)

  // calculate difference between dates in minutes
  difference = difference / 60
  var minutes = Math.floor(difference % 60)

  // calculate difference between dates in hours
  difference = difference / 60
  var hours = Math.floor(difference % 24)

  // calculate difference between dates in days

  var days = Math.floor(difference / 24)

  // conditional to determine output of days, hours, minutes or seconds
  if (days > 0) {
    dateSince = `${days} days ago`
  } else if ((days === 0) & (hours === 1)) {
    dateSince = `${hours} hour ago`
  } else if ((days === 0) & (hours > 0)) {
    dateSince = `${hours} hours ago`
  } else if ((hours === 0) & (minutes === 1)) {
    dateSince = `${minutes} minute ago`
  } else if ((hours === 0) & (minutes > 0)) {
    dateSince = `${minutes} minutes ago`
  } else {
    dateSince = `${seconds} seconds ago`
  }

  // return the value
  return dateSince
}
