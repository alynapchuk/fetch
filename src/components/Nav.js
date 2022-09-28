import fetchlogo from '../images/fetchlogo.png'
import doglogo from '../images/doglogo.png'

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" alt="dog" src={minimal ? doglogo : fetchlogo} />
            </div>
            {!authToken && !minimal && < button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}>Log In</button>
            }
        </nav >
    )
}

export default Nav;