<script setup lang="ts">
// import Greet from "./components/Greet.vue";
import Navbar from "./components/Navbar.vue";
import {
  exists,
  readTextFile,
  writeTextFile,
  createDir,
  readDir,
  BaseDirectory,
} from "@tauri-apps/api/fs";
import projects from "@/objects/projects.ts";

async function setupFolderStructure() {
  if (!(await exists("projects", { dir: BaseDirectory.AppLocalData }))) {
    await createDir("projects", { dir: BaseDirectory.AppLocalData });
  }
  if (!(await exists("projects.txt", { dir: BaseDirectory.AppLocalData }))) {
    await writeTextFile("projects.txt", "", {
      dir: BaseDirectory.AppLocalData,
    });
  }
}

async function setupApp() {
  await setupFolderStructure();
  const projectList = await readTextFile("projects.txt", {
    dir: BaseDirectory.AppLocalData,
  });
  projects.value = projectList.split("\n").filter((project) => project !== "");
  console.log(projects.value);
}

setupApp();
</script>

<template>
  <div class="flex">
    <Navbar></Navbar>
    <div
      class="flex-1 bg-gradient-to-b from-[rgba(40,50,80,1)] to-neutral-900 to-70%"
    >
      <RouterView />
    </div>
  </div>
</template>
