const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  return arr.reduce((res, item) => {
    let lastSubarray = res[res.length - 1]; 

    if (!lastSubarray || lastSubarray.reduce((sum, num) => sum + num, 0) + item > n) {
      res.push([item]); 
    } else {
      lastSubarray.push(item); 
    }

    return res;
  }, []);
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
