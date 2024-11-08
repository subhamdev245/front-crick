import { Controller } from "react-hook-form";
import {Input,Button,Select,Textarea} from "./ui/Index"

export function renderInputsByComponentType({
  getControlItem,
  control,
  errors,
  setFormData,
  formData,
}) {
  const { name, componentType, placeholder, type, options, validation, label } = getControlItem;
  const value = formData[name] || "";

  const renderField = (FieldComponent) => (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FieldComponent
          {...field}
          id={name}
          placeholder={placeholder}
          type={type}
          value={value}
          error={errors[name]}
          label={label}
        />
      )}
      rules={validation}
    />
  );

  switch (componentType) {
    case "input":
      return renderField(Input);
    case "select":
      return (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(value) => field.onChange(value)}
              options={options}
              label={label}
              error={errors[name]}
            />
          )}
          rules={validation}
        />
      );
    case "textarea":
      return renderField(Textarea);
    default:
      return renderField(Input);
  }
}
