export default (schema, source = "body") => (req, res, next) => {
  const { error, value } = schema.validate(req[source], { abortEarly: false, stripUnknown: true });
  if (error) return res.status(400).json({ message: "Validation error", details: error.details });
  req[source] = value;
  next();
};
