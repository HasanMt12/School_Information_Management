import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Shared/Spinner";
import { useAuth } from "../context/auth";
import UserLayoute from "../Layouts/UserLayout";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("https://insented.vercel.app/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <UserLayoute /> : <Spinner />;
}