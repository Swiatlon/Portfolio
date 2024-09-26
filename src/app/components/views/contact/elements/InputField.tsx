import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  disabled: boolean;
}

const InputField: FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  disabled,
}) => {
  const { control } = useFormContext();

  return (
    <label>
      <span className="field-label">{label}</span>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`field-input`}
              disabled={disabled}
            />
            {fieldState.error && (
              <span className="text-red-500">{fieldState.error.message}</span>
            )}
          </>
        )}
      />
    </label>
  );
};

export default InputField;
