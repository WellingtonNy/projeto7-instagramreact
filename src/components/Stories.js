import Story from "./Story";
export default function Stories() {


  const dadosStories = [
    { img: "assets/img/9gag.svg", name: '9gag' },
    { img: "assets/img/meowed.svg", name: "meowed" },
    { img: "assets/img/barked.svg", name: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", name: "wawawicomics" },
    { img: "assets/img/respondeai.svg", name: "respondeai" },
    { img: "assets/img/filomoderna.svg", name: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", name: "memeriagourmet" }];


  return (
    <div class="stories">
      {dadosStories.map((Sto) => <Story imagem={Sto.img} nome={Sto.name} />)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}