"use server";
import { revalidatePath } from "next/cache";

import { ref, set, push } from "firebase/database";

import { db } from "@/lib/firebase/firebaseInit";
// formData  = formData object name/value pairs from the form
export async function editAction(prevState, formData) {
  const task_name = formData.get("task");
  const category = formData.get("category");
  const uid = formData.get("uid");

  // call edit task
  return { message: "success" };
}

// Firebase NoSql SQL ....
async function editTask(task) {
  const rootPath = ref(db);

  const key = push(rootPath).key;
  const path = `todos/${key}`;

  try {
    await set(ref(db, path), task);
    return "success";
  } catch (error) {
    return "failure";
  }
}
