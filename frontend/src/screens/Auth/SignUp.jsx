import React, {useContext, useState} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import {Link, useNavigate} from 'react-router-dom'
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';
import uploadImage from '../../utils/uploadImage';


function SignUp() {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      //upload image
      if (profilePic) {
        console.log("Uploading profile picture...");
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      console.log("Saving user registration...");
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser({
          name: user.fullName,
          email: user.email,
          profileImageUrl: user.profileImageUrl,
        });
        console.log("Signup success!");
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>
      <div className='w-full max-w-lg flex flex-col justify-center'>
        <h2 className='text-2xl font-bold text-slate-800 tracking-tight'>Create An Account</h2>
        <p className='text-sm text-slate-500 mt-2 mb-8'>Enter your details below to get started</p>

        <form onSubmit={handleSignup} className='w-full'>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-6'>
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="sample@gmail.com"
              type="text"
            />
            <div className='col-span-full'>
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
          </div>

          {error && <p className='text-rose-500 text-[13px] font-medium mb-4'>{error}</p>}

          <button 
            type="submit" 
            className={`btn-primary mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <p className='text-[14px] text-slate-600 mt-6 text-center'>
            Already have an account?{" "}
            <Link className='font-semibold text-emerald-600 hover:text-emerald-700 underline underline-offset-4 transition-colors' to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp