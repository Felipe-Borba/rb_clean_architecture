<script setup lang="ts">
import { reactive } from 'vue'

const todos: any = reactive([])
const description = ''

function getTotal() {
  return todos.length
}

function getCompleted() {
  const total = getTotal()
  const completed = todos.filter((todo: any) => todo.done).length
  return Math.round((completed / total) * 100)
}

function addTodo(description: string) {
  todos.push({ description, done: false })
}

function toggleDone(todo: any) {
  todo.done = !todo.done
}

function deleteTodo(todo:any) {
  todos.splice(todos.indexOf(todo), 1)
}
</script>

<template>
  <div class="total">Total: {{ getTotal() }}</div>
  <div class="completed">Completed: {{ getCompleted() }}%</div>
  <div v-for="todo in todos">
    <p class="todo-description">{{ todo.description }}</p>
    <p class="todo-done">{{ todo.done }}</p>
    <button class="todo-toggle-done-button" @click="toggleDone(todo)">done/undone</button>
    <button class="todo-delete-button" @click="deleteTodo(todo)">delete</button>
  </div>
  <input type="text" class="todo-description-input" v-model="description" />
  <button class="add-todo-button" @click="addTodo(description)">Add</button>
</template>

<style scoped></style>
