"use client"

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

const SignUpPage = () => {
   const { register, handleSubmit, control, formState: {errors, isSubmitting } } = useForm<SignUpFormData>(
    {
      defaultValues: {
        fullName: '',
        email: '',
        password: '',
        country: 'UK',
        investmentGoals: 'Growth',
        riskTolerance: 'Medium',
        preferredIndustry: 'Technology'
      },
       mode: 'onBlur' 
    }
   )

  const onSubmit = async (data:SignUpFormData) => {
    try {
      console.log(data)
      
    } catch (error) {
      console.error(error)
      
    }
  }
  return (
    <div>
      <h1 className='form-title'> Sign Up and Personalise</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        {/* Inputs */}

        <Button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'> 
          {isSubmitting ? 'Creating account' : 'Start Your Investing Journey'} 
        </Button>
        
      </form>      
    </div>
  )
}

export default SignUpPage
