import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux_utilis/cartSlice";

interface FormModel {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    status: string
}

interface ContactFormProps {
  setNewContact: React.Dispatch<React.SetStateAction<boolean>>;
}

const ValidateForm = Yup.object().shape({
    firstname: Yup.string()
        .required("*Name is required")
        .trim("*Empty spaces are not allowed")
        .matches(/^[0-9a-zA-Z\s]+$/, "*Invalid name")
        .min(2, "*Name is too short"),
    phone: Yup.string()
        .required("*Phone Number is required")
        .matches(/^[0-9\b]+$/, "*Enter number only")
        .min(10, "*Phone Number not less than 10 digits")
        .max(10, "*Phone Number not exceed 10 digits"),
    email: Yup.string()
        .required("*Email is required!")
        .email("*Invalid Email")
        .matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "*Invalid Email"),
    status: Yup.string()
        .required("*Please check status")
});

const ContactForm: React.FC<ContactFormProps> = ({ setNewContact }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-7">
      <h3 className="font-semibold text-3xl text-gray-700 text-center">
        Create Contact
      </h3>
      <Formik<FormModel>
        initialValues={{
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          status: "",
        }}
        validationSchema={ValidateForm}
        onSubmit={(values) => {
          dispatch(addContacts({ id: Date.now(), ...values }));
          // setTimeout(() => {
          setNewContact(false);
        }}
      >
        {({
          handleSubmit,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <form
            className="w-full bg-gray-100 rounded-md p-4 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-start space-y-2 mb-4">
              <label htmlFor="firstname">First Name</label>
              <input
                className="rounded-md py-[6px] pl-2 focus:shadow focus:outline-none"
                type="text"
                id="firstname"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstname && touched.firstname && (
                <div>{errors.firstname}</div>
              )}
            </div>
            <div className="flex flex-col justify-start space-y-2 mb-4">
              <label htmlFor="lastname">Last Name</label>
              <input
                className="rounded-md py-[6px] pl-2 focus:shadow focus:outline-none"
                type="text"
                id="lastname"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-col justify-start space-y-2 mb-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="rounded-md py-[6px] pl-2 focus:shadow focus:outline-none"
                type="text"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone && <div>{errors.phone}</div>}
            </div>
            <div className="flex flex-col justify-start space-y-2 mb-4">
              <label htmlFor="firstname">Email</label>
              <input
                className="rounded-md py-[6px] pl-2 focus:shadow focus:outline-none"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div className="flex justify-start space-x-2 mb-4">
              <span>Status:</span>
              <div className="flex flex-col space-y-2">
                <label>
                  <input
                    className="input"
                    type="radio"
                    id="status"
                    name="status"
                    value="Active"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label>
                  <input
                    className="input"
                    type="radio"
                    id="status"
                    name="status"
                    value="Inactive"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="ml-2">Inactive</span>
                </label>
                {errors.status && touched.status && <div>{errors.status}</div>}
              </div>
            </div>
            <div className="w-full text-center mt-6">
              <button
                type="submit"
                className="w-fit bg-blue-500 font-sans font-semibold text-lg text-white rounded-md py-2 px-4 hover:opacity-90"
              >
                Save Contact
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;