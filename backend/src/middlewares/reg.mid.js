import Joi from 'joi';

const userSchema = Joi.object({
  fullName: Joi.string().min(3).max(60).required()
    .messages({
      "string.base": "Fullname must be text",
      "string.empty": "Fullname is required",
      "string.min": "Fullname should be at least 3 characters long",
      "string.max": "Fullname should not exceed 60 characters"
    }),

  email: Joi.string().email().required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address"
    }),

  password: Joi.string()
    .pattern(new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,30}$"
    ))
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be 8–30 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)."
    })
});


export default function validateReg(req, res, next) {
      if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "Request body cannot be empty" });
  }
    const { error, value } = userSchema.validate(req.body, { abortEarly: false, stripUnknown: true });

    if (error) {
       const messages = error.details.map(err => err.message);
    return res.status(400).json({ errors: messages });
    }

    req.body = value; 
    next();
}
