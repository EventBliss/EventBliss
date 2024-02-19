import "../assets/css/HomePage.css";
import imageWelcome from "../assets/img/imageWelcome.jpg";
import event from "../assets/img/event.jpg";
import contratame from "../assets/img/contratame.png"
import gestiona from "../assets/img/gestiona.png"
import disfruta from "../assets/img/disfruta.png"

function HomePage() {
  return (
    <div>
      <div className="content-all">
      <div className="content-welcome">
        <img src={imageWelcome} alt="" className="imageWelcome" />
        <div className="text-welcome">
          <h1>
            Event<span>Bills</span>
          </h1>
          <h2>
            ¡Tu evento, nuestra <span className="pasion">pasión</span>!
          </h2>
        </div>
      </div>
        <h1 className="titulo">
          ¿Qué somos para <span>ti</span>?
        </h1>
        <div className="description">
          <div className="content-description">
            <p>
              En Eventi Bills, no simplemente planificamos eventos, creamos
              momentos inolvidables que reflejan tu visión única. Nuestro equipo
              de expertos se dedica a entender tus deseos y transformarlos en
              una realidad cautivadora.
              <br />
              <br />
              Con nosotros, no solo obtienes un servicio de planificación de
              eventos; obtienes un compañero dedicado que se preocupa por cada
              aspecto de tu celebración. Desde bodas mágicas hasta eventos
              corporativos impecables, estamos aquí para hacer que cada momento
              sea especial.
              <br />
              <br />
              Opta por la excelencia, elige Eventi Bills. Tu historia merece ser
              contada con elegancia y perfección. ¡Permítenos ser parte de tu
              próximo gran evento y descubre la diferencia que marcamos en cada
              celebración!
            </p>
          </div>
          <img src={event} alt="" className="ft-description"/>
        </div>
      </div>
      <div className="we-do">
        <div>
            <img src={contratame} alt="" />
            <h1>Contrata</h1>
            <p>Lo que deseas de nosotros</p>
        </div>
        <div>
            <img src={gestiona} alt="" />
            <h1>Gestiona</h1>
            <p>La logistica de tu evento</p>
        </div>
        <div>
            <img src={disfruta} alt="" />
            <h1>Disfruta</h1>
            <p>De lo demas, nos encargamos</p>
        </div>
      </div>
      <div className="slide">
        <h1>hola</h1>
      </div>
    </div>
  );
}

export default HomePage;
