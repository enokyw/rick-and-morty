import { useLocation, NavLink } from "react-router-dom";
import { Ul, NavDiv, Nav, Li, LinkButton } from "./navBarElement";

import SearchBar from "../searchbar/SearchBar";



export function NavContent () {
	const { pathname } = useLocation();

    return <>
        <NavDiv>
            <Nav>
                <MenuList />
               {pathname === "/cards" && <SearchBar />}
            </Nav>
        </NavDiv>
    </>
}


function MenuList() {
    const urls = [
      ['/',"Home"],
      ["/cards","Cards"],
      ["/about","About"],
      ["/accounts/login", "Login"],
      ["/accounts/register","Register"],
    ]

	
    return (
      <Ul>
        {
          urls.map((url, index) => (
            <Li key={`${url[1]}-${index}`}>
              <NavLink to={url[0]}>
                <LinkButton>{url[1]}</LinkButton>
              </NavLink>
            </Li>
          ))
        }
      </Ul>
    );
}