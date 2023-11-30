import { useForm } from 'react-hook-form'

const Register = ()=>{

    const {register, handleSubmit, formState:{errors}} = useForm()

    const onSubmit = (values) =>{
        values.roles = "restaurant"
    }

    return (
        <div>
            <p>Register</p> 
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type='text' {...register('username', {required: 'true'})} placeholder='username'/>
                {errors.username && <p>Name is required</p>}

                <input
                    type="email"
                    id="email"
                    {...register('email', {
                    required: 'Email is required',
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                    },
                    })}
                    placeholder="Email"
                />
                {errors.email ? (
                    <p>
                    {errors.email.type === 'required'
                    ? 'Email is required'
                    : errors.email.type === 'pattern'
                    ? 'Invalid email address'
                    : null}
                    </p>
                ) : null}

                <input type="password" {...register('password', {required: 'true', minLength: 6})} placeholder='password'/>
                {errors.password?.type === 'required' ? (
                    <p>password is required</p>
                ) : errors.password?.type === 'minLength' ? (
                    <p>Password must be at least 6 characters</p>
                ) : null}

                <input type='text' {...register('location', {required: 'true', maxLength: 20})} placeholder='location'/>
                {errors.location?.type === 'required' ? (
                    <p>location is required</p>
                ) : errors.location?.type === 'maxLength' ? (
                    <p>location cannot be more than 20 characters</p>
                ) : null}

                <input type="number" {...register('contact', {required: true, minLength: 9, maxLength: 15})} placeholder='contact'/>
                {errors.contact?.type === 'required' ? (
                    <p>contact is required</p>
                ) : errors.contact?.type === 'maxLength' ? (
                    <p>contact cannot be more than 20 characters</p>
                ) : errors.contact?.type === 'minLength' ? (
                    <p>contact must be at least 9 characters</p>
                ) : null}
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register