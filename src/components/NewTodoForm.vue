<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits<{
  (e: "addTodo", todoText: string): void;
}>();

const todoText = ref("");

const handleSubmit = () => {
  emit("addTodo", todoText.value);
  todoText.value = "";
};
</script>

<template>
  <form class="mt-10 flex flex-col items-center" @submit.prevent="handleSubmit">
    <h5 class="text-lg self-start">Add new todo</h5>
    <input
      type="text"
      v-model.trim="todoText"
      placeholder="What are you working on today..."
      class="w-full mt-2 px-4 py-4 outline outline-1 rounded-xl"
    />
    <button
      class="mt-4 bg-green-700 px-12 py-3 font-medium text-white rounded-md active:scale-[1.01]"
    >
      Submit
    </button>
  </form>
</template>
