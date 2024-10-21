'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface ProfileFormValues {
  firstname: string;
  lastname: string;
  email: string;
  contactno: number;
  country: string;
  city: string;
  jobs: {
    jobcountry: string;
    jobcity: string;
    jobtitle: string;
    employer: string;
    startdate: string;
    enddate: string;
  }[];
}
interface CreateProfileProps {
  categories: any[];
  initialData: any | null;
}
const profileSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  contactno: Yup.number().required('Contact number is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  jobs: Yup.array()
    .of(
      Yup.object().shape({
        jobcountry: Yup.string().required('Job country is required'),
        jobcity: Yup.string().required('Job city is required'),
        jobtitle: Yup.string().required('Job title is required'),
        employer: Yup.string().required('Employer is required'),
        startdate: Yup.string().required('Start date is required'),
        enddate: Yup.string().required('End date is required')
      })
    )
    .required('At least one job is required')
});

const CreateProfile: React.FC<CreateProfileProps> = ({
  categories,
  initialData
}) => {
  const initialValues: ProfileFormValues = {
    firstname: '',
    lastname: '',
    email: '',
    contactno: 0,
    country: '',
    city: '',
    jobs: []
  };

  const onSubmit = (values: ProfileFormValues) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>First Name</label>
            <Field type="text" name="firstname" />
            <ErrorMessage name="firstname" component="div" />
          </div>

          <div>
            <label>Last Name</label>
            <Field type="text" name="lastname" />
            <ErrorMessage name="lastname" component="div" />
          </div>

          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Contact Number</label>
            <Field type="number" name="contactno" />
            <ErrorMessage name="contactno" component="div" />
          </div>

          <div>
            <label>Country</label>
            <Field type="text" name="country" />
            <ErrorMessage name="country" component="div" />
          </div>

          <div>
            <label>City</label>
            <Field type="text" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>

          {/* Job fields can be rendered dynamically based on the jobs array */}
          {/* You can add functionality to dynamically add/remove jobs */}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateProfile;
