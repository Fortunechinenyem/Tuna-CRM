import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserRole } from "@/lib/auth"; // Fetch role from Firestore

export default function withRoleProtection(Component, allowedRoles) {
  return function ProtectedComponent(props) {
    const { user } = useAuth();
    const router = useRouter();
    const [role, setRole] = useState(null);

    useEffect(() => {
      if (!user) {
        router.push("/auth/login");
      } else {
        getUserRole(user.uid).then((userRole) => {
          setRole(userRole);
          if (!allowedRoles.includes(userRole)) {
            router.push("/dashboard");
          }
        });
      }
    }, [user]);

    if (!role) return <p>Loading...</p>;

    return <Component {...props} />;
  };
}
