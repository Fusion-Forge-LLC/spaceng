import * as yup from "yup";

export const propertySchema = yup.object({
  property_title: yup.string().required("Please enter property title"),
  property_address: yup.string().required("Please enter property address"),
  property_description: yup.string(),
  price: yup.number().required("Please enter price"),
  old_price: yup.number(),
  caution_fee: yup.number(),
  price_postfix: yup.string(),
  type: yup.string().oneOf(["workspace", "shortlet"], "Invalid type").required("Type is required"),
  location: yup.string(),
  neighborhood: yup.string(),
  state: yup.string().required("Please select property state"),
  coordinates: yup.array(yup.number()).length(2),
  bedroom: yup.number(),
  property_terms: yup.string(),
  enableDiscount: yup.boolean(),

  percentage: yup.number().when("enableDiscount", {
    is: true,
    then: (schema) =>
      schema
        .required("Percentage is required when discount is enabled.")
        .min(1, "Percentage must be between 1 and 100.")
        .max(100, "Percentage must be between 1 and 100."),
    otherwise: (schema) => schema.nullable().transform(() => null),
  }),

  minimum_duration: yup.number().when("enableDiscount", {
    is: true,
    then: (schema) =>
      schema
        .required("Minimum duration is required when discount is enabled.")
        .integer("Duration must be a whole number.")
        .min(1, "Minimum duration must be at least 1."),
    otherwise: (schema) => schema.nullable().transform(() => null),
  }),
});

export type PropertySchemaType = yup.InferType<typeof propertySchema>;
