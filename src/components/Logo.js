import LogoImg from "../assets/img/logo.png"

export default function Logo(){
    return(
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src={LogoImg} alt="logo"/>
        </div>
    )
}