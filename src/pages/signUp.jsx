import FormSignUp from "../components/Fragments/FormSignUp";
import Authlayout from "../components/Layouts/Authlayout";

const SignUpPage = () => {
  return (
    <Authlayout type="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;
