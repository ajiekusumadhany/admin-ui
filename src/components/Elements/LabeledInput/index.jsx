import Input from "./Input";
import Label from "./Label";

const LabeledInput = (props) => {
  const { label, name, type, placeholder } = props;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </>
  );
};

export default LabeledInput;
