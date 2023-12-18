<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits<{
  (e: "addTodo", todoText: string): void;
}>();

const todoText = ref("");

const resetTodoText = () => {
  todoText.value = "";
};

const handleSubmit = () => {
  emit("addTodo", todoText.value);
  resetTodoText();
};

defineExpose({ todoText, resetTodoText });
</script>

<template>
  <form class="flex flex-col items-center mt-10" @submit.prevent="handleSubmit">
    <h5 class="self-start text-lg">Add new todo</h5>
    <input
      type="text"
      v-model.trim="todoText"
      placeholder="What are you working on today..."
      class="w-full px-4 py-4 mt-2 outline outline-1 rounded-xl"
    />
  </form>
</template>
