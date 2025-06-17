// input: { arr: [...], target: int }
function linear_search(input){
  const { arr, target } = input;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
