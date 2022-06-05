import Auth from "../components/auth/authentication.js";
import { useAuth } from "../context/authContext/authContext.js";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthConsole() {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      router.push("/app-console");
    }
  }, []);
  return <Auth />;
}
