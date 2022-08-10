module.exports = function reverse (n) {
  let x = '';
   let absN = Math.abs( n );
   let arr = ( "" + absN ).split( "" ).map( Number );
  
  let newArr = arr.reverse();
 
  x = newArr.join('');
    
  return parseInt(x, 10);
}
