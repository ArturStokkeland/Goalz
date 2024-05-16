<script setup lang="ts">
import { ref } from "vue";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { columns } from "@/components/tables/tasks/columns.ts";
import TaskTable from "@/components/tables/tasks/TaskTable.vue";
import tasks from "@/objects/tasks";
import Button from "@/components/ui/button/Button.vue";
import Textarea from "@/components/ui/textarea/Textarea.vue";

const dialogIsOpen = ref(false);
</script>

<template>
  <div class="m-8 flex flex-col items-center gap-8">
    <div class="flex flex-col items-center gap-2">
      <h1 class="text-3xl">{{ $route.params.projectName }}</h1>
    </div>
    <div
      class="container flex flex-col gap-4 rounded-lg border border-neutral-700 bg-neutral-800 p-4"
    >
      <TaskTable :columns="columns" :data="tasks" />
      <Button
        @click="dialogIsOpen = true"
        class="w-fit self-end border border-neutral-700 bg-indigo-800 hover:bg-indigo-700"
        >Add new task</Button
      >
    </div>
  </div>

  <Dialog v-model:open="dialogIsOpen">
    <DialogContent class="border-neutral-700 bg-neutral-800">
      <DialogHeader>
        <DialogTitle class="text-neutral-200">Create a new task</DialogTitle>
        <DialogDescription class="text-neutral-200">
          Please enter the details for your new task
        </DialogDescription>
      </DialogHeader>
      <Input
        placeholder="My Awesome Project"
        class="border-neutral-700 placeholder:text-neutral-400 focus:border-neutral-600 focus:bg-neutral-700 focus:outline-none"
      />
      <Textarea
        placeholder="My Awesome Project"
        class="border-neutral-700 placeholder:text-neutral-400 focus:border-neutral-600 focus:bg-neutral-700 focus:outline-none"
      ></Textarea>
      <DialogFooter>
        <Button @click="" type="submit">Create</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
