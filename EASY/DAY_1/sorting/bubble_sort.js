let arr=[4,3,1,2,7,8];
// let arr=[1,2,3,4,5,6];
let n=arr.length;
for(let i=0; i<n-1;i++){
    let isSorted=false; // if array already sorted
    for(let j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            isSorted=true;
        }
    }
     if(isSorted===false){
            break;
        }
}
console.log(arr)