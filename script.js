let a = Math.round(Math.random() * 99 + 1);
alert(a);

if(a % 3 == 0 && a % 5 == 0) {
   alert("bu son fuzzbuzz");
} else if(a % 5 == 0) {
  alert("bu son buzz");
}else if (a % 3 == 0) {
    alert("bu son fuzz");
}else{
    alert("bu son fuzz buzz ham emas");
}