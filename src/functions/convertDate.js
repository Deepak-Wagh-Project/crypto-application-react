export const convertDate=(number)=>{
  const myDate= new Date(number)
  const month=myDate.getMonth()+1;
 return ( myDate.getDate() +"/"+month);
}