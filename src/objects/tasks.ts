declare global {
  interface Task {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  }
}

let tasks = [
  {
    id: "1",
    amount: 100,
    status: "pending",
    email: "",
  },
  {
    id: "2",
    amount: 200,
    status: "processing",
    email: "",
  },
  {
    id: "3",
    amount: 300,
    status: "success",
    email: "",
  },
  {
    id: "4",
    amount: 400,
    status: "failed",
    email: "",
  },
];

export function addTask() {
  //Create task object
  //Add task object to tasks array
  //save task array to local storage
}

export default tasks;
