import * as yup from "yup";

import { ERROR_MESSAGES } from "../../const";

export default yup.object().shape({
  firstName: yup.string().required(ERROR_MESSAGES.requiredField),
  lastName: yup.string().required(ERROR_MESSAGES.requiredField),
  age: yup
    .number()
    .positive(ERROR_MESSAGES.positiveAge)
    .test(
      "isEven?",
      ERROR_MESSAGES.evenAge,
      (value) => value === undefined || value % 2 === 0
    ),
  email: yup.string().email(),
  gender: yup.string().required(ERROR_MESSAGES.requiredField),
  developer: yup.boolean(),
});
