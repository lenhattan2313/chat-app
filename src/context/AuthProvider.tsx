import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { auth } from "../firebase/config";
interface IUserInfo {
  displayName: string | null;
  email: string | null;
  uid: string;
  photoURL: string | null;
}
const initialUser = {
  displayName: "",
  email: "",
  uid: "",
  photoURL: "",
};
export const AuthContext = createContext<{ user: IUserInfo }>({
  user: initialUser,
});
type AuthProps = PropsWithChildren;
const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<IUserInfo>(initialUser);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user?.displayName || user?.email) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setLoading(false);
        navigate("/");
      } else {
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spinner /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
