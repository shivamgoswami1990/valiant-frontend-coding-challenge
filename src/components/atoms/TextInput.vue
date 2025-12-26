<template>
  <div class="inline-grid grid-cols-[min-content]">
    <div class="relative inline-block">
      <label
        for="textInput"
        class="absolute left-2 top-2/4 -translate-y-1/2"
        :class="props.hasValidationError ? 'text-red-600' : ''"
      >$</label>
      <input
        id="textInput"
        v-model.trim="model"
        class="ease rounded-md border border-gray-300 py-2 pl-5 pr-4 shadow-sm transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        :class="{ 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500': props.hasValidationError, 'animate-pulse bg-gray-200': props.loading }"
        :disabled="props.loading || props.disabled"
        required
        type="text"
        autofocus
        inputmode="numeric"
        pattern="\d*"
        placeholder="Enter loan amount"
        title="Only numbers are allowed. Min 1000.00. Max 20000000.00"
        :minlength="4"
        maxlength="11"
      />
    </div>

    <span
      v-if="props.hasValidationError"
      class="mt-1 text-xs text-red-600"
    >
      Please enter a value between 1000.00 and 20000000.00
    </span>
  </div>
</template>

<script setup lang="ts">
const model = defineModel({
  type: String,
  required: true,
})

const props = defineProps(
  {
    hasValidationError: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  }
)
</script>
