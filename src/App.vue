<template>
  <!-- Header with logo, title -->
  <header class="pointer-events-none flex h-20 justify-center rounded-b-[40px] bg-primary">
    <div class="container flex items-center justify-between px-4">
      <img
        src="@/assets/logo.svg"
        alt="logo"
        width="128"
        height="32"
      >

      <h2 class="mr-auto text-end font-mono text-2xl font-semibold sm:mx-auto">
        Loan repayment calculator
      </h2>
    </div>
  </header>
  <!-- Header with logo, title -->

  <!-- Main content -->
  <main class="container flex h-full flex-col items-center justify-center self-center">
    <!-- Info alert row -->
    <AlertCard
      class="mb-4"
      alert-type="info"
    >
      <p class="font-medium">
        Using the loan repayment form
      </p>
      <ul class="mt-2 list-inside list-disc text-sm">
        <li>All fields below are required</li>
        <li>Min loan amount is $1,000.00 (one thousand)</li>
        <li>Max loan amount is $20,000,000.00 (twenty million)</li>
      </ul>
    </AlertCard>
    <!-- Info alert row -->

    <!-- Repayment calculator and error row -->
    <RepaymentCalculator
      :loading="isApiLoading"
      :disabled="isApiError"
      :api-data="apiData"
    />
    <AlertCard
      v-if="isApiError"
      class="mt-4"
      alert-type="error"
    >
      <p class="font-medium">
        Error loading data
      </p>
      <p class="mt-2 text-sm">
        Something went wrong while fetching data. Please refresh the page and try again.
      </p>
    </AlertCard>
    <!-- Repayment calculator and error row -->
  </main>
  <!-- Main content -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Components
import AlertCard from './components/atoms/AlertCard.vue'
import RepaymentCalculator from './components/organisms/RepaymentCalculator.vue'

const isApiLoading = ref(false)
const isApiError = ref(false)
const apiData = ref([])

onMounted(async () => {
  try {
    isApiLoading.value = true
    apiData.value = await Promise.all([
      (await fetch('http://localhost:5000/loan-purposes')).json(),
      (await fetch('http://localhost:5000/requested-repayment-periods')).json(),
      (await fetch('http://localhost:5000/requested-term-months')).json(),
    ])
  } catch (error) {
    isApiError.value = true
  } finally {
    isApiLoading.value = false
  }
})

</script>

<style>
div#app {
  height: 100dvh;
  display: flex;
  flex-direction: column;
}
</style>
