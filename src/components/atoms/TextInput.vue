<template>
  <div class="relative inline-block">
    <label
      for="textInput"
      class="absolute left-4 top-2/4 -translate-y-1/2"
    >$</label>
    <input
      id="textInput"
      class="ease mx-2 rounded-md border border-gray-300 py-2 pl-5 pr-4 shadow-sm transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      type="text"
      autofocus
      inputmode="numeric"
      pattern="\d*"
      placeholder="Enter loan amount"
      title="Only numbers are allowed. Min 1000. Max 20000000"
      minlength="4"
      maxlength="8"
    />
  </div>
</template>

<script setup lang="ts">
</script>
