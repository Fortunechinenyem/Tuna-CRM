import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  Timestamp,
  getDocs,
  orderBy,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
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

export const addTask = async (userId, taskData) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      ...taskData,
      userId,
      status: "Pending",
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const fetchTasks = (userId, callback) => {
  const q = query(collection(db, "tasks"), where("userId", "==", userId));
  return onSnapshot(q, (snapshot) => {
    const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(tasks);
  });
};

export const updateTask = async (taskId, updatedData) => {
  try {
    const taskRef = doc(db, "tasks", taskId);
    await updateDoc(taskRef, updatedData);
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export function listenToTasks(setTasks) {
  return onSnapshot(collection(db, "tasks"), (snapshot) => {
    const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setTasks(tasks);
  });
}

export const addInvoice = async (userId, invoiceData) => {
  try {
    const docRef = await addDoc(collection(db, "invoices"), {
      ...invoiceData,
      userId,
      status: "Pending",
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding invoice:", error);
  }
};

export const fetchInvoices = async (userId) => {
  try {
    const q = query(collection(db, "invoices"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching invoices:", error);
  }
};

export const updateInvoice = async (invoiceId, updatedData) => {
  try {
    await updateDoc(doc(db, "invoices", invoiceId), updatedData);
  } catch (error) {
    console.error("Error updating invoice:", error);
  }
};

export const deleteInvoice = async (invoiceId) => {
  try {
    await deleteDoc(doc(db, "invoices", invoiceId));
  } catch (error) {
    console.error("Error deleting invoice:", error);
  }
};
