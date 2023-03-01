const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false,
                text: null
            }
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo)
                this.newTodo = {
                    done: false
                }
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }
            //else erro

        },
        storeTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    },
    created() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos
    },
    // updated() {
    //     localStorage.setItem('todos', JSON.stringify(this.todos))
    // }
}

Vue.createApp(todosApp).mount('#app')