let user_value = document.getElementById('user');	
let user_click = document.getElementById('btn');
let todo_task = document.getElementById('tasks');
user_click.addEventListener('click',function(e){


	
	
	if (user_value.value === '') {
		alert("please enter your value")
	}
	else{
		let create_Ele = document.createElement('li');
		//let create_text = document.createTextNode('user_value');
		//create_Ele.appendChild(create_text)
		create_Ele.innerHTML = `${user_value.value} <i class="fa-solid fa-trash trash"></i>`
		todo_task.appendChild(create_Ele)
		user_value.value = '';
		create_Ele.querySelector('i').addEventListener('click',function(){
			create_Ele.remove();
		})
		
	}
	e.preventDefault();
})