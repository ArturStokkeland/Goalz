declare global {
  interface NavLink {
    name: string;
    url: string;
    icon: string;
  }
}

const navLinks: NavLink[] = [
  { name: "Dashboard", url: "25", icon: "home" },
  { name: "Tasks", url: "30", icon: "tasks" },
  { name: "Habits", url: "40", icon: "check-square" },
];

export default navLinks;
