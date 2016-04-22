var load = function(){
	new Vue({
		el: '#app',
		data: {
	    	message: 'Hello'
 		}
	})

	new Vue({
  		el: '#app1',
  		data: {
   			message: 'Hello'
  		}
	})

	new Vue({
 		el: '#app2',
  		data: {
    	message: 'Hello Vue'
 			},
  		methods: {
    	reverseMessage: function () {
     	this.message = this.message.split('').reverse().join('')
    		}
  		}
	})

	new Vue({
	  	el: '#app3',
	  	data: {
	    	newTodo: '',
	    	todos: [
	    	  	
	    	]
	  	},
	  	methods: {
	    	addTodo: function () {
	      	var text = this.newTodo.trim()
	      	if (text) {
	        	this.todos.push({ text: text })
	        	this.newTodo = ''
	      	}
	    },
	    	removeTodo: function (index) {
	     		this.todos.splice(index, 1)
	    	}
	  	}
	})
};
