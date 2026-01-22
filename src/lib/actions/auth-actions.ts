'use server'

import { auth } from "../better-auth/auth"
import { inngest } from "../inngest/client"


export const signUpWithEmail = async(data: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({
            body: {email: data.email, password: data.password, name: data.fullName}
        })

        if(response){
            await inngest.send({
                name: 'app/user.created',
                data: {
                    email: data.email
                }
            })
        }
        
    } catch (error) {
        console.log('Sign Up failed', error)
        return { success: false, error: 'Sign Up failed'}
        }        
    }
