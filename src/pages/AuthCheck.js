import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export function AuthCheck() {
    const navigate = useNavigate();
    const user_store = useSelector((state) => state.user);

    useEffect(() => {
        if(user_store.user === null){
            navigate('/login');
        }

    }, []);

  return <div>

  </div>
}
