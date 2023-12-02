   const addItemInWatchlist= async(item)=>{
  
   let arr=[];
if(JSON.parse(window.localStorage.getItem("products"))==null){
    //setSelectedWatchlist(true);
    console.log("this is null")
     arr.push(item);
    window.localStorage.setItem("products",JSON.stringify(arr))
    return;
}
else{
  let isPresent=false;
  arr=JSON.parse(window.localStorage.getItem("products"));
  console.log(arr);
  arr.forEach(element => {
     if(element.id==item.id){
        isPresent=true;
     }
  });

  if(!isPresent){
    //setSelectedWatchlist(true);
    console.log("This is not repitition")
    arr.push(item);
    window.localStorage.setItem("products",JSON.stringify(arr))
  }else{
    let arr2=arr.filter((ele)=>{
       return    ele.id!=item.id
    })
   // setSelectedWatchlist(false);
    window.localStorage.setItem("products",JSON.stringify(arr2))

  }
 

}

   
   
  

   }

   export default addItemInWatchlist;