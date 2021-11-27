const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
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

export const getDayfromUnix = (unix) => {
  const date = new Date(unix * 1000);
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} `;
};


export const getDateStamp = (dateStamp) => {
  const dateObject = new Date(dateStamp * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
  ];
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
  const formatedDate =
    days[dateObject.getDay()] +
    ", " +
    dateObject.getDate() +
    " " +
    months[dateObject.getMonth() + 1];
  return formatedDate;
};

export const filterForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};

export const getDateForecast = (unixDate) => {
  const date = new Date(unixDate * 1000);
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} `;
};

export const getTimeStamp = (sunTime) => {
  const timeObject = new Date(sunTime * 1000);
  const hours = timeObject.getHours();
  const minutes = timeObject.getMinutes();
  const formatedTime =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  return formatedTime;
};
