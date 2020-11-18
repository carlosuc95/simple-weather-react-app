const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getDayName = (date) => {

    const toDate = new Date(date);
    return days[toDate.getDay()];
}