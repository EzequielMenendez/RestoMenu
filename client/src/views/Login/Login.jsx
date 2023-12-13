import { useForm } from 'react-hook-form'

const Login = ()=>{

    const {register, handleSubmit, formState:{errors}} = useForm()

    return (
        <div>
            <p>Login</p>
            <form>
                <input type="email" placeholder="Email" {...register('email', {required: 'Email is required',pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: 'Invalid email address',},})}/>
                {errors.email ? (
                    <p className='error-message'>
                    {errors.email.type === 'required'
                    ? 'Email is required'
                    : errors.email.type === 'pattern'
                    ? 'Invalid email address'
                    : null}
                    </p>
                ) : null}

                <input type="password" placeholder="Password" {...register('password', {required: 'true', minLength: 6})}/>
                {errors.password?.type === 'required' ? (
                    <p>password is required</p>
                ) : errors.password?.type === 'minLength' ? (
                    <p>Password must be at least 6 characters</p>
                ) : null}

                <button type="sumbit">Sing In</button>
            </form>
        </div>
    )
}

export default Login