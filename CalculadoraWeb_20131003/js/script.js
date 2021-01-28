function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput(y) {
    document.getElementById('inputwindow').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);
    document.getElementById('inputwindow').value = result;

    if (result > 0) {
        inputwindow.style.backgroundColor ="Green";
        inputwindow.style.boxShadow= "Green";
    
    } else if (result < 0) {
        inputwindow.style.backgroundColor = "Red";
        inputwindow.style.boxShadow= "Red";
    
    } else {
        inputwindow.style.backgroundColor = "Blue";
        inputwindow.style.boxShadow= "Blue";
    }
}

