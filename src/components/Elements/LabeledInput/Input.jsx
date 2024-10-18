const Input = (props) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="py-3 ps-4 text-sm border rounded-md w-full bg-special-mainBg border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
