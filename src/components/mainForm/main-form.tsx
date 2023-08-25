import { Formik, Field, Form } from "formik";
import { ErrorMessage } from "../error-message";

type Props = {
  classNames: string;
}

interface FormValues {
  userName: string,
  email: string,
  password: string,
  passwordConfirm: string,
  gender: string,
  role: string,
  subscribe: boolean,
}

const roles = ['Editor', 'Viewer', 'Publisher', 'Commenter', 'Tester'];

export const MainForm = ({ classNames }: Props) => {
  const validatePassword = (values: string) => {
    let error = "";
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (values.length < 8) {
      error = "*Password must be 8 characters long.";
    } else if (!passwordRegex.test(values)) {
      error = "strenge";
    }
    return error;
  };

  const validateName= (values: string) => {
    let error = "";
    if (values.length > 20) {
      error = "*Username must be less than 20 characters.";
    } 
    return error;
  };

  const validateConfirmPassword = (pass: string, value: string) => {
    let error = "";
    if (pass && value) {
      if (pass !== value) {
        error = "Password not matched";
      }
    }
    return error;
  };

  const validateEmail = (value: string) => {
    let error = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (value) {
      if (!regex.test(value)) {
        error = "Invalid email format";
      }
    }
    return error;
  };

  return (
    <div className="p-5 h-5/6" >
        <Formik
          initialValues={{
            userName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            gender: '',
            role: '',
            subscribe: false,
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, errors }) => (
          <Form className={classNames}>
            <label htmlFor="userName" className="text-lg">Username</label>
            <Field className="rounded-md bg-gray-100 p-1" id="userName" name="userName" placeholder="Jane" required validate={validateName} />
            {errors.userName && <ErrorMessage error={errors.userName} />}

            <label htmlFor="email" className="text-lg">Email</label>
            <Field
              className="rounded-md bg-gray-100 p-1"
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              required
              validate={validateEmail}
            />
            {errors.email && <ErrorMessage error={errors.email} />}

            <div className="flex flex-col items-center gap-2">
              <label htmlFor="password" className="text-lg">Password</label>
              <Field
                className="rounded-md bg-gray-100 p-1"
                id="password"
                name="password"
                placeholder="Strong password"
                type="password"
                validate={validatePassword}
                required
              />
              {errors.password && <ErrorMessage error={errors.password} />}
              <Field
                className="rounded-md bg-gray-100 p-1"
                required
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirm password"
                type="password"
                validate={(value: string) =>
                  validateConfirmPassword(values.password, value)
                }
              />
              {errors.passwordConfirm && <ErrorMessage error={errors.passwordConfirm} />}
            </div>
            

            <div id="gender" className="text-lg text-center">Your gender:
              {values.gender !== 'Hidden' ? (
                <>
                <div role="group" aria-labelledby="gender" className="flex bg-gray-100 gap-3 p-2 rounded-md rounded-b-none">
                  <label className="flex gap-1">
                    <Field type="radio" name="gender" value="Male" />
                    Male
                  </label>
                  <label className="flex gap-1">
                    <Field type="radio" name="gender" value="Female" />
                    Female
                  </label>
                  <label className="flex gap-1">
                    <Field type="radio" name="gender" value="Hidden" />
                    Hide
                  </label>
                </div>

                <div className="flex bg-gray-100 gap-3 p-2 rounded-md rounded-t-none" >Picked: {values.gender !== 'Shown' && values.gender}</div>
                </>
              ) : (
                <label className="flex bg-gray-100 gap-1 p-2 rounded-md">
                  <Field type="radio" name="gender" value="Shown" />
                  Show
                </label>
              )}
            </div>

            <label className="text-lg" htmlFor="role">Your Role</label>
            <Field className="rounded-md bg-gray-100 p-1 outline-none" name="role" as="select" multiple>
              {roles.map((role) => (
                <option key={role} value={role} className="">
                  {role}
                </option>
              ))}
            </Field>

            <label className="flex flex-col gap-1 items-center">
              Do want to subscribe to our news?
              <div className="gap-1 flex">
               <Field type="checkbox" name="subscribe" />
              {values.subscribe ? 'Thanks for sub' : 'Click here to sub'} 
              </div>
              
            </label>

            <button  className="mt-2 rounded-md bg-gray-500 p-2 text-white" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    
  )
}