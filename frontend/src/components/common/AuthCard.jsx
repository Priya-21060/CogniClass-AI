import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import SocialButton from '../ui/SocialButton';

/**
 * Right-side Authentication Card component containing form validation,
 * state management, login handler, and social authentication options.
 */
export function AuthCard({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [authStatus, setAuthStatus] = useState(null); // 'success' | 'error' | null

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Basic Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setAuthStatus(null);

    try {
      // Simulated production API network delay
      await new Promise((resolve) => setTimeout(resolve, 1400));

      setAuthStatus('success');
      if (onLoginSuccess) {
        onLoginSuccess(formData);
      }
    } catch (err) {
      setAuthStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setAuthStatus('success');
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Welcome back
        </h2>
        <p className="text-sm text-slate-400">
          Enter your credentials to access your classroom intelligence suite.
        </p>
      </div>

      {/* Auth Status Notification Toast */}
      {authStatus === 'success' && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <span className="font-semibold block">Authentication Successful!</span>
            <span>Redirecting to CogniClass AI Dashboard...</span>
          </div>
        </div>
      )}

      {/* Social Login Button */}
      <div className="space-y-4">
        <SocialButton
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        />

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative px-3 bg-slate-950 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            or continue with email
          </div>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Email Field */}
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="name@university.edu"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={Mail}
          required
          autoComplete="email"
          disabled={isLoading}
        />

        {/* Password Field */}
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          icon={Lock}
          required
          autoComplete="current-password"
          disabled={isLoading}
        />

        {/* Remember Me & Forgot Password Row */}
        <div className="flex items-center justify-between pt-1">
          <Checkbox
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            label="Remember me for 30 days"
            disabled={isLoading}
          />

          <a
            href="#forgot-password"
            onClick={(e) => {
              e.preventDefault();
              alert('Password reset link sent to your email.');
            }}
            className="text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none focus:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isLoading}
            icon={ArrowRight}
          >
            Sign in to CogniClass
          </Button>
        </div>
      </form>

      {/* Footer / Create Account Link */}
      <div className="text-center pt-2 text-xs sm:text-sm text-slate-400">
        Don&apos;t have an account yet?{' '}
        <a
          href="#signup"
          onClick={(e) => {
            e.preventDefault();
            alert('Redirecting to Institution Onboarding...');
          }}
          className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none focus:underline"
        >
          Request Institutional Access
        </a>
      </div>
    </div>
  );
}

export default AuthCard;
