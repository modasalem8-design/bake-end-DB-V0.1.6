import Joi from "joi";
const UserSchema = (req, res, next) => {
  console.log(req.body)
  const schema = Joi.object({
    name: Joi.string()
      .trim()
      .min(5)
      .max(200)
      .required()
      .invalid("OR'1'='1'", "or'1'='1'", Joi.ref("pass")),
    pass: Joi.string().trim().min(8).max(20).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    const et = error.details[0].type;
    console.error("error", et);
    if (et === "any.invalid") {
      console.error(error.details[0].type);
      return res.json({ error: "don't any name = pass" });
    }
    return res.json({
      error: `"error name or pass >8 please enter name or pass <8 ,200"${error.details[0].type}`,
    });
  }
  next();
};
export { UserSchema };
