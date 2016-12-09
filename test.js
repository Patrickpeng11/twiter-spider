<script type="text/javascript" language="javascript"></script>
function sayHello(){
  console.log("Hello");
}


$(function() {
  var i = setInterval(sayHello ,500);
  setTimeout(function(){clearInterval(i)},5000);
});


