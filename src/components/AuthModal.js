import { useState } from 'react';

const AuthModal = ({ setShowModal, setIsSignnUp, isSignUp }) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Password Does Not Match')
            }
            console.log('make a post request to our database')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>✖</div>
            <h2>{isSignUp ? 'Create Account' : 'Log In'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmin={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className='secondary-button' type="submit" />
                <p>{error}</p>
            </form>
            <hr />
            <h2>GET THE APP</h2>
        </div>
    )
}

export default AuthModal;