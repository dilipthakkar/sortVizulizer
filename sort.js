  


const partitionLow = (arr,low,high)=>{
    let pivot = arr[low];
    let i = low;
    let j = high;
    while(i<j){
        while(arr[i]<=pivot && i<=high) i++;
        while(arr[j]>pivot && j>=low) j--;
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i-1];
    arr[i-1] = arr[low];
    arr[low] = temp;
    return i-1;

}



const quicksort = (arr, low, high) => {
      // base condition
      if (low >= high) {
        return;
      }
  
      // rearrange the elements across pivot
      const pivot = partitionLow(arr, low, high);
  
      // recur on sub-array containing elements less than pivot
      quicksort(arr, low, pivot - 1);
  
      // recur on sub-array containing elements more than pivot
      quicksort(arr, pivot + 1, high);
  }

