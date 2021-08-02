
const data = {
  labels: [],
  datasets: [{
    label: 'Chart',
    fill: false,
    data: [],
    borderColor: 'rgb(25, 135, 84)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};

var c = document.getElementById("chart");
c.height = 88;
var ctx = c.getContext("2d");
var myChart = new Chart(ctx, config);

let arr = [];
document.getElementById('numberForm').addEventListener('submit', function(evt){
    evt.preventDefault();
    arr = [];
    let number = document.getElementById('theNumber').value;
    function lookup(number){
    	arr.push(number);
    	if(number <= 1){
    		return;
    	}
    	if(number%2 == 0){
    		lookup(number/2); 
    	} else {
    		lookup((3*number)+1); 
    	}
    }
    if(Number(number) > 0){
    	lookup(Number(number))

	    document.querySelector('#outputWrapper .for').innerText = number
	    document.querySelector('#outputWrapper .total').innerText = arr.length
	    document.querySelector('#outputWrapper .max').innerText = Math.max(...arr)

	    labels = [];
	    arr.forEach((a, i) => {
	    	labels.push(i+1)
	    } )
	    myChart.data.labels = labels;
	    myChart.data.datasets[0].label = "Chart for "+number;
	    myChart.data.datasets[0].data = arr;
	    myChart.update();

	    document.getElementById('output').innerText = arr.join(', ')
    } else {
    	alert('Input number must be greater than 0!')
    }
	document.getElementById('numberForm').reset();
    
})