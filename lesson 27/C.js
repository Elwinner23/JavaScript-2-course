/** 2667. Создать функцию Hello World
 * @return {Function}
 */
function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }
  
  const helloWorldFunction = createHelloWorld();
  console.log(helloWorldFunction()); 



  /**2724. Sort By
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    var sortedArr = arr.sort((a, b) => fn(a) - fn(b));
    return sortedArr;
  };
  
  var arr = [3, 1, 5, 2, 4];
  var fn = function(num) {
    return num * 2; 
  };
  
  var sortedArray = sortBy(arr, fn);
  console.log(sortedArray); 
  

//2727 Является ли объект пустым
  /**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (let key in obj)
        return false;
    return true;
};