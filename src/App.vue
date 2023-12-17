<script setup lang="ts">
import { nanoid } from "nanoid";
import { ref } from "vue";
import NewTodoForm from "./components/NewTodoForm.vue";
import TodoList from "./components/TodoList.vue";
import type { Todo } from "./types/index";

const todos = ref<Todo[]>([]);

const addTodo = (todoText: string) => {
  todos.value.push({ completed: false, id: nanoid(), task: todoText });
};

const deleteTodo = (selectedTodoId: string) => {
  todos.value = todos.value.filter((todo) => todo.id !== selectedTodoId);
};

const checkTodo = (selectedTodoId: string) => {
  todos.value = todos.value.map((todo) =>
    todo.id === selectedTodoId ? { ...todo, completed: !todo.completed } : todo
  );
};
</script>

<template>
  <main class="flex flex-col items-center text-slate-800">
    <h1 :style="{ marginTop: '32px' }" class="mt-8 text-3xl font-medium text-center">
      CheckMate Todo
    </h1>
    <p class="mt-1 text-lg text-center">Your Move to Master Your Tasks - Plan. Act. Conquer!</p>
    <div class="w-full max-w-3xl">
      <NewTodoForm @add-todo="addTodo" />
      <div class="mt-8" v-if="todos.length > 0">
        <h4 class="text-lg">Your todos</h4>
        <TodoList :todos="todos" @check-todo="checkTodo" @delete-todo="deleteTodo" />
      </div>
    </div>
  </main>
</template>
