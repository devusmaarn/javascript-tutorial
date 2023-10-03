import Navbar from "./Layouts/Navbar.jsx";
import Header from "./Layouts/Header.jsx";
import Descriptions from "./Layouts/Descriptions.jsx";
import Services from "./Layouts/Services.jsx";
import Subscribe from "./Layouts/Subscribe.jsx";
import CustomerReviews from "./Layouts/CustomerReviews.jsx";
import Footer from "./Layouts/Footer.jsx";
import Section from "./Components/Section.jsx";

export default function App(){
    return(
        <>
            <Section>
                <Navbar />
            </Section>
            <Header />
            <Descriptions />
            <Services />
            <Subscribe />
            <CustomerReviews />
            <Footer />
        </>
    )
}