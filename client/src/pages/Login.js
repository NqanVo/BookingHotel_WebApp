import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../Context/AuthContext";
import { BsKey } from "react-icons/bs";
import { GrView, GrFormViewHide } from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const [info, setInfo] = useState({
        userName: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        try {
            const res = await axios.post('/auth/login', info)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
            navigate("/")
        } catch (error) {
            dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
        }
    }
    return (
        <div className="">
            <div className="max-w-screen-sm flex flex-col gap-2 lg:p-3 xl:p-5 bg-black/10 p-2 bg-gradient-to-br from-[#FFD0FD]/50 to-[#FFEDD8]/50">
                <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                    <AiOutlineUser></AiOutlineUser>
                    <input
                        type="text"
                        placeholder="User name"
                        id="username"
                        className="w-full outline-none bg-transparent"
                        onChange={(e) => setInfo({ ...info, userName: e.target.value })}
                    />
                </div>
                <div className="flex gap-2 items-center py-2 px-4 w-full rounded-lg bg-white/80 shadow-sm">
                    <BsKey></BsKey>
                    <input
                        type={showPass ? 'text' : 'password'}
                        id="password"
                        placeholder="Password"
                        className="w-full outline-none bg-transparent"
                        onChange={(e) => setInfo({ ...info, password: e.target.value })}
                    />
                    {showPass ? (
                        <GrView
                            className="cursor-pointer"
                            onClick={() => setShowPass(!showPass)}
                        ></GrView>
                    ) : (
                        <GrFormViewHide
                            className="cursor-pointer"
                            onClick={() => setShowPass(!showPass)}
                        ></GrFormViewHide>
                    )}
                </div>
                {error && <span className="text-red-500 text-sm">{error.message}</span>}
                <div className="flex gap-2 items-center justify-center">
                    <button className="button flex items-center gap-2 justify-center"
                        disabled={loading}
                        onClick={handleLogin}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
