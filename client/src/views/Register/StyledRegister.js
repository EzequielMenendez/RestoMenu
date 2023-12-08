import styled from 'styled-components'

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    padding: 20px;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;

        input[type='text'],
        input[type='email'],
        input[type='password'],
        input[type='number'],
        input[type='file'],
        button[type='submit'] {
            width: 100%;
            margin: 5px 0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        input[type='file'] {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
        }

        input[type='file'] + label {
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            width: 100%;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        input[type='file'] + label::after {
            content: attr(data-text);
            display: block;
            font-size: 0;
            color: transparent;
            white-space: nowrap;
            pointer-events: none;
        }

        input[type='file'] + label:hover {
            background-color: #45a049;
        }

        button[type='submit'] {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button[type='submit']:hover {
            background-color: #45a049;
        }
    }

    .image-preview {
        width: 100%;
        margin-top: 10px;
        text-align: center;

        img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }

        button {
            margin-top: 5px;
            padding: 8px 12px;
            background-color: #FF6347;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #FF3E19;
        }
    }

    /* Estilos para los mensajes de error */
    .error-message {
        color: red;
        font-size: 14px;
        margin-top: 5px;
    }
`;