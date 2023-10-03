import ApplicationLogo from "../Components/Navbar/ApplicationLogo.jsx";
import NavMenu from "../Components/Navbar/NavMenu.jsx";
import AuthenticationMenu from "../Components/Navbar/AuthenticationMenu.jsx";

export default function Navbar(){

    let styles = {
        backgroundColor: '#F3FDE6',
        padding: '1rem',
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1240px',
            margin: 'auto',
        }
    }

    return (
        <nav style={styles}>
            <div className="wrapper" style={styles.wrapper}>
                <ApplicationLogo />
                <NavMenu />
                <AuthenticationMenu />
            </div>
        </nav>
    )
}