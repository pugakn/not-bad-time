export function formatDateToCustomString(date: Date, onlyTime = false) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Ensure the day and month are formatted with leading zeros if necessary
  const formattedDayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDateString = `${dayOfWeek} ${month} ${formattedDayOfMonth} ${hours}:${formattedMinutes}`;

  return onlyTime ? formattedDateString.split(" ")[3] : formattedDateString;
}
