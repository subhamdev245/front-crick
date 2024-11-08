import React from "react";
import { useForm } from "react-hook-form";
import {Button} from "./ui/Index"
import { renderInputsByComponentType } from "./RenderInputByComponentType";

function CommonForm({
  formControls,
  defaultValues,
  onSubmit,
  buttonText,
  isBtnDisabled,
  validationSchema,
}) {
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            {renderInputsByComponentType({
              getControlItem: controlItem,
              control,
              errors,
              setFormData: null,  
              formData: defaultValues, 
            })}
            {errors[controlItem.name] && (
              <p className="text-sm text-red-500">{errors[controlItem.name]?.message}</p>
            )}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;