export function ConditionsTerms() {
  return (
    <div>
        <div className="grid grid-cols-1 m-10">
            <label id="terminos" className="text-black">Terms and conditions of the event:</label>
            <textarea id="terminos" name="terminos" rows="6" cols="50" required readOnly>
                By submitting this application, I agree to participate in the event and agree
                in accordance with the policies established by the organization of the event.
                I also understand that my participation is subject to the availability of
                quotas and approval by the organizers. I accept that the
                information provided in this form is used by the
                event organization to process my request and contact me
                in relation to the event. I understand that the organization of the event
                reserves the right to make changes in programming, location or
                details of the event, and it will be the responsibility of the participant to be
                informed of such changes through communication channels
                provided by the organization. Furthermore, I undertake to comply with
                the rules of conduct established during the event and to respect the
                other participants, speakers and event staff. I agree on
                that the organization of the event is not responsible for any damage,
                loss or injury that may occur during my participation in the
                event, and I release the organization from any responsibility in this
                sense. I agree to receive communications related to the event, such as
                registration confirmations, updates and informational materials
                by email or other means of communication provided by
                the organization of the event. By checking the acceptance box
                terms and conditions, I confirm that I have read, understood and accepted
                all the terms mentioned above.
            </textarea>            
        </div>
        <div className="m-10">
            <input type="checkbox" id="acepto" name="acepto" required className="mr-2"/>
            <label id="acepto" className="text-black">I accept the terms and conditions of the event.</label>            
        </div>

    </div>
  );
}
