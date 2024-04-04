import emailjs from 'emailjs-com';

const sendEmailOrganizer = (toEmail, userName) => {
    const publicKey = 'ZE12eo5TuTA_Ysn9d'; // antes se pedia el userId en emailJs
    const serviceID = 'service_100l8lk'; // 
    const templateID = 'template_4c6pybj'; 

    emailjs.init(userID);

    const templateParams = {
        to_email: toEmail, // Variable para poner el correo del cliente
        user_name: userName, // Variable para poner el nombre del cliente
        from_name: 'EmailJS team',
        message_html: `
            Hola {{user_name}},

            Esperamos que este mensaje te encuentre bien.

            Valoramos tu compromiso y entusiasmo por crear experiencias increíbles para nuestros clientes. Es por eso que queremos invitarte a unirte a nosotros como organizador de eventos.

            Como organizador, tendrás la oportunidad de dar vida a ideas innovadoras, planificar eventos memorables y trabajar en estrecha colaboración con nuestro equipo para ofrecer experiencias únicas y emocionantes.

            Al unirte a nosotros, te beneficiarás de:
            - Acceso a nuestra red de proveedores y recursos para la planificación de eventos.
            - Apoyo y orientación continuos de nuestro equipo experimentado.
            - Oportunidades de crecimiento profesional y desarrollo de habilidades en el campo de la organización de eventos.

            Estamos seguros de que tu talento y pasión por los eventos serán una adición valiosa a nuestro equipo. Esperamos con interés tener la oportunidad de colaborar contigo y crear momentos inolvidables juntos.

            Por favor, háznos saber tu interés en esta oportunidad y estaremos encantados de discutir más detalles contigo.

            ¡Esperamos con entusiasmo dar la bienvenida a un nuevo organizador estrella a nuestro equipo!

            Saludos cordiales,
            EmailJS team
        `,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
            console.log('Funciona Xd', response);
        })
        .catch((error) => {
            console.error('Error al enviar el correo:', error);
        });
};

export default sendEmailOrganizer;
