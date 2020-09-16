import * as yup from 'yup'

const formSchema = yup.object().shape({
    email:yup
    .string()
    .email('Must be a valid email.')
    .required('Must include email.'),
    username:yup
    .string()
    .min(5, 'Name must be atleast 5 characters long.')
    .required('Name is required.'),
    password:yup
    .string()
    .min(8, 'Password must be atleast 8 characters long.')
    .required('Password is required.')
})

export default formSchema