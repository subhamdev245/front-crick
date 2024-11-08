import { Controller } from "react-hook-form";
import {Input,Textarea,Select} from "../ component/comman/ui/index"
export function renderInputsByComponentType({
  getControlItem,
  control,
  errors,
  setFormData,
  formData,
}) {
  let element = null;
  const value = formData[getControlItem.name] || "";

  switch (getControlItem.componentType) {
    case "input":
      element = (
        <Controller
          control={control}
          name={getControlItem.name}
          render={({ field }) => (
            <Input
              {...field}
              id={getControlItem.name}
              placeholder={getControlItem.placeholder}
              type={getControlItem.type}
              error={errors[getControlItem.name]}
              label = {getControlItem.label}
            />
          )}
          rules={getControlItem.validation}
        />
      );
      break;

    case "select":
      element = (
        <Controller
          control={control}
          name={getControlItem.name}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value || ""}
              onChange={(value) => field.onChange(value)}
              options={getControlItem.options}
              label={getControlItem.label}
              error={errors[getControlItem.name]} 
            />
          )}
          rules={getControlItem.validation}
        />
      );
      break;

    case "textarea":
      element = (
        <Controller
          control={control}
          name={getControlItem.name}
          render={({ field }) => (
            <Textarea
              {...field}
              id={getControlItem.name}
              placeholder={getControlItem.placeholder}
              error={errors[getControlItem.name]} 
            />
          )}
          rules={getControlItem.validation}
          label = {getControlItem.label}
        />
      );
      break;

    default:
      element = (
        <Controller
          control={control}
          name={getControlItem.name}
          render={({ field }) => (
            <Input
              {...field}
              id={getControlItem.name}
              placeholder={getControlItem.placeholder}
              type={getControlItem.type}
              error={errors[getControlItem.name]} 
            />
          )}
          rules={getControlItem.validation}
        />
      );
      break;
  }

  return element;
}
