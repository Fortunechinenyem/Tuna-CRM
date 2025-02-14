import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  Timestamp,
  getDocs,
  query,
  orderBy,
  doc,
  setDoc,
} from "firebase/firestore";

/**
 * Adds a user to the Firestore database.
 *
 * @param {Object} user
 * @returns {Promise<void>}
 */
export const addUserToFirestore = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);

    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || "",
      email: user.email,
      uid: user.uid,
    });

    console.log("User successfully added to Firestore");
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
    throw error;
  }
};

export function listenToDeals(setDeals) {
  return onSnapshot(collection(db, "deals"), (snapshot) => {
    const deals = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setDeals(deals);
  });
}

export async function addTask({
  title,
  description,
  dueDate,
  priority,
  assignee,
}) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      title,
      description,
      dueDate: Timestamp.fromDate(new Date(dueDate)),
      priority,
      status: "pending",
      assignee,
      createdAt: Timestamp.now(),
    });
    console.log("Task created with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding task: ", e);
  }
}

export async function fetchTasks() {
  try {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return tasks;
  } catch (e) {
    console.error("Error fetching tasks: ", e);
    return [];
  }
}

export function listenToTasks(setTasks) {
  return onSnapshot(collection(db, "tasks"), (snapshot) => {
    const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setTasks(tasks);
  });
}
