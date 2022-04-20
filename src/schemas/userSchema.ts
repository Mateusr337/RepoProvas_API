import joi from "joi";

const userSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .required()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/),
});

export default userSchema;
