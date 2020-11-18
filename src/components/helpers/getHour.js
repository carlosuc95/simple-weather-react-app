
export const getHour = (date) => {

    const toDate = new Date(date);
    return toDate.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
}