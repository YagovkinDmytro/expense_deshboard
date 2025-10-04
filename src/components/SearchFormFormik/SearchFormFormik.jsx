import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SearchFormFormikSchema = Yup.object().shape({
  topic: Yup.string().required("Required"),
});

const initialValues = {
  topic: "",
};

const SearchFormFormik = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (values.topic.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(values.topic);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SearchFormFormikSchema}
    >
      <Form>
        <Field type="text" name="topic" placeholder="Search articles..." />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchFormFormik;
