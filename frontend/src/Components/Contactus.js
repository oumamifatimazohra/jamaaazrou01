import React, { useRef,useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/main.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  validateEmail,
  validateFullName,
  validateMessage,
  validatePhone,
} from '../componentss/Validation';
import InlineError from '../componentss/InlineError';


const notify =()=>{
  toast.success('Votre message a été envoyé', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

function Contactus() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState('');
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [messageError, setMessageError] = useState();
  

  useEffect(() => {
  
    // *********** VALIDATION **********
    validateFullName({ fullName, setFullNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });
    validateMessage({ message, setMessageError });


  }, [fullName, email, phone, message]);

  


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ajs4ui', 'template_0s9x9w7', form.current, 'fJfPOkAkXIkqu_Y6I')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          
          
          
      }, (error) => {
          console.log(error.text);
         
      });
      e.target.reset()
  };

  return (
             <div>
             <form ref={form} onSubmit={sendEmail}>
          
             <input 
             type="text" 
             value={fullName}
             onChange={(e) => setFullName(e.target.value)}
             required 
             placeholder='Nom' 
            name="name" />
             {fullNameError && <InlineError error={fullNameError} />}
             <br/>
             <input 
             type="email" 
             placeholder='Email'  
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             name="email" />
             {emailError && <InlineError error={emailError} />}
          
             <br/>
             <input type="phone" 
             required
             value={phone} 
             onChange={(e) => setPhone(e.target.value)} 
             placeholder='Phone' 
             name="phone" />
             {phoneError && <InlineError error={phoneError} />}
             <br/>
             <input type="subject" placeholder='sujet' name="subject" />
             <br/>
             <textarea   placeholder='Message'
             rows={3} 
             required
             value={message}
             onChange={(e) => setMessage(e.target.value)}
              name="message" />
              {messageError && <InlineError error={messageError} />}
            
             <br/>
             <button  type="submit"
              
              onClick={notify}
             value="Envoyer" >Envoyer</button>
             
             </form>
             <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
                />
{/* Same as */}
<ToastContainer />
             </div>
         
       
  );
}

export default Contactus;
