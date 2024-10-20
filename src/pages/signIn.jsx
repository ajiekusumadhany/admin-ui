import FormSignIn from "../components/fragments/FormSignIn";
import Authlayout from "../components/Layouts/Authlayout";

const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;
