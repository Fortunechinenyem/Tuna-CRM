import { auth } from "@/lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";

export default async function handler(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decodedToken = await auth.verifyIdToken(token);
    const userId = decodedToken.uid;

    const userDoc = await getFirestore().collection("users").doc(userId).get();
    const userRole = userDoc.exists ? userDoc.data().role : "user";

    if (userRole !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }

    res.status(200).json({ message: "Access granted" });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
