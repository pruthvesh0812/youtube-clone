import z from 'zod'

export const inputValidate = z.object({ 
    email:z.string().min(11),
    password:z.string().min(8)
})