import { TextInputComp } from "../../../../components/TextInput";
import { NumberInput } from '@tremor/react';// eslint-disable-next-line react/prop-types
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
        <div className="w-full px-3 mb-6">
          <label
            className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
          >
            Phone Number *
          </label>
          <NumberInput 
          className="mx-auto max-w-sm" 
          min={1}
          {...register("phone_number", { required: true })} 
          />
        </div>


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
