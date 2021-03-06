import { NextFunction, Request, Response } from "express";
import * as errorFunctions from "../utils/errorFunctions.js";

function validateSchemaMiddleware(schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errorsMessage = validation.error.details.map((detail) => detail.message);
      throw errorFunctions.badRequestError(errorsMessage.join("; "));
    }

    next();
  };
}

export default validateSchemaMiddleware;
