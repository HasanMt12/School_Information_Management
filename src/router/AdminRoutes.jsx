import { useState, useEffect } from "react";

import axios from "axios";
import { useAuth } from "../context/auth";
import Spinner from "../Shared/Spinner";
import AdminLayoute from "../Layouts/AdminLayoutes";


export default function AdminRoutes() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
console.log(ok)
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("https://insented.vercel.app/auth/admin-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <AdminLayoute /> : <Spinner path=""/>;
}