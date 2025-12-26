<template>
  <div
    class="rounded-md border-l-4 shadow-sm"
    :class="{ 'border-gray-900 bg-primary p-4': props.alertType === 'info', 'border-white bg-red-500 p-4 text-white': props.alertType === 'error' }"
    role="alert"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(
  {
    alertType: {
      type: String,
      required: true,
      validator: value => {
        return value === 'info' || value === 'error'
      },
    },
  }
)
</script>
