import admin from "firebase-admin";

// Prevent reinitialization in case of hot reloading
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();
const auth = admin.auth();

/**
 * Fetch user role from Firestore (Server-side)
 */
export async function getUserRole(uid) {
  try {
    const userDoc = await db.collection("users").doc(uid).get();
    return userDoc.exists ? userDoc.data().role : "user"; // Default: "user"
  } catch (error) {
    console.error("Error fetching user role:", error);
    return "user"; // Fallback
  }
}

export { db, auth };
