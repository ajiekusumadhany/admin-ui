import FormSignIn from "../components/fragments/FormSignIn";
import AuthLayout from "../components/layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout type="sign in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;
