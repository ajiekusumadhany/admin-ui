import Input from "./Input";
import Label from "./Label";

const LabeledInput = (props) => {
  const { label, name, type, placeholder, register } = props;

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} register={register}/>
    </>
  );
};

export default LabeledInput;
