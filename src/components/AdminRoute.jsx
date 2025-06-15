import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    };
    checkAdmin();
  }, [user]);

  if (!user) return <Navigate to="/login" />;
  if (isAdmin === null) return <p>Se verifică permisiunile...</p>;
  if (!isAdmin) return <Navigate to="/" />;

  return children;
};

export default AdminRoute;
