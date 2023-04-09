import instance from ".";
import { SigninForm, SignupForm } from "../models";

export const signup = (user: SignupForm) => {
    const uri = '/signup'
    return instance.post(uri, user)
}
export const signin = (user: SigninForm) => {
    const uri = '/signup'
    return instance.post(uri, user)
}