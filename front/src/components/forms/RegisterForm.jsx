import { Form } from "react-router-dom";
import { 
    Button,
    ContainerDiv, 
    ContainerImageDiv, 
    ContainerInputDiv, 
    FormDiv, 
    GridContainerDiv, 
    H1, 
    HeaderDiv, 
    ImageDiv, 
    Img, 
    Input, 
    InputDiv, 
    Label, 
    Span } from "./formsElement";


export function Register() {

    return (
        <ContainerDiv>
            <FormDiv>
                <HeaderDiv>
                    <ContainerImageDiv>
                        <ImageDiv>
                            <Img />
                        </ImageDiv>
                    </ContainerImageDiv>
                    <H1>Register</H1>
                    <Span>Registrate para ver Rick and Morty gratis</Span>
                </HeaderDiv>

                <Form>
                    <ContainerInputDiv>
                        <GridContainerDiv>
                            <InputDiv>
                                <Label>Email</Label>
                                <Input/>
                            </InputDiv>
                            <InputDiv>
                                <Label>Phone Number</Label>
                                <Input/>
                            </InputDiv>
                        </GridContainerDiv>
                        <InputDiv>
                            <Label>Password</Label>
                            <Input/>
                        </InputDiv>
                        <InputDiv>
                            <Label>Confirm password</Label>
                            <Input/>
                        </InputDiv>
                    </ContainerInputDiv>
                    <Button>Enviar</Button>
                </Form>
            </FormDiv>
        </ContainerDiv>
    )
}