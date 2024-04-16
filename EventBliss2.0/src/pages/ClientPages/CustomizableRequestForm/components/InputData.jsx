import { TextInput } from "@tremor/react";

// eslint-disable-next-line react/prop-types
export function InputData({ register, control }) {
  return (
    <div>
      {/* nombre completo */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Full name
        </label>
        <TextInput
          type={"text"}
          control={control}
          placeholder={"Full Name"}
          required
          {...register("full_name", { required: true })}
        />
      </div>

      {/* correo electronico */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Email
        </label>
        <TextInput
          type={"email"}
          control={control}
          placeholder={"********@*****.***"}
          required
          {...register("email", { required: true })}
        />
      </div>

      {/* Numero de telefono */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Phone number
        </label>
        <TextInput
          type={"number"}
          control={control}
          placeholder={"Phone number"}
          required
          {...register("number", { required: true })}
        />
      </div>

      {/* Nombre del evento */}
      <div>
        <label className="block text-sm text-gray-700 font-bold mb-2">
          Name of the event
        </label>
        <TextInput
          type={"text"}
          control={control}
          placeholder={"name of the event"}
          required
          {...register("name_event", { required: true })}
        />
      </div>
    </div>
  );
}
