<template>
  <form
    class="relative grid min-w-64 grid-flow-row gap-4 rounded-md p-8 shadow-lg hover:shadow-xl"
    novalidate
    @submit.prevent
  >
    <!-- Loading overlay -->
    <div
      v-if="props.loading"
      class="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black opacity-75"
    >
      <!-- Loading Spinner -->
      <div class="size-10 animate-spin rounded-full border-y-4 border-blue-500" />
      <p class="mt-4 text-sm text-white">
        Please wait while form data is loading...
      </p>
    </div>
    <!-- Loading overlay -->

    <!-- First row -->
    <div class="justify-self-center">
      <span>I need</span>
      <TextInput
        v-model="loanAmountInputModel"
        class="ml-2"
        :loading="props.loading"
        :disabled="props.disabled"
        :has-validation-error="isLoanAmountInputError"
        @input="onDebouncedTextInput"
      />

      <span class="mx-2">for</span>
      <SelectInput
        v-model="loanPurposeInputModel"
        :loading="props.loading"
        :disabled="props.disabled"
        placeholder-text="Select a loan purpose"
        :options="loanPurposeInputOptions"
        text-key="label"
      />
    </div>
    <!-- First row -->

    <!-- Second row -->
    <div class="justify-self-center">
      <span>repaid</span>
      <SelectInput
        v-model="repaymentPeriodsInputModel"
        :loading="props.loading"
        :disabled="props.disabled"
        class="ml-2"
        placeholder-text="Select a repayment period"
        :options="repaymentPeriodsInputOptions"
        text-key="label"
      />

      <span class="mx-2">over</span>
      <SelectInput
        v-model="loanTermInputModel"
        :loading="props.loading"
        :disabled="props.disabled"
        placeholder-text="Select a loan term"
        :options="loanTermInputOptions"
        text-key="label"
      />
    </div>
    <!-- Second row -->

    <hr class="my-2 border-gray-300" />

    <!-- Third row -->
    <div class="justify-self-center">
      <h3 class="text-center text-base font-medium text-green-700">
        <span class="text-lg">{{ computedMonthlyRepayments.eachRepayment }}</span> monthly repayments
      </h3>
      <h3 class="mt-2 text-center text-base">
        <span class="text-lg font-medium">{{ computedMonthlyRepayments.totalRepayments }}</span> total repayments
      </h3>
    </div>
    <!-- Third row -->
  </form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

// Components
import TextInput from '../atoms/TextInput.vue'
import SelectInput from '../atoms/SelectInput.vue'

// Composables
import debounce from '../../composables/useDebounce'
import { PMT, checkIfValidNumber, convertNumberToCurrency } from '../../composables/usePMT'

const props = defineProps(
  {
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
    apiData: {
      type: Array,
      required: true,
      default: () => {},
    },
  }
)

const loanAmountInputModel = ref('')
const isLoanAmountInputError = ref(false)
const onDebouncedTextInput = debounce(() => {
  // Validate the debounced text input to check if it's an integer
  if (checkIfValidNumber(loanAmountInputModel.value)) {
    isLoanAmountInputError.value = !(Number(loanAmountInputModel.value) >= 1000 && Number(loanAmountInputModel.value) <= 20 * 1000 * 1000)
  } else {
    isLoanAmountInputError.value = true
  }
}, 500)

const loanPurposeInputModel = ref('')
const loanPurposeInputOptions = ref([])

const repaymentPeriodsInputModel = ref('')
const repaymentPeriodsInputOptions = ref([])

const loanTermInputModel = ref('')
const loanTermInputOptions = ref([])

const computedMonthlyRepayments = computed(() => {
  const annualRate = loanPurposeInputOptions.value?.find(loanPurposeOption => loanPurposeInputModel.value === loanPurposeOption.label)?.annualRate ?? 0
  const periodsPerYear = repaymentPeriodsInputOptions.value?.find(repaymentPeriodOption => repaymentPeriodsInputModel.value === repaymentPeriodOption.label)?.value ?? 0
  const totalPeriods = loanTermInputOptions.value?.find(loanTermOption => loanTermInputModel.value === loanTermOption.label)?.value ?? 0

  const eachRepayment = -1 * PMT(
    annualRate / periodsPerYear,
    totalPeriods,
    !isLoanAmountInputError.value ? loanAmountInputModel.value : 0
  )

  return {
    eachRepayment: checkIfValidNumber(eachRepayment) ? convertNumberToCurrency(Math.ceil(eachRepayment)) : convertNumberToCurrency(0),
    totalRepayments: checkIfValidNumber(eachRepayment) ? convertNumberToCurrency(Math.ceil(eachRepayment * totalPeriods)) : convertNumberToCurrency(0),
  }
})

// Watch for the api data to show through the props
watch(() => props.apiData, async (apiData) => {
  loanPurposeInputOptions.value = (Array.isArray(apiData[0]) ? apiData[0] : []) ?? []
  repaymentPeriodsInputOptions.value = (Array.isArray(apiData[1]) ? apiData[1] : []) ?? []
  repaymentPeriodsInputOptions.value = (Array.isArray(apiData[1]) ? apiData[1] : []) ?? []
  loanTermInputOptions.value = (Array.isArray(apiData[2]) ? apiData[2] : []) ?? []
})
</script>
