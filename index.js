function insert(num)
{
 document.form.textview.value = document.form.textview.value+num;
}

function equal()
{
	var result = document.form.textview.value;
	document.form.textview.value = eval(result)
}
function clean()
{
	document.form.textview.value=""
}
function back()
{
	var result = document.form.textview.value;
	if(result)
	{
		document.form.textview.value = result.substring(0,result.length-1)
	}
}