export function changeDateForm(date) {
  date = date.slice(2);
  
  const strArr = date.split('');
  strArr.splice(2,0,'월',' ');
  strArr.splice(6,0,'일');
  
  return strArr.join('');
}