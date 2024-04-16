export function ConditionsTerms() {
  return (
    <div>
        <div className="grid grid-cols-1 m-10">
            <label id="terminos" className="text-black">Términos y condiciones del evento:</label>
            <textarea id="terminos" name="terminos" rows="6" cols="50" required readOnly>
                Al enviar esta solicitud, acepto participar en el evento y estoy de
                acuerdo con las políticas establecidas por la organización del evento.
                También entiendo que mi participación está sujeta a la disponibilidad de
                cupos y aprobación por parte de los organizadores. Acepto que la
                información proporcionada en este formulario sea utilizada por la
                organización del evento para procesar mi solicitud y comunicarse conmigo
                en relación con el evento. Entiendo que la organización del evento se
                reserva el derecho de realizar cambios en la programación, ubicación o
                detalles del evento, y será responsabilidad del participante estar
                informado de dichos cambios a través de los canales de comunicación
                proporcionados por la organización. Además, me comprometo a cumplir con
                las normas de conducta establecidas durante el evento y a respetar a los
                demás participantes, ponentes y personal del evento. Estoy de acuerdo en
                que la organización del evento no se hace responsable de ningún daño,
                pérdida o lesión que pueda ocurrir durante mi participación en el
                evento, y libero a la organización de cualquier responsabilidad en este
                sentido. Acepto recibir comunicaciones relacionadas con el evento, como
                confirmaciones de registro, actualizaciones y materiales informativos
                por correo electrónico u otros medios de comunicación proporcionados por
                la organización del evento. Al marcar la casilla de aceptación de
                términos y condiciones, confirmo que he leído, comprendido y aceptado
                todos los términos mencionados anteriormente.
            </textarea>            
        </div>
        <div className="m-10">
            <input type="checkbox" id="acepto" name="acepto" required className="mr-2"/>
            <label id="acepto" className="text-black">Acepto los términos y condiciones del evento.</label>            
        </div>

    </div>
  );
}
