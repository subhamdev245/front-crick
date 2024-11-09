import React from "react";
import Select from 'react-select';
import { Button, Input, Textarea } from "./ui/Index"; 

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
  formErrors, 
}) => {

  const renderInputsByComponentType = (getControlItem) => {
    const value = formData[getControlItem.name] || "";

    const error = formErrors ? formErrors[getControlItem.name] : null;

    switch (getControlItem.componentType) {
      case "input":
        return (
          <div className="form-group">
            <Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} 
          </div>
        );

      case "select":
        return (
          <div key={getControlItem.name} className="form-group">
            <label htmlFor={getControlItem.name}>{getControlItem.label}</label>
            <Select
              name={getControlItem.name}
              value={getControlItem.options.find(
                (option) => option.value === value
              )} 
              onChange={(selectedOption) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: selectedOption ? selectedOption.value : '',
                })
              }
              options={getControlItem.options}
              placeholder={getControlItem.placeholder}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} 
          </div>
        );

      case "textarea":
        return (
          <div className="form-group">
            <Textarea
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.id}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} 
          </div>
        );
        
      case "file":
        return (
          <div key={getControlItem.name} className="form-group">
            <label htmlFor={getControlItem.name}>{getControlItem.label}</label>
            <input
              name={getControlItem.name}
              type="file"
              id={getControlItem.name}
              accept="image/*"
              multiple={getControlItem.multiple || false} 
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.files,
                })
              }
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} 
          </div>
        );
        
      default:
        return (
          <div className="form-group">
            <Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
            />
            {error && <p className="text-red-500 text-sm">{error}</p>} 
          </div>
        );
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
