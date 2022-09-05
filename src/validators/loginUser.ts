import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Deve ser um email").required("Campo Obrigatório"),
  password: yup.string().required("Campo Obrigatório"),
});

export default schema;
