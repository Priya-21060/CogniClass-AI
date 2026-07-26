import React from 'react';
import { Check } from 'lucide-react';

/**
 * Custom modern Checkbox component with smooth focus ring and animation.
 */
export function Checkbox({
  id,
  checked = false,
  onChange,
  label,
  disabled = false,
  className = '',
}) {
  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only peer"
        />
        <div
          className={`
            w-4 h-4 rounded-md border transition-all duration-200 flex items-center justify-center
            peer-focus:ring-2 peer-focus:ring-indigo-500/40 peer-focus:ring-offset-1 peer-focus:ring-offset-slate-950
            ${
              checked
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm shadow-indigo-500/30'
                : 'bg-slate-900/80 border-slate-700 group-hover:border-slate-600'
            }
          `}
        >
          <Check
            className={`w-3 h-3 stroke-[3] transition-transform duration-150 ${
              checked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          />
        </div>
      </div>
      {label && (
        <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-slate-200 transition-colors">
          {label}
        </span>
      )}
    </label>
  );
}

export default Checkbox;
