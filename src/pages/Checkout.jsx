export function Checkout() {
  return (
<div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 flex-1">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="" alt="" />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">Test</span>
          <p class="text-lg font-bold">$99</p>
          <span class="delete-button cursor-pointer text-red-500 underline">Delete</span>
        </div>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-between">
      <p class="text-sm font-medium text-gray-900">Total</p>
      <p class="text-2xl font-semibold text-gray-900">$408.00</p>
    </div>
    <button class="mt-4 mb-8 w-full rounded-md bg-green-500 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
</div>


  )
}