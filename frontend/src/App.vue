<script setup lang="ts">
const todos = [
  { description: 'Criar testes de unidade', done: false },
  { description: 'Criar testes de integração', done: false },
  { description: 'Criar testes de E2E', done: true }
]

function getTotal() {
  return todos.length
}

function getCompleted() {
  const total = getTotal()
  const completed = todos.filter((todo) => todo.done).length
  return Math.round((completed / total) * 100)
}
</script>

<template>
  <div class="total">Total: {{ getTotal() }}</div>
  <div class="completed">Completed: {{ getCompleted() }}%</div>
</template>

<style scoped></style>
