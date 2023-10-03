import ApplicationIcon from '../../assets/application-logo.svg';

export default function ApplicationLogo() {
    return (
        <a href="/" className="app-logo">
            <img src={ApplicationIcon} alt="Application Logo" />
        </a>
    )
}