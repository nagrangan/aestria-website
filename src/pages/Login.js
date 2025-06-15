import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream to-pastel-lavender flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-luxury-charcoal hover:text-luxury-gold transition-colors mb-8 font-mono text-sm"
        >
          <ArrowLeft size={16} strokeWidth={1.5} className="mr-2" />
          Back to Home
        </Link>

        {/* Login Form */}
        <div className="bg-white/90 backdrop-blur-md rounded-none shadow-2xl p-8 border border-pastel-mint">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl text-luxury-charcoal mb-2">Welcome Back</h1>
            <p className="font-mono text-sm text-luxury-graphite">Sign in to your Aestria account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-mono text-sm text-luxury-charcoal mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-pastel-mint focus:border-luxury-gold focus:outline-none transition-colors font-mono text-sm rounded-none bg-white/50"
                placeholder="enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-mono text-sm text-luxury-charcoal mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-pastel-mint focus:border-luxury-gold focus:outline-none transition-colors font-mono text-sm rounded-none bg-white/50 pr-12"
                  placeholder="enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-luxury-graphite hover:text-luxury-gold transition-colors"
                >
                  {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-pastel-mint focus:ring-luxury-gold focus:ring-2 rounded-none"
                />
                <span className="ml-2 font-mono text-sm text-luxury-graphite">Remember me</span>
              </label>
              <Link to="/forgot-password" className="font-mono text-sm text-luxury-gold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full btn-primary font-mono text-sm tracking-wide"
            >
              Sign In to Your Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="font-mono text-sm text-luxury-graphite">
              Don't have an account?{' '}
              <Link to="/register" className="text-luxury-gold hover:underline">
                Create one here
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-pastel-mint">
            <p className="text-center font-mono text-xs text-luxury-graphite">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
