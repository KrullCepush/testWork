import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(16, "Nice try, nobody has a first name that long")
    .required("Required"),
  password: Yup.string()
    .min(3, "Must be longer than 3 characters")
    .required("Required")
});
export default FormSchema;
