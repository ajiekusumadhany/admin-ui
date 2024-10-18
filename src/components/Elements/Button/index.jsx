const Button = (props) => {
    const { children, variant, type } = props;
  
    return (
      <button
        className={`h-12 rounded-md text-sm ${variant}`}
        type={type}
      >
        {children}
      </button>
    );
  };
  
  export default Button;