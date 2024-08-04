
import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";

export function useUnauth() {
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate(LOGIN);
        }
    }, [user]);

    return user
}

