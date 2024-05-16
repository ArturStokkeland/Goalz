<script setup lang="ts">
// import { Button } from "@/components/ui/button";
// import navLinks from "@/objects/navlinks.ts";
// import { ref } from "vue";
// console.log(navLinks);

// const greetMsg = ref("");
// const name = ref("");
import {
  BellIcon,
  HomeIcon,
  ClipboardIcon,
  BackpackIcon,
} from "@radix-icons/vue";
import projects from "@/objects/projects";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-screen w-64">
    <div class="fixed h-full w-64 border-r border-neutral-700 bg-neutral-800">
      <div class="flex flex-col gap-2 p-4">
        <RouterLink
          to="/"
          class="flex items-center gap-4 rounded-md p-2 hover:cursor-pointer hover:bg-neutral-700"
          activeClass="bg-neutral-700"
          ><HomeIcon class="h-6 w-6" />Dashboard</RouterLink
        >
        <RouterLink
          to="/tasks"
          class="flex items-center gap-4 rounded-md p-2 hover:cursor-pointer hover:bg-neutral-700"
          activeClass="bg-neutral-700"
          ><ClipboardIcon class="h-6 w-6" />Tasks</RouterLink
        >
        <RouterLink
          to="/tasks/test"
          class="flex items-center gap-4 rounded-md p-2 hover:cursor-pointer hover:bg-neutral-700"
          activeClass="bg-neutral-700"
          ><BellIcon class="h-6 w-6" />Project</RouterLink
        >
        <RouterLink
          to="/habits"
          class="flex items-center gap-4 rounded-md p-2 hover:cursor-pointer hover:bg-neutral-700"
          activeClass="bg-neutral-700"
          ><BackpackIcon class="h-6 w-6" />Habits</RouterLink
        >
        <RouterLink
          to="/Notes"
          class="flex items-center gap-4 rounded-md p-2 hover:cursor-pointer hover:bg-neutral-700"
          activeClass="bg-neutral-700"
          ><BackpackIcon class="h-6 w-6" />Notes</RouterLink
        >
        <RouterLink
          to="/Goalz"
          class="flex items-center gap-4 rounded-md p-2 hover:cursor-pointer hover:bg-neutral-700"
          activeClass="bg-neutral-700"
          ><BackpackIcon class="h-6 w-6" />Goalz</RouterLink
        >
        <!-- <div
        v-for="link in navLinks"
        class="rounded-md p-2 hover:cursor-pointer hover:bg-neutral-700"
      >
        {{ link.name }}
      </div> -->
      </div>
    </div>
  </div>
</template>
