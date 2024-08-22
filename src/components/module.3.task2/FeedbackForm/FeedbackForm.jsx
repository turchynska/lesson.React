import { useId } from "react"
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./FeedbackForm.module.css"

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
      level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
  });

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
};

const FeedbackForm = () => {
    const nameField = useId();
    const emailField = useId();
    const messageField = useId();
    const levelField = useId();
    
  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form>
        <div>
        <label htmlFor={nameField}>Username</label>
	      <Field type="text" name="username" id={nameField}/>
          <ErrorMessage name="username" component="span"/>
          </div>

          <div>
          <label htmlFor={emailField}>Email</label>
		  <Field type="email" name="email" id={emailField}/>
          <ErrorMessage name="email" component="span"/>
          </div>

          <div>
          <label htmlFor={messageField}>Message</label>
          <Field as="textarea" name="message" id={messageField} rows="5"/>
          <ErrorMessage name="message" component="span"/>
          </div>

          <div>
          <label htmlFor={messageField}>Service satisfaction level</label>
          <Field as="select" name="level" id={levelField}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" component="span"/>
          </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;