<script setup lang="ts">
defineProps(['todoList'])
const description = ''
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
