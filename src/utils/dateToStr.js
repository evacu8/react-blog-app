export const dateToStr = (dateObj) => {
  const dateStr = dateObj.toLocaleString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-');
  return dateStr;
}
  