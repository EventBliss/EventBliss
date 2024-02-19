import './AboutUs.css'
import { NavBar } from '../Navbar/NavBar';
import EBedificio from '../../assets/img/AboutUs-images/EBedificio.jpg';
import SE2Photo1 from '../../assets/img/AboutUs-images/SE2Photo1.jpg'
import SE2Photo2 from '../../assets/img/AboutUs-images/SE2Photo2.jpg'
// import backghround1 from '../../assets/img/AboutUs-images/backghround1.jpg';


export function AboutUs() {
    return (
        <main>
            <NavBar />

            <div className="container">
                <h2 className='container-title'>About Us</h2>
            </div>
            <section className="first-section">
                <div className='container-info'>
                    <div className='container-text'>
                        <p>At <strong style={{ color: 'white' }}>Event</strong><strong style={{ color: '#7F5F49' }}>Bliss</strong>, we are committed to creating unique and memorable experiences in the world of events. With a passion for innovation and excellence, our team strives to deliver creative and effective solutions that exceed our clients' expectations.</p>
                    </div>
                    <div className='container-info-image'>
                        <img src={EBedificio} alt="" srcset="" />
                    </div>
                </div>
            </section>

            {/* <div className='background-image'>
                <img src={backghround1} alt="" />
            </div> */}

            <section className='second-section'>
                <div className="container-info"> {/* Agregamos esta línea */}
                    <div className='container-text'>
                        <p>Our mission is to transform the way events are planned, organized and enjoyed, offering a versatile and customizable platform that adapts to the individual needs and preferences of each user. We are proud to offer a user-centric approach, where customer satisfaction and convenience are our top priority.</p>
                    </div>
                    <div className='container-info-image'>
                        <img src={SE2Photo1} className='small-iamge' alt="" />
                        <img src={SE2Photo2} className='small-iamge' alt="" />
                    </div>
                </div>
            </section>

            <section className='fourth-section'>
                <div className='container-info'>
                    <div className='container-text'>
                        <p>Join us at EventBliss and discover a new way to experience and enjoy events. We are here to help you turn your ideas into reality and make each event unforgettable.</p>
                        <h4>Thanks for trusting <strong style={{color: "#F6CAA7"}}>us</strong></h4>
                    </div>
                </div>
            </section>
        </main>

    )
}