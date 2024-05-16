<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { PlusIcon } from "@radix-icons/vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  exists,
  createDir,
  writeTextFile,
  BaseDirectory,
} from "@tauri-apps/api/fs";
import projects from "@/objects/projects";

const router = useRouter();
const dialogIsOpen = ref(false);
const newProjectName = ref("");

async function createProject() {
  if (!newProjectName.value) {
    return;
  }
  if (!(await exists("projects.txt", { dir: BaseDirectory.AppLocalData }))) {
    await writeTextFile("projects.txt", "", {
      dir: BaseDirectory.AppLocalData,
    });
  }
  if (!(await exists("projects", { dir: BaseDirectory.AppLocalData }))) {
    console.log("lol");
    await createDir("projects", { dir: BaseDirectory.AppLocalData });
  }
  if (
    await exists("projects\\" + newProjectName.value + ".txt", {
      dir: BaseDirectory.AppLocalData,
    })
  ) {
    return;
  }

  //add project to client array (render without refresh)
  projects.value.push(newProjectName.value);

  //add project to project list file
  await writeTextFile(
    {
      path: "projects.txt",
      contents: newProjectName.value + "\n",
    },
    { dir: BaseDirectory.AppLocalData, append: true },
  );

  //create project file
  await writeTextFile(
    {
      path: "projects\\" + newProjectName.value + ".txt",
      contents: "",
    },
    { dir: BaseDirectory.AppLocalData },
  );

  dialogIsOpen.value = false;
}
</script>

<template>
  <div class="m-8 flex flex-col items-center gap-8">
    <div class="flex flex-col items-center gap-2">
      <h1 class="text-3xl">Which project are you working on?</h1>
    </div>
    <div class="container grid grid-cols-4 gap-4">
      <div
        v-for="project in projects"
        class="flex aspect-square flex-col items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 p-4 hover:cursor-pointer hover:border-neutral-600 hover:bg-neutral-700"
        @click="router.push(`/tasks/${project}`)"
      >
        {{ project }}
      </div>
      <div
        @click="dialogIsOpen = true"
        class="flex aspect-square flex-col items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 p-4 hover:cursor-pointer hover:border-neutral-600 hover:bg-neutral-700"
      >
        <PlusIcon class="h-24 w-24" />
        <p>Create New Project</p>
      </div>
    </div>
  </div>

  <Dialog v-model:open="dialogIsOpen">
    <DialogContent class="border-neutral-700 bg-neutral-800 sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle class="text-neutral-200">Create New Project</DialogTitle>
        <DialogDescription class="text-neutral-200">
          Please enter a name for your project
        </DialogDescription>
      </DialogHeader>
      <Input
        placeholder="My Awesome Project"
        class="border-neutral-700 placeholder:text-neutral-400 focus:border-neutral-600 focus:bg-neutral-700 focus:outline-none"
        v-model="newProjectName"
        @keyup.enter="createProject"
      />
      <DialogFooter>
        <Button @click="createProject" type="submit">Create</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
