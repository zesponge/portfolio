import React from 'react'
import { useState, useRef } from 'react'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: "", message: ""})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  }

  const handleFocus = () => {

  }

  const handleBlur = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>Name
            <input type="text" name="name" className='input' placeholder='name' required value={form.name} onChange={handleChange}
              onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>Email
            <input type="email" name="email" className='input' placeholder='email' required value={form.email} onChange={handleChange}
              onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>Your Message
            <textarea type="text"  rows={4} name="message" className='input' placeholder='message' required value={form.message} onChange={handleChange}
              onFocus={handleFocus} onBlur={handleBlur}/>
          </label>
          <button type="submit" className='btn' onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
  
    </section>
  )
}

export default Contact
