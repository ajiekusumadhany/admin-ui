import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";

const FormForgotPassword = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <Button variant="bg-primary w-full text-white mb-8" type="submit">
        Password Reset
      </Button>
    </form>
  );
};

export default FormForgotPassword;
