

export default function AuthenticationMenu(){

    const isAuthenticated = true;
    const RenderElement = isAuthenticated ? AuthenticatedUser : AuthenticationLinks;

    const styles = {
        padding: '10px 15px',
        backgroundColor: '#D9D9D9',
        borderRadius: '5px',
        fontWeight: '700',
        fontSize: '.9rem',
        color: '#033D00'
    }

    return <RenderElement />
}

function AuthenticatedUser() {
    return(
        <div className='authUser'>
            <button>
                <img src="https://img.freepik.com/free-photo/young-african-man-using-mobile-phone-isolated-against-white-wall_231208-611.jpg?w=2000&t=st=1696248044~exp=1696248644~hmac=71dcf5fadc8e6fd38573eaaf56a7bc0ac4556f99cc782211898b4d6908d8605d"
                     alt="Uthman Muhammad" width={50} />
                <span>Usman</span>
            </button>
        </div>
    )
}

function AuthenticationLinks() {
    return (
        <div className="auth-menu" style={{display: 'flex', gap: '10px'}}>
            <a style={styles} href="/auth/signin">Sign In</a>
            <a style={styles} href="/auth/register">Join Us</a>
        </div>
    )
}