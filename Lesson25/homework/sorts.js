let arrayNumbers = [3, 7, 6, 9, 2, 4, 1, 8, 0, 5]

function sort1(array)
{
	for (let i = array.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				let a = array[j];
				array[j] = array[j + 1];
				array[j + 1] = a;
      		}
    	}
 	}
	return array
}

function sort2(array)
{
    let line = (array, target) => {
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] === target)
    {
    	return true;
    }
  }
}
  return array
}

function sort3(array)
{
    let n = array.length;
    for (let i = 0; i < n-1; i++){
        let min = i;
        for (let j = i + 1; j < n; j++){
			if (array[j] < array[min])
            {
              min = j;
            }
            let t = array[min]; array[min] = array[i]; array[i] = t
		}
    }
  return array
}

console.log(sort1(arrayNumbers))
console.log(sort2(arrayNumbers))
console.log(sort3(arrayNumbers))