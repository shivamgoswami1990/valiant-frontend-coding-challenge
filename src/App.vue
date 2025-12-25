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
  <main class="container flex h-full items-center justify-center self-center">
    <RepaymentCalculator />
  </main>
  <!-- Main content -->
</template>

<script setup lang="ts">
// import RepaymentCalculator from '@/components/RepaymentCalculator.vue'
import RepaymentCalculator from '@/components/RepaymentCalculator.vue'
</script>

<style>
div#app {
  height: 100dvh;
  display: flex;
  flex-direction: column;
}
</style>
