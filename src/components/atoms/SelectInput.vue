<template>
  <select
    v-model="model"
    class="ease rounded-md border border-gray-300 px-4 py-2 leading-tight shadow-sm transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    :class="{ 'animate-pulse bg-gray-200': props.loading }"
    :disabled="props.loading || props.disabled"
    required
    aria-label="Select a loan purpose"
  >
    <option
      :value="''"
      selected
      disabled
    >
      {{ props.placeholderText }}
    </option>
    <option
      v-for="(option, index) in props.options"
      :key="option + '-' + index"
    >
      {{ option[props.textKey] }}
    </option>
  </select>
</template>

<script setup lang="ts">
const model = defineModel({
  type: String,
  required: true,
})

const props = defineProps(
  {
    placeholderText: {
      type: String,
      required: true,
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
    options: {
      type: Array,
      required: true,
      validator: value => {
        if (Array.isArray(value)) {
          return value.every((v) => typeof v === 'object')
        }
      },
      default: () => [],
    },
    textKey: {
      type: String,
      required: true,
    },
  }
)
</script>
