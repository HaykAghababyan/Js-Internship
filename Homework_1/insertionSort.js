const insertionSort = arr => {
   for(let i = 0; i < arr.length - 1; i++) {
     
      if(arr[i] > arr[i+1]) {

         for(let j = i + 1; j > 0; j--){
               
               if(arr[j] < arr[j-1]) {

                  [arr[j], arr[j-1]] = [arr[j-1],arr[j]];
               }
               else break;
         }
      }
   }         
   return arr;
}
 
insertionSort([125,7,54,23,45,74,100,96,76]);
