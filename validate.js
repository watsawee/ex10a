function checkHeight() {
	let h = (document.getElementById("myHeight").value).trim();
	if (!isNaN(h) && h >= 1 && h <= 200) {
	  return true;
	} else {
	  return false;
	}
  }
  
  function checkInseam() {
	  let i = parseInt(document.getElementById("myInseam").value.trim());
	  if (!isNaN(i) && i >= 1 && i <= 100) {
		return true;
	  } else {
		return false;
	  }
	}
  
	function validateForm(){
	  let height = document.getElementById("myHeight").value.trim();
	  let inseam = document.getElementById("myInseam").value.trim();
  
	  if (height === "" || inseam === "") {
		  alert("Please fill in all fields!");
		  return false;
	  }
  
	  if(!checkHeight()){
		  alert("Invalid value for height!");
		  document.getElementById("myHeight").focus();
		  return false;
	  }
  
	  if(!checkInseam()){
		  alert("Invalid value for inseam!!");
		  document.getElementById("myInseam").focus();
		  return false;
	  }
  
	  size = sizeCalculate();
	  alert("Bike size based on your height / inseam is " + size);
	  return false;
  }