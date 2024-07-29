import { isValidCNPJ, isValidCPF, isValidPhone } from "@brazilian-utils/brazilian-utils"
import * as yup from "yup"

export const schema = yup.object({
  fullName: yup
    .string()
    .required('O nome e sobrenome são obrigatórios.')
    .min(3, 'são curtos demais')
    .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
  email: yup.string().required('o email é obrigatório.').email('O email deve ser válido.'),
  mobile: yup
    .string()
    .required('O celular é obrigatório.')
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test('validateMobile', 'Celular Inválido', (value) => isValidPhone(value)),
  document: yup
    .string()
    .required('O CPF/CNPJ é obrigatório.')
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test(
      'validateDocument',
      'O CPF/CNPJ é inválido.',
      (value) => isValidCPF(value) || isValidCNPJ(value))
})

export type FieldValues = yup.InferType<typeof schema>
