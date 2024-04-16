import { TextInput } from '@tremor/react';

// eslint-disable-next-line react/prop-types
export function TextInputComp({ name, label, placeholder, type, register,disabled }) {
  return (
    <div className="w-full px-3 mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 font-bold mb-2 font-bold mb-2"
      >
        {label}
      </label>
      <TextInput
        type={type ? type : 'text'}
        disabled={disabled ? true: false}
        placeholder={placeholder}
        {...register(name, { required: type == 'url' ? false : true })} // Pass register function with the field name and validation rules
      />
    </div>
  );
}
