var list = [
	{
		'desc' : 'Rice',
		'amount' : '1',
		'value'	: '5.40'
	},
	{
		'desc' : 'Beer',
		'amount' : '12',
		'value'	: '1.99'
	},
	{
		'desc' : 'Meat',
		'amount' : '1',
		'value'	: '15.00'
	}
];

function getTotal(list) {
	var total = 0;
	for(var key in list) {
		total += list[key].value * list[key].amount;
	}
	return total;
}

function setList(list) {
	var table = '<thead><tr><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Value</th><th scope="col">Action</th></tr></thead><tbody>';
	for(var key in list) {
		table += '<tr>\
					<td scope="row">'+ list[key].desc +'</td>\
					<td scope="row">'+ list[key].amount +'</td>\
					<td scope="row">'+ list[key].value +'</td>\
					<td scope="row">Edit | Delete</td>\
				</tr>'
	}
	table += '</tbody><tfoot>\
				<tr>\
					<th></th>\
					<th></th>\
					<th></th>\
					<th></th>\
				</tr>\
			</tfoot>'
	document.getElementById('listTable').innerHTML = table;
}

setList(list);
console.log(getTotal(list));