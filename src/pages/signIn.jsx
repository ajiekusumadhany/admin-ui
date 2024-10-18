import FormSignIn from "../components/Fragments/FormSignIn";
import Authlayout from "../components/Layouts/Authlayout";

const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;
