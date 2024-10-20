import FormSignUp from "../components/fragments/FormSignUp";
import AuthLayout from "../components/layouts/Authlayout";

const SignUpPage = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;
