import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { 
   characterNavigate, 
   deleteCharacter
} from "../../redux/actions";

import Card from "../card/Card";
import { CardsDiv } from "./cardsElement";


export function Cards() {
   const { character, page } = useSelector(state => state);
   const dispatch = useDispatch();
   const {pathname} = useLocation();
   const mapper = character.length === 0? "page": "custom";


   const onClose = (id) => {
      dispatch(deleteCharacter(id));
   }

   useEffect(() => {
      pathname === "/cards" && dispatch(characterNavigate());
   },[pathname,dispatch])

   return <CardsDiv >
      {(mapper==='page'?page:character).map((person,index) => <Card 
      key={`${person.name}-${person.id}-${index}`}
         mapper={mapper} /* for hidden close button */
         id={person.id}
         name={person.name}
         species={person.species}
         gender={person.gender}
         image={person.image}
         onClose={onClose} />)}
   </CardsDiv>;
}
