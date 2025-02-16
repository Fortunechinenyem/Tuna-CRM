"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import LogoutButton from "@/app/components/LogoutButton";

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

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (!user)
    return <p className="text-center text-gray-600">Redirecting to login...</p>;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-x-hidden">
        <Header />
        <div className="p-4 md:p-8 flex-1">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2 animate-fade-in-up">
              Welcome, {user?.displayName || "User"}!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up delay-100">
              Here's what's happening with your account today.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8 transition-all hover:shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-900 mb-4">
              Subscription Status
            </h2>
            <p className="text-gray-600">
              Your current subscription status is:{" "}
              <span
                className={`font-semibold ${
                  subscription?.status === "active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {subscription?.status || "Not Subscribed"}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 transition-all hover:shadow-xl">
              <h3 className="text-lg font-bold text-indigo-900 mb-2">
                Total Tasks
              </h3>
              <p className="text-3xl font-bold text-purple-600">12</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 transition-all hover:shadow-xl">
              <h3 className="text-lg font-bold text-indigo-900 mb-2">
                Completed Tasks
              </h3>
              <p className="text-3xl font-bold text-purple-600">8</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 transition-all hover:shadow-xl">
              <h3 className="text-lg font-bold text-indigo-900 mb-2">
                Pending Tasks
              </h3>
              <p className="text-3xl font-bold text-purple-600">4</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 transition-all hover:shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-900 mb-4">
              Recent Activity
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <p className="text-gray-600">
                  Task "Design Dashboard" completed
                </p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-600">New customer "ABC Corp" added</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-gray-600">Invoice #1234 generated</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-right">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
