import { createMemoryHistory, createRouter } from "vue-router";

import DashboardView from "@/views/DashboardView.vue";
import TasksView from "@/views/TasksView.vue";
import ProjectView from "@/views/ProjectView.vue";
import HabitsView from "@/views/HabitsView.vue";

const routes = [
  { path: "/", component: DashboardView },
  { path: "/tasks", component: TasksView },
  { path: "/tasks/:projectName", component: ProjectView },
  { path: "/habits", component: HabitsView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
