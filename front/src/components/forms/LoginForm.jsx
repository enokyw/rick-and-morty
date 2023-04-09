import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { useRickAndMorty } from "../../context/ContextPrivider";
import { 
    Button,
    ContainerDiv, 
    ContainerImageDiv, 
    ContainerInputDiv, 
    FormDiv, 
    H1, 
    HeaderDiv, 
    ImageDiv, 
    Img, 
    Input, 
    InputDiv, 
    Label,
    SpanError,
    Span } from "./formsElement";
import { form_login_validate } from "./validates";
import logo from "../../assets/images/logoRM.png";


export function Login() {
    const [userData, setUserData] = useState({username:"",password:""});
    const [errors, setErrors] = useState({username:"", password:""});
    const [success, setSuccess] = useState({username:"",password:""});

    /******************** account - manager **********************/
    const { authenticate } = useRickAndMorty();
    /******************* end account - manager *******************/


    const handleInputChange = (event) => {
        setUserData((currentData) => ({...currentData,[event.target.name]: event.target.value}));
        form_login_validate({...userData,[event.target.name]: event.target.value},setErrors,event.target.name)
    }

    const handleSubmit = () => {
        authenticate(userData);
    }

    useEffect(() => {
        (typeof errors.username === "object" && errors.username.length === 0) && setSuccess((current) => ({...current, username: "success"}));
        (typeof errors.password === "object" && errors.password.length === 0) && setSuccess((current) => ({...current, password: "success"}));
    },[errors.username, errors.password])

    return (
        <ContainerDiv>
            <FormDiv onSubmit={handleSubmit}>
                <HeaderDiv>
                    <ContainerImageDiv>
                        <ImageDiv>
                            <Img src={logo}/>
                        </ImageDiv>
                    </ContainerImageDiv>
                    <H1>login</H1>
                    <Span>use your account login</Span>
                </HeaderDiv>

                <Form>
                    <ContainerInputDiv>
                        <InputDiv>
                            <Input type="text" name="username" id="username" autoComplete="none"
                                onChange={handleInputChange}
                                className={errors.username.length>0?"warnig": success.username} />
                            <Label htmlFor="username">User Name</Label>
                            <SpanError>{errors.username.length>0 && errors.username[0]}</SpanError>
                        </InputDiv>
                        <InputDiv>
                            <Input type="password" name="password" id="password" autoComplete="none"
                                onChange={handleInputChange}
                                className={errors.password.length>0? "warning": success.password} />
                            <Label htmlFor="password">Password</Label>
                            <SpanError>{errors.password.length>0 && errors.password[0]}</SpanError>
                        </InputDiv>
                    <Button>Enviar</Button>
                    </ContainerInputDiv>
                </Form>
            </FormDiv>
        </ContainerDiv>
    )
}