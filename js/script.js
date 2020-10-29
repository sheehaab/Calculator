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
function getPercent(a,b){
	let y = (a/100) * b;
	return y;
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
	if(operator === '%'){
		result = getPercent(num1,num2);
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
const percent = document.getElementById('percent');
const negative = document.getElementById('negative');
const copyBtn = document.getElementById('copy');
const copyMsg = document.getElementById('copy-msg');

let storing = '';
let firstNum = '';
let secondNum = '';
let operator = '';
let moreThanOperator = '';
let result = '';
let equalIsPressed = false;
let pointCounter = 0;




//dark mode 

const toggle = document.getElementById('toggle');
const calcBackground = document.querySelector('.calc-container');
const numbersColor = document.querySelector('.numbers');
const upperBackground = document.querySelector('.upper');
const lowerNumColor = document.querySelectorAll('.js-style');
const lowerOpertators = document.querySelectorAll('.lower-operators');
const lowerOpertatorsCircle = document.querySelectorAll('.back-circle');

toggle.checked = false;

toggle.addEventListener('click',function(){
	if(toggle.checked === false){
		calcBackground.classList.remove('dark-mode-calc-container');
		numbersColor.classList.remove('dark-mode-numbers-upper');
		upperBackground.classList.remove('dark-mode-upper-background-color')
		lowerNumColor.forEach((num)=>{
			num.classList.remove('dark-mode-lower-numbers-colors')
		})

		lowerOpertators.forEach((op)=>{
			op.classList.remove('dark-mode-operator-color');
		})

		lowerOpertatorsCircle.forEach((circle)=>{
			circle.classList.remove('dark-mode-operator-span');
		})

		clear.classList.remove('dark-mode-delte-icon');


	}else if(toggle.checked === true){
		calcBackground.classList.add('dark-mode-calc-container');
		numbersColor.classList.add('dark-mode-numbers-upper');
		upperBackground.classList.add('dark-mode-upper-background-color')
		lowerNumColor.forEach((num)=>{
			num.classList.add('dark-mode-lower-numbers-colors')
		})

		allBtns.forEach((button)=>{
			button.addEventListener("mousedown",function(){
				button.style.cssText = 'background-color:#4c5867; transform:scale(.9);'
			})
			button.addEventListener("mouseup",function(){
				button.style.cssText = 'background-color:none;'
			})
		})


		copyBtn.addEventListener('mousedown',function(){
			copyBtn.style.cssText = 'background-color:#4c5867; transform:scale(1.1); transition:.1s ease-in-out;';
			copyMsg.classList.add('appear-msg');
			
			setTimeout(function(){
				copyMsg.classList.remove('appear-msg');
			},3000)
		})

		copyBtn.addEventListener('mouseup',function(){
			copyBtn.style.cssText = 'background-color:none;'
		})

		deleteBtn.addEventListener('mousedown',function(){
			deleteBtn.style.cssText = 'background-color:#4c5867; transform:scale(1.1); transition:.1s ease-in-out;'
		})

		deleteBtn.addEventListener('mouseup',function(){
			deleteBtn.style.cssText = 'background-color:none;'
		})

		
		lowerOpertators.forEach((op)=>{
			op.classList.add('dark-mode-operator-color');
		})

		lowerOpertatorsCircle.forEach((circle)=>{
			circle.classList.add('dark-mode-operator-span');
		})

		clear.classList.add('dark-mode-delte-icon');
		
	}

})

copyBtn.addEventListener('mousedown',function(){
	copyBtn.style.cssText = 'background-color:#EEEEEE; transform:scale(1.1); transition:.1s ease-in-out;';
	copyMsg.classList.add('appear-msg');
	setTimeout(function(){
		copyMsg.classList.remove('appear-msg');
	},3000)
})

copyBtn.addEventListener('mouseup',function(){
	copyBtn.style.cssText = 'background-color:none;'
})

deleteBtn.addEventListener('mousedown',function(){
	deleteBtn.style.cssText = 'background-color:#EEEEEE; transform:scale(1.1); transition:.1s ease-in-out;'
})

deleteBtn.addEventListener('mouseup',function(){
	deleteBtn.style.cssText = 'background-color:none;'
})

//add to all buttons when clicked they will get the style in css
allBtns.forEach((button)=>{
	button.addEventListener("mousedown",function(){
		button.style.cssText = 'background-color:#EEEEEE; transform:scale(.9);'
	})
	button.addEventListener("mouseup",function(){
		button.style.cssText = 'background-color:none;'
	})
})

window.addEventListener('keydown',function(e){
	if(e.key === '1'){
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
	}
	if(e.key === '2'){
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
	}
	if(e.key === '3'){
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
	}
	if(e.key === '4'){
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
	}
	if(e.key === '5'){
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
	}
	if(e.key === '6'){
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
	}
	if(e.key === '7'){
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
	}
	if(e.key === '8'){
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
	}
	if(e.key === '9'){
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
	}

	if(e.key === '0'){
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
	}

	if(e.key === 'Backspace'){
		storing = storing.slice(0,-1);
		display.textContent = storing;

	}

	if(e.key === 'c'){
		empty();
		
	}

	if(e.key === '='){
	
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
	}


	if(e.key === '*'){
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

	}

	if(e.key === '/'){
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
	}

	if(e.key === '-'){

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
	}

	if(e.key === '+'){
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
	}

	if(e.key === "%"){
		if(operator === ''){
			firstNum = +storing;
			storing = '';
			display.textContent = '';
			operator = '%';
		}else{
			firstNum = operate(firstNum,operator,+storing);
			storing = '';
			display.textContent = firstNum;
			operator = '%';
		}
		pointCounter=0;
	}
	console.log(e.keyCode + " " + e.key);
	let keyID = e.keyCode;
	

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

deleteBtn.addEventListener('click',function(){
	storing = storing.slice(0,-1);
	display.textContent = storing;
})

copy.addEventListener('click',function(){
	let textArea = document.createElement('textarea');
	textArea.value = display.textContent;
	if(display.textContent === ''){
		copyMsg.textContent = 'There is nothing to copy';
	}else{
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("Copy");
		textArea.remove();
		copyMsg.textContent = 'Copied to Clipboard';
	}
})

clear.addEventListener('click',function(){
	empty();
})


percent.addEventListener('click',function(){
	if(operator === ''){
		firstNum = +storing;
		storing = '';
		display.textContent = '';
		operator = '%';
	}else{
		firstNum = operate(firstNum,operator,+storing);
		storing = '';
		display.textContent = firstNum;
		operator = '%';
	}
	pointCounter=0;
})

negative.addEventListener('click',function(){
	storing = +storing * (-1);
	display.textContent = storing;
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






