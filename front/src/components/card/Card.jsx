import { Link } from "react-router-dom";
import { 
   CardContainer,
   CloseButton, 
   H2name, 
   H2gender, 
   H2specie, 
   Img,
   Button
} from "./cardElement";


export default function Card({ 
   id, 
   name, 
   species, 
   gender, 
   image, 
   onClose,
   mapper
}) {


   return (
      <CardContainer>
         {mapper === "custom" && <CloseButton onClick={() => onClose(id)}>X</CloseButton>}
         <Button>♥</Button>
         <Link to={`/detail/${id}`}>
            <H2name>{name}</H2name>
         </Link>
         <H2specie>{species}</H2specie>
         <H2gender>{gender}</H2gender>
         <Img src={image} alt="" />
      </CardContainer>
   );
}