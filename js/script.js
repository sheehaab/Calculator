function add(a,b){
	return a+b;
}

function subtract(a,b){
	return a-b;
}

function multiply(a,b){
	return a*b;
}

function divide(a,b){
	return a/b;
}

function operate(num1,operator,num2){
	result = 0;
	if(operator === '+'){
		result = add(num1,num2);
	}
	if(operator === '-'){
		result = subtract(num1,num2);
	}
	if(operator === '*'){
		result = multiply(num1,num2);
	}
	if(operator === '/'){
		result = divide(num1,num2);
	}
	return +result.toFixed(2);
}

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const display = document.getElementById('displayNum');
const clear = document.getElementById('delete-icon');
const plus = document.getElementById('plus');
const equal = document.getElementById('equal');
const times = document.getElementById('times');
const divided = document.getElementById('divided');
const minus = document.getElementById('minus');
const deleteBtn = document.getElementById('delete');
const allBtns = document.querySelectorAll('button');
const point = document.getElementById('point');

let storing = '';
let firstNum = '';
let secondNum = '';
let operator = '';
let moreThanOperator = '';
let result = '';
let equalIsPressed = false;
let pointCounter = 0;


allBtns.forEach((button)=>{
	button.addEventListener("mousedown",function(){
		button.style.cssText = 'background-color:#EEEEEE; transform:scale(.9);'
	})
	button.addEventListener("mouseup",function(){
		button.style.cssText = 'background-color:white;'
	})
})


one.addEventListener('click',function(){;
	
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '1';
			display.textContent = storing;
	}

})


two.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '2';
			display.textContent = storing;
	}
})

three.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '3';
			display.textContent = storing;
	}

})

four.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '4';
			display.textContent = storing;
	}

})

five.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '5';
			display.textContent = storing;
	}

})

six.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '6';
			display.textContent = storing;
	}

})

seven.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '7';
			display.textContent = storing;
	}

})

eight.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '8';
			display.textContent = storing;
	}

})

nine.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '9';
			display.textContent = storing;
	}

})

zero.addEventListener('click',function(){
	if(storing.length >= 14){
		one.removeEventListener('click',function(){});
	}else{
		if(equalIsPressed){
			storing = '';
			equalIsPressed = false;
		}
			storing += '0';
			display.textContent = storing;
	}

})

clear.addEventListener('click',function(){
	empty();
})

deleteBtn.addEventListener('click',function(){
	storing = storing.slice(0,-1);
	display.textContent = storing;
	console.log(storing);
})

plus.addEventListener('click',function(){
	
	
		if(operator === ''){
			firstNum = +storing;
			storing = '';
			display.textContent = '';
			operator = '+';
		}else{
			firstNum = operate(firstNum,operator,+storing);
			storing = '';
			display.textContent = firstNum;
			operator = '+';
		}
	pointCounter=0;

})


minus.addEventListener('click',function(){
	
	
		if(operator === ''){
			firstNum = +storing;
			storing = '';
			display.textContent = '';
			operator = '-';
		}else{
			firstNum = operate(firstNum,operator,+storing);
			storing = '';
			display.textContent = firstNum;
			operator = '-';
		}
	pointCounter=0;
})


divided.addEventListener('click',function(){
	
	
		if(operator === ''){
			firstNum = +storing;
			storing = '';
			display.textContent = '';
			operator = '/';
		}else{
			firstNum = operate(firstNum,operator,+storing);
			storing = '';
			display.textContent = firstNum;
			operator = '/';
		}
	pointCounter=0;

})

times.addEventListener('click',function(){
	

		if(operator === ''){
			firstNum = +storing;
			storing = '';
			display.textContent = '';
			operator = '*';
		}else{
			firstNum = operate(firstNum,operator,+storing);
			storing = '';
			display.textContent = firstNum;
			operator = '*';
		}
	pointCounter=0;

})

equal.addEventListener('click',function(){
	
	if(operator !== '' && storing !== ''){
		secondNum = +storing;
		result = operate(firstNum, operator,secondNum);
		if(result === Infinity){
			storing = '';
			display.textContent = 'ERORR!';
			operator = '';
			equalIsPressed = true;
		}else{
			storing = result;
			display.textContent = storing;
			operator = '';
			equalIsPressed = true;
		}
	}else{
		equal.removeEventListener('click',function(){})
	}
	
		pointCounter=0;	

})

point.addEventListener('click',function(){
	while(pointCounter < 1){
		storing  += '.';
		display.textContent = storing;
		pointCounter+=1;
	}
})

function empty(){
	display.textContent = '';
	storing = '';
	result = '';
	firstNum = '';
	secondNum = '';
	operator = '';
	pointCounter=0;
}






