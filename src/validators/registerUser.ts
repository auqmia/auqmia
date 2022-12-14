import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "A senha precisa ter no minímo 8 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "A senha deve conter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo."
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
  bio: yup.string().required("Campo obrigatório"),
  picture: yup
    .string()
    .required("Campo obrigatório.")
    .url("Deve ser uma url válida"),
  district: yup.string().required("Campo obrigatório."),
  city: yup.string().required("Campo obrigatório."),
  state: yup
    .string()
    .required("Campo obrigatório.")
    .matches(/^[a-zA-Z]{2}$/, "Digite apenas a sigla de dois dígitos."),
  user_type: yup.string().required("Campo obrigatório.").nullable(),
  birthday: yup
    .date()
    .typeError("Campo obrigatório.")
    .required("Campo obrigatório.")
    .nullable()
    .max(new Date(), "Como assim você ainda não nasceu?!")
    .test("is-oldEnough", "Você deve ter 18 anos ou mais.", function (value) {
      const currentDate = new Date();
      const birthday = value ? new Date(value) : new Date();
      const age = currentDate.getFullYear() - birthday.getFullYear();
      if (age < 18) {
        return false;
      }
      return true;
    }),
});

export default registerSchema;
