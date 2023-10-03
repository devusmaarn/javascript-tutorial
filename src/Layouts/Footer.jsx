import ApplicationLogo from "../Components/Navbar/ApplicationLogo.jsx";

export default function Footer(){
    return (
        <footer>
            <section className="footerNavs">
                <ApplicationLogo />
                <ul className="footerMenu">
                    <li className="menuItem menuItem-Heading">services</li>
                    <li className="menuItem"><a href="#" className="menuLink">Airtime/VTU</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Cheap Data Plans</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Cable TV Subscription</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Bill Payment</a></li>
                </ul>
                <ul className="footerMenu">
                    <li className="menuItem menuItem-Heading">support</li>
                    <li className="menuItem"><a href="#" className="menuLink">Pricing</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Documentation</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Api Documentation</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Feedbacks</a></li>
                </ul>
                <ul className="footerMenu">
                    <li className="menuItem menuItem-Heading">company</li>
                    <li className="menuItem"><a href="#" className="menuLink">About</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Blog</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Partners</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Contact</a></li>
                </ul>
                <ul className="footerMenu">
                    <li className="menuItem menuItem-Heading">legal</li>
                    <li className="menuItem"><a href="#" className="menuLink">Terms</a></li>
                    <li className="menuItem"><a href="#" className="menuLink">Privacy</a></li>
                </ul>
            </section>
            <hr/>
            <section className="copyright">
                <p>@copy <a href="/">TelcomNigeria</a> | A Service of BGC Limited. All Rights Reserved</p>
                <ul className="socials">
                    <li className="icon"><a href="#" className="social-link">Facebook</a></li>
                    <li className="icon"><a href="#" className="social-link">Youtube</a></li>
                    <li className="icon"><a href="#" className="social-link">Github</a></li>
                    <li className="icon"><a href="#" className="social-link">Twitter</a></li>
                    <li className="icon"><a href="#" className="social-link">Instagram</a></li>
                </ul>
            </section>
        </footer>
    )
}