function palindrome(str) {
  var a=/[\W_]/g;
   var s=str.toLowerCase().replace(a,'');
var b=s.split('').reverse().join('');
return s===b; 
  //return true;
}
palindrome("eye");
