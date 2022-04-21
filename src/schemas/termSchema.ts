import joi from "joi";

const termSchema = joi.object({
  name: joi.number().integer().required(),
});

export default termSchema;
