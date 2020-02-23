const button1 = document.getElementById('button1');
const text = document.getElementById('text');
const button2 = document.getElementById('button2');

button1.onclick = function () {
	text.style.display = 'block';
}

button2.onclick = function () {
	text.style.display = 'none';
}



const add_button = document.getElementById('add_button');
const input = document.getElementById('input');
const ul = document.getElementById('task-list');

add_button.onclick = function () {

	const li = document.createElement('li');
	const button = document.createElement("button");

	button.className = 'del_button';
	button.innerHTML = "remove element";
	li.innerHTML = input.value;

	button.onclick = function () {
		button.style.display = 'none';
		li.style.display = 'none';
	}

	ul.appendChild(li);
	ul.appendChild(button);

	input.value = "";
}

