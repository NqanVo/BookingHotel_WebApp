import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AuthContext } from "../Context/AuthContext";
import { useCookies } from "react-cookie";
const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const { loading, error, dispatch } = useContext(AuthContext);

    const [removeCookie] = useCookies(['access_token']);

    const handleLogout = async (e) => {
        try {
            dispatch({ type: 'LOGOUT', })
            removeCookie('access_token')
            navigate("/")
        } catch (error) {

        }
    }
    return (
        <section className="reponsiveSection flex justify-between items-center">
            <Link to="/">
                <h1 className="font-mainFont text-4xl xl:text-6xl text-black">
                    TingHotel
                </h1>
            </Link>
            {user && (
                <>
                    <span>
                        Hello <b>{user.details.userName}</b>
                    </span>
                    <span onClick={handleLogout} className='button'>logout</span>
                </>
            )}
            {!user && (
                <ul className="flex flex-row items-center gap-2 xl:gap-5">
                    <Link to="/register" className="button">
                        Register
                    </Link>
                    <Link to="/signin" className="button">
                        Sign in
                    </Link>
                </ul>
            )}
            {/* <BiMenuAltRight size={30} className="lg:hidden"></BiMenuAltRight> */}
        </section>
    );
};

export default Navbar;
