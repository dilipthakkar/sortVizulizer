const insertion = (arr)=>{
  for(let i=1 ; i<arr.length ; i++){
    let j = i-1;
    while(j>=0){
      if(arr[j]>arr[i]) j--;
      else break;
    }
    let temp = arr[i];
    for(let k = i ; k>j+1 ; k--){
     
      arr[k] = arr[k-1];
    }
    arr[j+1] = temp;
  }

}

let arr = [4,5,6,5,4,3,4,5,6,7];
insertion(arr);
console.log(arr);