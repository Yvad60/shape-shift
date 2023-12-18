<script setup lang="ts">
import { nanoid } from "nanoid";
import { ref, watch } from "vue";
import NewTodoForm from "./components/NewTodoForm.vue";
import TodoList from "./components/TodoList.vue";
import type { Todo } from "./types/index";
import {
  fetchDefaultTodos,
  loadTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from "./utils/index";

const todos = ref<Todo[]>(loadTodosFromLocalStorage());
const isFetching = ref(false);
const newTodoFormRef = ref<InstanceType<typeof NewTodoForm> | null>(null);

watch(
  todos,
  (updatedTodos) => {
    saveTodosToLocalStorage(updatedTodos);
  },
  { deep: true }
);

const addTodo = (todoText: string) => {
  if (!todoText) return;
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

const handleBtnSubmit = () => {
  newTodoFormRef.value?.$emit("addTodo", newTodoFormRef.value.todoText);
  newTodoFormRef.value?.resetTodoText();
};

const handleFetchTodos = async () => {
  try {
    isFetching.value = true;
    const fetchedTodos = await fetchDefaultTodos();
    todos.value = fetchedTodos;
  } catch (error) {
    console.error(error);
  } finally {
    isFetching.value = false;
  }
};
</script>

<template>
  <main class="flex flex-col items-center text-slate-800">
    <h1 :style="{ marginTop: '32px' }" class="mt-8 text-3xl font-medium text-center">
      CheckMate Todo
    </h1>
    <p class="mt-1 text-lg text-center">Your Move to Master Your Tasks - Plan. Act. Conquer!</p>
    <div class="w-full max-w-3xl">
      <NewTodoForm @add-todo="addTodo" ref="newTodoFormRef" />
      <div class="flex justify-center gap-4">
        <button
          class="mt-4 bg-green-700 px-12 py-3 font-medium text-white rounded-md active:scale-[1.01]"
          @click="handleBtnSubmit"
        >
          Submit
        </button>
        <button
          v-if="todos.length === 0"
          class="mt-4 border border-green-700 px-4 py-3 font-medium text-green-700 rounded-md active:scale-[1.01]"
          @click="handleFetchTodos"
        >
          {{ isFetching ? "Fetching..." : "Fetch sample todos" }}
        </button>
      </div>
      <div class="mt-8" v-if="todos.length > 0">
        <h4 class="text-lg">Your todos</h4>
        <TodoList :todos="todos" @check-todo="checkTodo" @delete-todo="deleteTodo" />
      </div>
    </div>
  </main>
</template>
