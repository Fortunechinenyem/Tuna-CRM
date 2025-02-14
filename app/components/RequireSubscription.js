import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RequireSubscription({ user, subscription, children }) {
  const router = useRouter();

  useEffect(() => {
    if (user && !subscription?.status) {
      router.push("/pricing");
    }
  }, [user, subscription, router]);

  return user && subscription?.status ? children : null;
}
