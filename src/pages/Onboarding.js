import { useState } from 'react'
import Nav from '../components/Nav';

const Onboarding = () => {

    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        gender_identity: 'male',
        gender_interest: 'female',
        email: '',
        url: '',
        about: '',
        matches: []
    })

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value
        const name = e.target.name
        console.log('value' + value, 'name' + name)
    }

    return (

        <>
            <Nav
                className="dog-logo"
                minimal={true}
                setShowModal={() => { }}
                showModal={false} />
            <div className='onboarding'>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='first_name'>First Name</label>
                        <input
                            id='first_name'
                            type='text'
                            name='first_name'
                            placeholder='First Name'
                            required={true}
                            value={''}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className='multi-input-container'>
                            <input
                                id='dob_day'
                                type='number'
                                name='dob_day'
                                placeholder='DD'
                                required={true}
                                value={''}
                                onChange={handleChange}
                            />
                            <input
                                id='dob_month'
                                type='number'
                                name='dob_month'
                                placeholder='MM'
                                required={true}
                                value={''}
                                onChange={handleChange}
                            />
                            <input
                                id='dob_year'
                                type='number'
                                name='dob_year'
                                placeholder='YYYY'
                                required={true}
                                value={''}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className='multi-input-container'>
                            <input
                                id='male-gender-id'
                                type='radio'
                                name='gender_identity'
                                required={true}
                                value={'male'}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='male-gender-id'>Male</label>
                            <input
                                id='female-gender-id'
                                type='radio'
                                name='gender_identity'
                                required={true}
                                value={'female'}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='female-gender-id'>Female</label>
                            <input
                                id='other-gender-id'
                                type='radio'
                                name='gender_identity'
                                required={true}
                                value={'other'}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='other-gender-id'>Other</label>
                        </div>

                        <label htmlFor='show-gender'>Show Gender on Profile</label>
                        <input
                            id='show-gender'
                            type='checkbox'
                            name='show_gender'
                            onChange={handleChange}
                            checked={false}
                        />

                        <label>Show Me</label>
                        <div className='multi-input-container'>
                            <input
                                id='male-gender-interest'
                                type='radio'
                                name='gender_interest'
                                required={true}
                                value={'male'}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='male-gender-interest'>Male</label>
                            <input
                                id='female-gender-interest'
                                type='radio'
                                name='gender_interest'
                                required={true}
                                value={'female'}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='female-gender-interest'>Female</label>
                            <input
                                id='other-gender-interest'
                                type='radio'
                                name='gender_interest'
                                required={true}
                                value={'other'}
                                onChange={handleChange}
                                checked={false}
                            />
                            <label htmlFor='other-gender-interest'>Other</label>
                        </div>

                        <label htmlFor='about'>About Me</label>
                        <input
                            id='about'
                            type='text'
                            name='about'
                            required={true}
                            placeholder='I like long walks...'
                            value={""}
                            onChange={handleChange} />
                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor='about'>Profile Photo</label>
                        <input
                            type='url'
                            name='url'
                            id='url'
                            onChange={handleChange}
                            required={true} />
                        <div className='photo-container'>

                        </div>
                    </section>

                </form>
            </div>
        </>
    )
}

export default Onboarding;