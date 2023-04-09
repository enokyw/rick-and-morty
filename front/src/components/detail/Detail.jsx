import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../assets/js/getApi";

import { 
    DetailDiv,
    ContainerDiv,
    ContainerTextDiv,
    H1,
    Span,
    ContainerImageDiv,
    ImageDiv,
    Img
 } from "./detailElement";
 import { Loading } from "../loading/Loading";


export function Detail() {
    const [person, setPerson] = useState({});
    const navigate = useNavigate();
    const { detailId } =useParams();

    useEffect(() => {
        getApi(`/${detailId}`).then(response => {
            if(response.status === 200 && response.data.name) {
                const data = response.data;
                setPerson(data);
            } else {
                alert("No hay personajes con ese ID");
            }
        })
        .catch((error) => {
            alert("No hay personajes con ese ID");
        });
        return setPerson({});
    }, [detailId]);

    return <>
        <DetailDiv>
            <ContainerDiv>
                    {person.name? (<>
                    <ContainerTextDiv>
                        <H1>Name: <strong>{person.name}</strong></H1>
                        <Span>Status: <strong>{person.status}</strong></Span>
                        <Span>Specie: <strong>{person.species}</strong></Span>
                        <Span>Gender: <strong>{person.gender}</strong></Span>
                        <Span>Origin: <strong>{person.origin.name}</strong></Span>
                    </ContainerTextDiv>
                    <ContainerImageDiv>
                        <ImageDiv>
                            <Img src={person.image} alt="" />
                        </ImageDiv>
                    </ContainerImageDiv>
                    </>): <Loading>Loading...</Loading>}
            </ContainerDiv>
            <button onClick={()=>navigate(-1)}>Back</button>
        </DetailDiv>
    </>
}