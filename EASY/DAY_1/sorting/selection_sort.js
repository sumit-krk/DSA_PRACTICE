let arr = [3, 1, 5, 7, 12, 90, 45];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
  let min = i;
  for (let j = i+1; j < n; j++) {
    if (arr[min] > arr[j])
        min = j;
  }
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}
console.log(arr);
