import { useState } from 'react';
import axios from 'axios';
import SubmitBtn from '../component/SubmitBtn';
import { type UserData, type ApiResponse } from '../types';

function Login() {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    mobile: ''
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await axios.post('http://localhost:8000/users', formData);
      setResponse({
        success: true,
        message: 'Account created successfully!',
        data: res.data
      });
     
      setFormData({
        name: '',
        email: '',
        password: '',
        mobile: ''
      });
    } catch (error: any) {
      setResponse({
        success: false,
        error: error.response?.data?.message || 'Failed to create account'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-start  '>
      <div className='w-full h-screen loginContainer'></div>
      <div className='w-11/12 absolute'>
        <div className='lg:mt-4 mt-2'>
          <h1 className='font-medium text-[35px] text-white heading'>Logo</h1>
        </div>
        <div className='lg:w-11/12 w-full flex justify-center items-center mt-4  lg:flex-row flex-col '>
          <div className='lg:w-6/12 w-11/12'>
            <h1 className='heading w-full lg:w-11/12 text-[22px] lg:text-[45px] font-semibold text-white leading-[23px] lg:leading-[55px]'>
              Ahir Yadav Vivah Made Easy – Connect. Communicate. Commit.
            </h1>
            <p className='title w-full lg:w-10/12  text-[16px] lg:text-[22px] font-light text-red-100 leading-[18px] lg:leading-[35px] mt-2 lg:mt-5'>
              A trusted platform for the Ahir Yadav community to find meaningful matrimonial connections.
            </p>
          </div>
          <div className='lg:w-6/12 w-full flex justify-end items-center flex-col lg:flex-row lg:mt-0 mt-2'>
            <form onSubmit={handleSubmit} className='lg:w-8/12 w-10/12 h-[400px] lg:h-[450px] bg-black/40 rounded-md p-3'>
              <div className='mt-3'>
                <h1 className='title text-[18px] text-white interFamily'>Username</h1>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Username...'
                  className='w-full h-[40px] mt-1 rounded p-2'
                  required
                />
              </div>
              <div className='mt-3'>
                <h1 className='title text-[18px] text-white interFamily'>Email</h1>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='ragav@gmail.com'
                  className='w-full h-[40px] mt-1 rounded p-2'
                  required
                />
              </div>
              <div className='mt-3'>
                <h1 className='title text-[18px] text-white interFamily'>Mobile No</h1>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder='99978988773'
                  className='w-full h-[40px] mt-1 rounded p-2'
                  required
                />
              </div>
              <div className='mt-3'>
                <h1 className='title text-[18px] text-white interFamily'>Create Password</h1>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=''
                  className='w-full h-[40px] mt-1 rounded p-2'
                  required
                />
              </div>
              <div className='w-full flex justify-center items-center mt-8'>
                <SubmitBtn 
                  text={loading ? "Creating..." : "Create Account"} 
                  disabled={loading}
                />
              </div>
              {response && (
                <div className={`mt-3 p-2 rounded ${response.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {response.success ? response.message : response.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
