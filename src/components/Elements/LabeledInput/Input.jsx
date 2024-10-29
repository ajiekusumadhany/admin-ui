const Input = (props) => {
  const {
    type,
    placeholder,
    name,
    variant = "bg-special-mainBg border border-gray-03",
  } = props;

  return (
    <input
      type={type}
      className={`${variant} py-3 ps-4 text-sm  rounded-md w-full text-gray-01 focus:border-black focus:outline-none focus:ring-0`}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
