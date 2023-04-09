export function form_login_validate({username,password},setError, action) {
    const errors = {};
    if (action === "username"){
        errors[action] =  email_validate(username);
        setError((current) => ({...current, ...errors}));
    }
    if (action === "password") {
        errors[action] = password_validate(password);
        setError((current) => ({...current, ...errors}));
    }
}

function email_validate(email){
    const resp = []
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/.test(email) && resp.push("Email ingresado no coinside con el formato estandar de emails ejemp: miemail@domain.com");
    email > 36 && resp.push('Email ingresado exede la longitud permitida');
    return resp;
}

function password_validate(password) {
    const resp= [];
    !/[a-z]/.test(password) && resp.push("La contraseña debe tener minusculas");
    !/[A-Z]/.test(password) && resp.push("La contraseña debe tener maysculas");
    !/[0-9]/.test(password) && resp.push("La contraseña debe tener numeros");
    !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) && resp.push("La contraseña debe tener almenos un caracter especial");
    password.length < 6 && resp.push("La longitud de contraseña debe tener al menos 6 caracteres");
    password.length >= 10 && resp.push("La longitud de contraseña no debe exeder 10 caracteres");
    return resp;
}