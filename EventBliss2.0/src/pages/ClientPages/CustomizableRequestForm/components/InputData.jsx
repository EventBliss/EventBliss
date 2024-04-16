import { TextInputComp } from "../../../../components/TextInput";
// eslint-disable-next-line react/prop-types
export function InputData({ register }) {
  return (
    <div>
      {/* nombre completo */}

        <TextInputComp
          name={"full_name"}
          placeholder={"Full Name"}
          label={"Full Name *"}
          register={register}
        />

      {/* correo electronico */}

        <TextInputComp
          type={"email"}
          label={"Email *"}
          name={"contact_email"}
          placeholder={"********@*****.***"}
          register={register}

        />

      {/* Numero de telefono */}

        <TextInputComp
          type={"number"}
          name={"phone_number"}
          placeholder={"Phone number"}
          label={"Phone Number *"}
          register={register}

        />

      {/* Nombre del evento */}

        <TextInputComp
          name={"event_name"}
          label={"Event Name *"}
          placeholder={"name of the event"}
          register={register}

        />
    </div>
  );
}
