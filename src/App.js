import './App.css';
import React, {useRef} from 'react';

function App() {

	function task1() {
		console.log('task2');
	}

	function task2(event) {
		event.target.classList.add('active');
	}

	function task3(event) {
		console.log(event.target.value);
	}

	let count4 = 0;
	function task4(event) {
		if (event) count4++;
		console.log(count4);
	}

	const out5 = useRef ()
	function task5(event) {
		if (event.target.checked) {
			out5.current.textContent = event.target.value;
		}
		else {
			out5.current.textContent = 0;
		}
	}

	const out6 = useRef ()
	function task6(event) {
		let val = event.target.value;
		out6.current.textContent = val;
	}

	const block7 = useRef ()
	function rint(min, max) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	
	function task7() {
		let color = `rgb(${rint(0,255)},${rint(0,255)},${rint(0,255)})`;
		block7.current.style.background = color;
	}

	const out8 = useRef ();
	function task8(event) {
		let out = '';
		let num = event.key;
		if (!isNaN(+num)) {
			out += '1';
		}
		else {
			out += '0';
		}
		out8.current.textContent = out;
	}

	const out9 = useRef ();
	function task9(event) {
		out9.current.textContent = event.target.value;
	}

	const input10 = useRef();
	let ar10 = [5, 6, 7];
	function task10() {
		let num = +input10.current.value;
		ar10.push(num);
		console.log(ar10);
	}

	return (
		<>
			<h1>События</h1>
			<section>
				<h2>Task 1</h2>
				<button className="task-1" onClick={task1}>Push</button>
			</section>
			<section>
				<h2>Task 2</h2>
				<div className="task-2" onMouseEnter={task2}></div>
			</section>
			<section>
				<h2>Task 3</h2>
				<input type="text" className="task-3" onInput={task3} />
			</section>
			<section>
				<h2>Task 4</h2>
				<button className="task-4" onClick={task4}>Count</button>
			</section>
			<section>
				<h2>Task 5</h2>
				<input type="checkbox" value="55" onChange={task5} />
				<div className="out-5" ref={out5}></div>
			</section>
			<section>
				<h2>Task 6</h2>
				<select className="task-6" onChange={task6}>
					<option value="7">seven</option>
					<option value="4">four</option>
					<option value="9">nine</option>
					<option value="10">ten</option>
				</select>
				<div className="out-6" ref={out6}></div>
			</section>
			<section>
				<h2>Task 7</h2>
				<div className="block-7" ref={block7}></div>
				<button className="task-7" onClick={task7}>Color</button>
			</section>
			<section>
				<h2>Task 8</h2>
				<input type="text" className="task-8" onKeyPress={task8}></input>
				<div className="out-8" ref={out8}></div>
			</section>
			<section>
				<h2>Task 9</h2>
				<input type="range" className="task-9" onChange={task9}></input>
				<div className="out-9" ref={out9}></div>
			</section>
			<section>
				<h2>Task 10</h2>
				<input type="number" className="i-10" ref={input10}></input>
				<button className="task-10" onClick={task10}>Push</button>
			</section>
		</>
	);
}

export default App;