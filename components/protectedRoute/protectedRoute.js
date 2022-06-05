import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../authContext/authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      router.push("/app-console");
    }
  }, [router, user]);

  return <>{children}</>;
};
export default ProtectedRoute;
