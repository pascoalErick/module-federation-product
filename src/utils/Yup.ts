import * as YupBase from "yup";

const translation = {
  mixed: {
    default: "Campo inválido",
    required: "Campo obrigatório",
    oneOf: "Deve ser um dos seguintes valores: ${values}",
    notOneOf: "Não pode ser um dos seguintes valores: ${values}",
  },
  string: {
    length: "${path} deve ter exatamente ${length} caracteres",
    min: "Deve ter pelo menos ${min} caracteres",
    max: "Deve ter no máximo ${max} caracteres",
    email: "Deve ter formato de e-mail válido",
    url: "Deve ter formato de URL válida",
    trim: "${path} não deve conter espaços no início ou no fim.",
    lowercase: "${path} deve estar em maiúsculo",
    uppercase: "${path} deve estar em minúsculo",
  },
  number: {
    min: "${path} deve ser no mínimo ${min}",
    max: "${path} deve ser no máximo ${max}",
    lessThan: "${path} deve ser menor que ${less}",
    moreThan: "${path} deve ser maior que ${more}",
    notEqual: "${path} não pode ser igual à ${notEqual}",
    positive: "${path} deve ser um número positivo",
    negative: "${path} deve ser um número negativo",
    integer: "${path} deve ser um número inteiro",
  },
  date: {
    min: "${path} deve ser maior que a data ${min}",
    max: "${path} deve ser menor que a data ${max}",
  },
  array: {
    min: "${path} deve ter no mínimo ${min} itens",
    max: "${path} deve ter no máximo ${max} itens",
  },
};

YupBase.setLocale(translation);

export const Yup = YupBase;
