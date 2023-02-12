import Story from "./Story"
export default function Stories() {


  const dadosStories = [
    { imagemStories: "assets/img/9gag.svg", nomeStories: '9gag' },
    { imagemStories: "assets/img/meowed.svg", nomeStories: "meowed" },
    { imagemStories: "assets/img/barked.svg", nomeStories: "barked" },
    { imagemStories: "assets/img/nathanwpylestrangeplanet.svg", nomeStories: "nathanwpylestrangeplanet" },
    { imagemStories: "assets/img/wawawicomics.svg", nomeStories: "wawawicomics" },
    { imagemStories: "assets/img/respondeai.svg", nomeStories: "respondeai" },
    { imagemStories: "assets/img/filomoderna.svg", nomeStories: "filomoderna" },
    { imagemStories: "assets/img/memeriagourmet.svg", nomeStories: "memeriagourmet" }]


  return (
    <div class="stories">
      {dadosStories.map((Sto) => <Story imagem={Sto.imagemStories} nome={Sto.nomeStories} />)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}