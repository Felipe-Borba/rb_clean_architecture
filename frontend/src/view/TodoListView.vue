<script setup lang="ts">
import { inject, onMounted, reactive } from 'vue'
import TodosGatewayHttp from '../infra/gateway/TodosGatewayHttp'
import TodoList from '../entity/TodoList'
import TodoListComponent from '../component/TodoListComponent.vue'
import Observer from '@/infra/observer/Observer'
import type Todo from '@/entity/Todo'

const todoList = reactive(new TodoList())

onMounted(async () => {
  const todosGateway = inject('todosGateway') as TodosGatewayHttp
  const todosData = await todosGateway.getTodos()
  todoList.addTodos(todosData)

  todoList.on(
    new Observer('add-todo', async (todo: Todo) => {
      await todosGateway.postTodos(todo)
    })
  )
})
</script>

<template>
  <TodoListComponent :todo-list="todoList"></TodoListComponent>
</template>

<style scoped></style>
