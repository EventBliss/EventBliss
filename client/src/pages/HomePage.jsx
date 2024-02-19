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
            ¡Your event, our <span className="pasion">passion</span>!
          </h2>
        </div>
      </div>
        <h1 className="titulo">
          ¿What are we for <span>you</span>?
        </h1>
        <div className="description">
          <div className="content-description">
            <p>
              At EventBills, we don't simply plan events, we create
              unforgettable moments that reflect your unique vision. Our team
              of experts is dedicated to understanding your desires and transforming them into
              a captivating reality.
              <br />
              <br />
              With us, you not only get a planning service
              events; you get a dedicated companion who cares about every
              aspect of your celebration. From magical weddings to events
              impeccable corporate, we are here to make every moment
              be special.
              <br />
              <br />
              Opt for excellence, choose Eventi Bills. Your story deserves to be
              told with elegance and perfection. Let us be part of your
              next big event and discover the difference we make in each
              celebration!
            </p>
          </div>
          <img src={event} alt="" className="ft-description"/>
        </div>
      </div>
      <div className="we-do">
        <div>
            <img src={contratame} alt="" />
            <h1>Hire</h1>
            <p>What you want from us</p>
        </div>
        <div>
            <img src={gestiona} alt="" />
            <h1>Manage</h1>
            <p>The logistics of your event</p>
        </div>
        <div>
            <img src={disfruta} alt="" />
            <h1>Enjoy</h1>
            <p>We take care of the rest</p>
        </div>
      </div>
      <div className="slide">
        <h1>hola</h1>
      </div>
    </div>
  );
}

export default HomePage;
