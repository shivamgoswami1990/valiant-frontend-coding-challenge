/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} func The function to debounce.
 * @param {number} delay The number of milliseconds to wait.
 * @returns {Function} Returns the new debounced function.
 */
export default function debounce (func, delay = 300) {
  let timeoutId

  // Return a new function that captures the 'this' context and arguments
  return function (...args) {
    const context = this // Preserve the correct 'this' context

    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Set a new timeout to call the function after the delay
    timeoutId = setTimeout(() => {
      func.apply(context, args) // Use apply to pass the correct 'this' and arguments
    }, delay)
  }
}
