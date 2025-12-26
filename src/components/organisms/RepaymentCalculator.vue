<template>
  <form
    class="grid min-w-64 grid-flow-row gap-4 rounded-md p-8 shadow-lg hover:shadow-xl"
    @submit.prevent
  >
    <!-- First row -->
    <div class="justify-self-center">
      <span>I need</span>
      <TextInput />

      <span>for</span>
      <SelectInput />
    </div>
    <!-- First row -->

    <!-- Second row -->
    <div class="justify-self-center">
      <span>repaid</span>
      <SelectInput />

      <span>over</span>
      <SelectInput />
    </div>
    <!-- Second row -->

    <hr class="my-2 border-gray-300" />

    <!-- Third row -->
    <div class="justify-self-center">
      <h3 class="text-center text-base font-medium text-green-700">
        <span class="text-lg">$1384</span> monthly repayments
      </h3>
      <h3 class="mt-2 text-center text-base">
        <span class="text-lg font-medium">$33216</span> total repayments
      </h3>
    </div>
    <!-- Third row -->
  </form>
</template>

<script setup lang="ts">
import TextInput from '../atoms/TextInput.vue'
import SelectInput from '../atoms/SelectInput.vue'
</script>
