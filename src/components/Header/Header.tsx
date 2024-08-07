import { Avatar, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext/LoginContext";
import "./Header.css";
import { Link } from "react-router-dom";

const registerStyles = {
    bg: "#edf2f7",
    color: "#18181c",
    fontFamily: "Roboto",
    _hover: {
        bg: "#bcc0c3"
    }
}

const loginStyles = {
    bg: "#18181c",
    color: "#fff",
    fontFamily: "Roboto",
    _hover: {
        bg: "#383842"
    }
}

export function Header() {
    const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

    const handleLogOut = () => {
        setLoggedIn(false);
        sessionStorage.removeItem("userId");
    }

    return (
        <header className="header">
            <h1 className="header__title" ><Link to="/">NomadNation</Link ></h1>
            <div className="header__buttons">
                {
                    isLoggedIn
                        ? (
                            <>
                                <div className="header__userinfo">
                                    <Avatar src={sessionStorage.getItem('userProfilePic') as string} />
                                    <h2 className="header__userinfo-username">{sessionStorage.getItem('userName')}</h2>
                                </div>
                                <Button
                                    {...loginStyles}
                                    onClick={handleLogOut}
                                >Cerrar sesión</Button>
                            </>
                        )
                        : (
                            <>
                                <Link to="/login">
                                    <Button {...loginStyles}>Iniciar sesión</Button>
                                </Link>
                                <Link to="/register">
                                    <Button {...registerStyles}>Registrarse</Button>
                                </Link>
                            </>
                        )
                }
            </div>
        </header>
    )
}