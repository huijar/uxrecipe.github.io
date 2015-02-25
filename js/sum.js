//calculate the sum  // PDC
 function sum()
{
	var add_input_value = function(acc, curr) {
		return acc + parseFloat($(curr).val());
	};

	var resultp = $.makeArray($('input[type="number"].p')).reduce(add_input_value, 0);
	var resultc = $.makeArray($('input[type="number"].c')).reduce(add_input_value, 0);

    $("#conclusion").fadeIn( 300, "linear" );

	document.getElementById("conclusion-content").innerHTML = "<span class='heading'>Dear Client</span>, <br/> If you want UX for the project, it will take around <span class='conclusion'>" + resultp + " hours</span>" + " and it will cost a total amount of <span class='conclusion'>" + resultc + "</span>.";
}



