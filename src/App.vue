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
    <div
      class="mb-4 border-l-4 border-gray-900 bg-primary p-4"
      role="alert"
    >
      <p class="font-medium">
        Using the loan repayment form
      </p>
      <ul class="mt-2 list-inside list-disc text-sm">
        <li>All fields below are required</li>
        <li>Min loan amount is 1,000 (one thousand)</li>
        <li>Max loan amount is $20,000,000 (twenty million)</li>
      </ul>
    </div>
    <!-- Info alert row -->

    <RepaymentCalculator />
  </main>
  <!-- Main content -->
</template>

<script setup lang="ts">
// import RepaymentCalculator from '@/components/RepaymentCalculator.vue'
import RepaymentCalculator from '@/components/organisms/RepaymentCalculator.vue'
</script>

<style>
div#app {
  height: 100dvh;
  display: flex;
  flex-direction: column;
}
</style>
