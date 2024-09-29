import { expect, test } from 'vitest'
import TodoList from '../src/entity/TodoList'

test('Deve criar uma todo list vazia', () => {
  const todoList = new TodoList()
  expect(todoList.getTotal()).toBe(0)
  expect(todoList.getCompleted()).toBe(0)
})

test('Deve criar uma todo list com um todo', () => {
  const todoList = new TodoList()
  todoList.addTodo('A')
  expect(todoList.getTotal()).toBe(1)
  expect(todoList.getCompleted()).toBe(0)
})

test('Deve criar uma todo list com dois todo e um done', () => {
  const todoList = new TodoList()
  todoList.addTodo('A')
  todoList.addTodo('B')
  todoList.todos[1].toggleDone()
  expect(todoList.getTotal()).toBe(2)
  expect(todoList.getCompleted()).toBe(50)
})

test('Não deve deixar inserir todo duplicado', () => {
  const todoList = new TodoList()
  todoList.addTodo('A')
  todoList.addTodo('A')
  expect(todoList.getTotal()).toBe(1)
  expect(todoList.getCompleted()).toBe(0)
})