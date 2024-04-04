function checkHeight() {
  let h = (document.getElementById("myHeight").value).trim();
  if (h > 200) {
	return false
  } else {
	if (!isNaN(h)) {
		return true;
	  } else {
		return false;
	  }
  }
  
}

function checkInseam() {
  let i = (document.getElementById("myInseam").value).trim();
  if (i > 100) {
	return false
  } else {
	if (!isNaN(i)) {
		return true;
	  } else {
		return false;
	  }
  }
}

function validateForm(){
	if(!checkHeight()){
	  alert("Invalid value for height!");
	  document.getElementById("myHeight").focus();
	  return false;
	}else{
		if(!checkInseam()){
		  alert("Invalid value for inseam!!");
		  document.getElementById("myInseam").focus();
		  return false;
		}else{
			size = sizeCalculate();
			alert("Bike size based on you height / insteam  is "+size);
			return false;
		}
	}
}