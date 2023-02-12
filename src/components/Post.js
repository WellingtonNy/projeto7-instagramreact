export default function Post(props){
    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imgUser} alt={props.nomeUser}/>
                  {props.nomeUser}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>
        
              <div class="conteudo">
                <img src={props.imgPost} alt={props.nomePost}/>
              </div>
        
              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>
        
                <div class="curtidas">
                  <img src={props.imgLike} alt={props.nomeLike}/>
                  <div class="texto">
                    Curtido por <strong>{props.nomeLike}</strong> e <strong>outras {props.numLike.toLocaleString('pt-BR')} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}