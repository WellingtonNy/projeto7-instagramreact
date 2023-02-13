import Logo from "./Logo";
import Pesquisa from "./Pesquisa";
import Icones from "./Icones";
import IconesMobile from "./IconesMobile";

export default function NavBar(){
    return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <Pesquisa />
        <Icones />
        <IconesMobile /> 
      </div>
    </div>
    )
};