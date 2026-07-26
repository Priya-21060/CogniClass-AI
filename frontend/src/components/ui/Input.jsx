import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/**
 * Modern reusable Input component with label, icons, password reveal toggle, and error states.
 */
export function Input({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  required = false,
  autoComplete,
  disabled = false,
  className = '',
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`w-full space-y-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold tracking-wide text-slate-300 uppercase"
        >
          {label} {required && <span className="text-rose-400">*</span>}
        </label>
      )}

      <div className="relative group">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-400 transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        )}

        <input
          id={id}
          name={id}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`
            w-full bg-slate-900/80 text-slate-100 placeholder-slate-500
            text-sm font-medium rounded-xl border px-3.5 py-2.5 outline-none
            transition-all duration-200 shadow-sm
            ${Icon ? 'pl-10' : 'pl-3.5'}
            ${isPassword ? 'pr-10' : 'pr-3.5'}
            ${
              error
                ? 'border-rose-500/80 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 hover:border-slate-700'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-xs text-rose-400 font-medium animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
