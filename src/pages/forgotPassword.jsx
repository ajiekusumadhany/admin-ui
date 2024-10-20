import FormForgotPassword from "../components/fragments/FormForgotPassword";
import AuthLayout from "../components/layouts/AuthLayout";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout type="forgot password">
      <FormForgotPassword/>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
