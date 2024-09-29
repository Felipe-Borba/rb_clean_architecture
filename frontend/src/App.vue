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
</script>

<template>
  <div class="total">Total: {{ getTotal() }}</div>
  <div class="completed">Completed: {{ getCompleted() }}%</div>
  <input type="text" class="todo-description-input" v-model="description" />
  <button class="add-todo-button" @click="addTodo(description)">Add</button>
</template>

<style scoped></style>
