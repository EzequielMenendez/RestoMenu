import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { singUp } from '../../redux/actions';

const Register = ()=>{

    const dispatch = useDispatch()

    const {register, handleSubmit, formState:{errors}} = useForm()
    const [urlImage, setUrlImage] = useState(null)
    const inputRef = useRef(null)

    const onSubmit = (values) =>{
        if(urlImage){
            values.image = urlImage
            dispatch(singUp(values))
        }
    }

    const changeImage = async(e) => {
        const file = e.target.files[0]

        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'Presents_react')

        try {
            const res = await axios.post("https://api.cloudinary.com/v1_1/dzy1ovaxq/image/upload", data)
            console.log(setUrlImage)
            setUrlImage(res.data.secure_url)
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    const onDelete = () => {
        setUrlImage(null)
        if (inputRef.current) {
            inputRef.current.value = '';
        }
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

                <input type="file" accept='image/*' onChange={changeImage} ref={inputRef} className="file-input"/>
                {urlImage && (
                    <div>
                        <img src={urlImage}/>
                        <button onClick={onDelete}>Eliminar Imagen</button>
                    </div>
                )}
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register