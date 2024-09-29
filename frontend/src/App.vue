<script setup lang="ts">
import { inject, onMounted, reactive } from 'vue'
import TodosGatewayHttp from './infra/gateway/TodosGatewayHttp'
import TodoList from './entity/TodoList';

const todoList = reactive(new TodoList())
const description = ''

onMounted(async () => {
  const todosGateway = inject('todosGateway') as TodosGatewayHttp
  const todosData = await todosGateway.getTodos()
  todoList.addTodos(todosData)
})
</script>

<template>
  <div class="total">Total: {{ todoList.getTotal() }}</div>
  <div class="completed">Completed: {{ todoList.getCompleted() }}%</div>
  <div v-bind:key="todo.description" v-for="todo in todoList.todos">
    <p class="todo-description">{{ todo.description }}</p>
    <p class="todo-done">{{ todo.done }}</p>
    <button class="todo-toggle-done-button" @click="todo.toggleDone()">done/undone</button>
    <button class="todo-delete-button" @click="todoList.deleteTodo(todo)">delete</button>
  </div>
  <input type="text" class="todo-description-input" v-model="description" />
  <button class="add-todo-button" @click="todoList.addTodo(description)">Add</button>
</template>

<style scoped></style>
