<script setup lang="ts">
let currDate = new Date();
let year = currDate.getFullYear();
let month = currDate.getMonth();
let myMonth = "";
switch (month) {
  case 0:
    myMonth = "January";
    break;
  case 1:
    myMonth = "February";
    break;
  case 2:
    myMonth = "March";
    break;
  case 3:
    myMonth = "April";
    break;
  case 4:
    myMonth = "May";
    break;
  case 5:
    myMonth = "June";
    break;
  case 6:
    myMonth = "July";
    break;
  case 7:
    myMonth = "August";
    break;
  case 8:
    myMonth = "September";
    break;
  case 9:
    myMonth = "October";
    break;
  case 10:
    myMonth = "November";
    break;
  case 11:
    myMonth = "December";
    break;
}
let date = currDate.getDate();
let day = currDate.getDay();
let myDay = "";
switch (day) {
  case 0:
    myDay = "Sunday";
    break;
  case 1:
    myDay = "Monday";
    break;
  case 2:
    myDay = "Tuesday";
    break;
  case 3:
    myDay = "Wednesday";
    break;
  case 4:
    myDay = "Thursday";
    break;
  case 5:
    myDay = "Friday";
    break;
  case 6:
    myDay = "Saturday";
    break;
}
let dateString = `${myDay}, ${myMonth} ${date}`;
</script>

<template>
  <div class="m-8 flex flex-col items-center gap-8">
    <div class="flex flex-col items-center gap-2">
      <h1 class="text-3xl">Welcome, Artur</h1>
      <h2 class="">{{ dateString }}</h2>
    </div>
    <div class="container grid grid-cols-2 gap-4">
      <div
        class="col-span-2 rounded-lg border border-neutral-700 bg-neutral-800 p-4"
      >
        test
      </div>
      <div class="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
        test
      </div>
      <div class="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
        test
      </div>
    </div>
  </div>
</template>
