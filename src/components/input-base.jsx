import {Input} from "@heroui/input";

const InputBaseField = ({
  // Basic props
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  // Styling props
  size = "md",
  color = "default",
  radius = "md",
  variant = "bordered",
  labelPlacement = "top",
  // State props
  isRequired = false,
  isDisabled = false,
  isReadOnly = false,
  isInvalid = false,
  isClearable = false,
  // Helper text props
  description,
  errorMessage,
  // Additional content
  startContent,
  endContent,
  className,
  ...props
}) => {
  return (
    <Input
      // Basic props
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      // Styling props
      size={size}
      color={color}
      radius={radius}
      variant={variant}
      labelPlacement={labelPlacement}
      // State props
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      isClearable={isClearable}
      // Helper text props
      description={description}
      errorMessage={errorMessage}
      // Additional content
      startContent={startContent}
      endContent={endContent}
      classNames={
        className
      }
      {...props}
    />
  );
};

export default InputBaseField;
