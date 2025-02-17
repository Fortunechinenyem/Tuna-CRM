import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withRole(Component, allowedRoles) {
  return function ProtectedComponent(props) {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && (!user || !allowedRoles.includes(role))) {
        router.push("/dashboard");
      }
    }, [user, role, loading]);

    if (loading || !user) return <p>Loading...</p>;

    return <Component {...props} />;
  };
}
