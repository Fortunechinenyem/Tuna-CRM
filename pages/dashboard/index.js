"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import RequireSubscription from "@/app/components/RequireSubscription";

import LogoutButton from "@/app/components/LogoutButton";
import AuthGuard from "@/app/components/AuthGuard";
import ManageSubscription from "@/app/components/MangeSubscription";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    if (!user) return;

    async function fetchSubscription() {
      const docRef = doc(db, "subscriptions", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setSubscription(docSnap.data());
    }

    fetchSubscription();
  }, [user]);

  useEffect(() => {
    if (router.query.session_id && user) {
      async function saveSubscription() {
        await setDoc(doc(db, "subscriptions", user.uid), { status: "active" });
        setSubscription({ status: "active" });
      }
      saveSubscription();
    }
  }, [router.query.session_id, user]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Redirecting to login...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user?.displayName || "User"}!
      </h1>
      <p>Subscription Status: {subscription?.status || "Not Subscribed"}</p>
    </div>
    // <AuthGuard>
    //   <div className="flex min-h-screen bg-gray-100">
    //     <Sidebar />
    //     <div className="flex-1">
    //       <Header />
    //       <RequireSubscription user={user} subscription={subscription}>
    //         <div className="p-6">
    //           <h1 className="text-2xl font-bold">
    //             Welcome, {user?.displayName || "User"}!
    //           </h1>
    //           <p>
    //             Subscription Status: {subscription?.status || "Not Subscribed"}
    //           </p>
    //           <ManageSubscription
    //             userId={user?.uid}
    //             status={subscription?.status}
    //           />
    //           <LogoutButton />
    //         </div>
    //       </RequireSubscription>
    //     </div>
    //   </div>
    // </AuthGuard>
  );
}
