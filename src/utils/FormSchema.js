import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  login: Yup.string()
    .min(4, "Must be longer than 4 characters")
    .max(16, "Nice try, nobody has a first name that long")
    .required("Required"),
  password: Yup.string()
    .min(4, "Must be longer than 4 characters")
    .required("Required")
});
export default FormSchema;
