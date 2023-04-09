import * as Yup from 'yup'

export interface IProduct {
    id: number,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {base_url: string}[],
    brand: {id: number, name: string, slug: string},
    specifications: ISpecification[]
}

interface ISpecification {
    name: string,
    attributes: {code: string, value: string, name: string}[]
}


export const signupSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email không hợp lệ").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
})


export type SignupForm = Yup.InferType<typeof signupSchema>
export type SigninForm = Yup.InferType<typeof signinSchema>

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const signinSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required()
})



