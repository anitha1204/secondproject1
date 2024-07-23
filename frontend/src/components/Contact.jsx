
// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const NewsletterForm = () => {
//   const [formData, setFormData] = useState({
//     userName: '',
//     mobileNumber: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Frontend validation
//     if (!formData.userName || !formData.mobileNumber || !formData.email || !formData.message) {
//       toast.error('All fields are required!');
//       return;
//     }

//     try {
//       const response = await axios.post('https://harithams.onrender.com/user', formData);
//       console.log('User registered:', response.data);
//       toast.success('User registered successfully!');

//       // Reset form data
//       setFormData({
//         userName: '',
//         mobileNumber: '',
//         email: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('There was an error registering the user!', error.response?.data || error.message);
//       toast.error(error.response?.data?.message || 'There was an error registering the user!');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-2">
//       <h2 className="text-2xl md:text-3xl text-gray-500 font-bold mb-4">Newsletter</h2>
//       <form onSubmit={handleSubmit} className="w-full max-w-lg">
//         <div className="flex flex-wrap mb-4">
//           <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
//             <input
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//               type="text"
//               name="userName"
//               placeholder="Full Name"
//               value={formData.userName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
//             <input
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//               type="text"
//               name="mobileNumber"
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full md:w-1/3 px-2">
//             <input
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="flex justify-center mb-4">
//           <textarea
//             className="appearance-none block w-full max-w-[800px] bg-gray-200 text-gray-700 border rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white h-32"
//             placeholder="Type your message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex justify-center sm:justify-between items-center mx-auto sm:ml-96 sm:max-w-[800px]">
//           <button
//             className="bg-gray-900 text-white py-2 px-8 rounded"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewsletterForm;
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.userName || !formData.mobileNumber || !formData.email || !formData.message) {
      toast.error('All fields are required!');
      return;
    }

    try {
      const response = await axios.post('https://harithams.onrender.com/user', formData);
      console.log('User registered:', response.data);
      toast.success('User registered successfully!');

      // Reset form data
      setFormData({
        userName: '',
        mobileNumber: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('There was an error registering the user!', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'There was an error registering the user!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <h2 className="text-2xl md:text-3xl text-gray-500 font-bold mb-4">Newsletter</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="userName"
              placeholder="Full Name"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-2">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <textarea
            className="appearance-none block w-full max-w-[800px] bg-gray-200 text-gray-700 border rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white h-32"
            placeholder="Type your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center sm:justify-between items-center mx-auto sm:ml-96 sm:max-w-[800px]">
          <button
            className="bg-gray-900 text-white py-2 px-8 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
