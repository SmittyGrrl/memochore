console.log("is this working?");


$("button").on("click", function() {

  var clean = $("#cleaninghours").val();
 
  var laundry = $("#laundryhours").val();
 
  var errands = $("#errandhours").val();
  
  var hours = parseInt(clean) + parseInt(laundry) + parseInt(errands);
  

if (hours <=5) {
  $("#solutionA").text(hours, you would totally clean up, you should sign up to compete on Memochore today.);
} else {
  $("#solutionB").text(hours, hmmm you need some motivation, you should sign up and compete on Memochore today.);
};

});