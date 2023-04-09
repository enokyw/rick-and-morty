import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../../redux/actions";
import { SearchDiv } from "./searchElement";
import { SearchInput } from "./searchElement";
import { SearchButton } from "./searchElement";


export default function SearchBar() {
   const [id, setId] = useState("");
   const dispatch = useDispatch();
   const state = useSelector(state => state.character);

    const beforeChange = (e) => {
      setId(e.target.value);
    }

    const onSearch = () => {
      const isExist = state.find(finding => finding.id === id);
      if(!isExist) dispatch(addCharacter(id))
      else alert(`Ya existe el personaje con el id ${id}`)
    }
    
    return (
       <SearchDiv >
         <SearchInput onBlur={beforeChange} />
         <SearchButton onClick={onSearch}>Agregar</SearchButton>
       </SearchDiv>
    );
 }
 