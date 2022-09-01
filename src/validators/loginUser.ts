import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
});

export default schema;
