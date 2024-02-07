import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xmj7bcb', 'template_e2dtamh', form.current, {
        publicKey: '_qGMMLejFGEXCy89-',
      })
      .then(
        () => {
          setIsSent(true); // Set isSent state to true on successful submission
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
      
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 rounded-lg shadow-2xl shadow-slate-700 w-auto sm:w-96 bg-emerald-400">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
    
        {isSent ? (
          <>
            <div className='flex justify-center items-center mb-4'>
            <img src="https://avatars.githubusercontent.com/u/137649234?v=4" alt="" className='h-44 w-44 rounded-2xl'/> 
            
          </div>
          <p className="text-black  text-2xl font-bold mb-4">Message successfully sent to Hanny Vyas!</p>
        
          </>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className='block text-gray-700 font-bold mb-2 bold'>Name</label>
              <input type="text" name="from_name"  placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">   
            <label className='block text-gray-700 font-bold mb-2 '>Email</label>
              <input type="email" name="from_email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2 bold'>Message</label>
              <textarea name="message" placeholder="Enter your message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className='text-center'>
              <button type="submit" value="Send" className="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors ">Send</button>
            </div>
          </form>
        )}
      </div>
    </div>

  );
};
