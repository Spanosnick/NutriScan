// components/ProtectedRoute.js
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../firebase";
import {clearUser, setUser} from "../../features/Login/slice/authSlice";
import {Navigate, useNavigate} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    console.log(authState)
    const navigation = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ uid: user.uid, email: user.email }));
                navigation('/app');
            } else {
                dispatch(clearUser());
            }
            
        });

        return () => unsubscribe();
    }, [dispatch]);

    if (!authState.user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
