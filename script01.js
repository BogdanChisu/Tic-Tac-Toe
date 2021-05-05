function run() {
	var move = 0;
	var wins = 0;
	let grid = document.getElementById("the_grid");

	function displayMove(move) {
		if ((move % 2) === 0) {
			document.getElementById("move_id").innerHTML = "0 MOVES!";
		} else {
			document.getElementById("move_id").innerHTML = "X MOVES!";
		}
	}

	addEvent();

	function addEvent() {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let btnId = i.toString() + j.toString();
				console.log(btnId);
				let btn = document.getElementById(btnId);
				btn.addEventListener("click", function() {
					choiceMade(btn.id, move);
					move++;
				})
			}
		}
	}

	function restartBtn() {
		let restart = document.createElement("button");
		restart.innerHTML = "Play Again";
		restart.classList.add('btn');
		restart.classList.add('btn-secondary');
		restart.addEventListener('click', function(){
			location.reload();
		});
		grid.appendChild(restart);
	}

	function displayCol(col) {
		console.log("col = " + col);
		let picCol = document.createElement("img");
		picCol.src = "images/col" + col + ".png";
		grid.appendChild(picCol);
		restartBtn();
	}

	function checkCols() {
		for (let i = 0; i < 3; i++) {
			let el0 = document.getElementById("0" + i).innerHTML.toString();
			let el1 = document.getElementById("1" + i).innerHTML.toString();
			let el2 = document.getElementById("2" + i).innerHTML.toString();
			if (
				(document.getElementById("0" + i).disabled === true) &&
				(document.getElementById("1" + i).disabled === true) &&
				(document.getElementById("2" + i).disabled === true) &&
				(el0 === el1) && (el0 === el2)
				) {
				document.getElementById("move_id").innerHTML = (el0 + " WINS!!!");
				displayCol(i);
				wins++;
				break;
			}
		}
	}

	function displayLine(line) {
		console.log("line = " + line);
		let picLine = document.createElement("img");
		picLine.src = "images/lin" + line + ".png";
		grid.appendChild(picLine);
		restartBtn();
	}

	function checkLines() {
		for (let i = 0; i < 3; i++) {
			let el0 = document.getElementById(i + "0").innerHTML.toString();
			let el1 = document.getElementById(i + "1").innerHTML.toString();
			let el2 = document.getElementById(i + "2").innerHTML.toString();
			if (
				(document.getElementById(i + "0").disabled === true) &&
				(document.getElementById(i + "1").disabled === true) &&
				(document.getElementById(i + "2").disabled === true) &&
				(el0 === el1) && (el0 === el2)
				) {
				document.getElementById("move_id").innerHTML = (el0 + " WINS!!!");
				displayLine(i);
				wins++;
				break;
			}
		}
	}

	function checkDiag1() {
		let el0 = document.getElementById("00").innerHTML.toString();
		let el1 = document.getElementById("11").innerHTML.toString();
		let el2 = document.getElementById("22").innerHTML.toString();
		if (
			(document.getElementById("00").disabled === true) &&
			(document.getElementById("11").disabled === true) &&
			(document.getElementById("22").disabled === true) &&
			(el0 === el1) && (el0 === el2)
			) {
			document.getElementById("move_id").innerHTML = (el0 + " WINS!!!");
			console.log("diag1 full");
			let picDiag1 = document.createElement("img");
			picDiag1.src = "images/diag1.png";
			grid.appendChild(picDiag1);
			win++;
			restartBtn();
		}
	}

	function checkDiag2() {
		let el0 = document.getElementById("02").innerHTML.toString();
		let el1 = document.getElementById("11").innerHTML.toString();
		let el2 = document.getElementById("20").innerHTML.toString();
		if (
			(document.getElementById("02").disabled === true) &&
			(document.getElementById("11").disabled === true) &&
			(document.getElementById("20").disabled === true) &&
			(el0 === el1) && (el0 === el2)
			) {
			document.getElementById("move_id").innerHTML = (el0 + " WINS!!!");
			console.log("diag2 full");
			let picDiag2 = document.createElement("img");
			picDiag2.src = "images/diag2.png";
			grid.appendChild(picDiag2);
			win++;
			restartBtn();
		}
	}

	function checkWin() {
		checkCols();
		checkLines();
		checkDiag1();
		checkDiag2();
	}

	function choiceMade(buttonId, move) {
		displayMove(move);
		let button = document.getElementById(buttonId);
		console.log("move = " + move);
		console.log(button.id);
		button.disabled = true;
		if (move % 2 == 0) {
			button.innerHTML = "X";
		} else {
			button.innerHTML = "0";
		}
		button.disabled = true;
		if (move >= 4) {
			checkWin();
		}
		if (move === 8 && wins === 0) {
			document.getElementById("move_id").innerHTML = "IT's A DRAW!!!";
			restartBtn();
		}
	}
}

run();