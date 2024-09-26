import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  disabled: boolean;
}

const TextAreaField: FC<TextAreaFieldProps> = ({
  label,
  name,
  placeholder,
  rows = 5,
  disabled,
}) => {
  const { control } = useFormContext();

  return (
    <label>
      <span className="field-label">{label}</span>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <>
            <textarea
              {...field}
              rows={rows}
              className={`field-input max-h-[20rem]`}
              placeholder={placeholder}
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

export default TextAreaField;
