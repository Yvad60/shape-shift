<script lang="ts" setup>
import type { Todo } from "@/types";
const { todos } = defineProps<{ todos: Todo[] }>();

defineEmits<{
  (e: "checkTodo", todoId: string): void;
  (e: "deleteTodo", todoId: string): void;
}>();
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id" class="flex gap-7 py-4 border-b items-enter">
      <input
        :checked="todo.completed"
        @change="$emit('checkTodo', todo.id)"
        type="checkbox"
        class="flex w-5"
      />
      <span class="self-center" :class="{ 'line-through': todo.completed }">{{ todo.task }} </span>
      <button
        class="ml-auto py-1 text-slate-100 p-4 bg-red-400 rounded-md"
        @click="$emit('deleteTodo', todo.id)"
      >
        Delete
      </button>
    </li>
  </ul>
</template>
