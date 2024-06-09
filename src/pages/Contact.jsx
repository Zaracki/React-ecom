import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ fullName: '', subject: '', email: '', body: '' });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState({ success: '', error: '' });

  const validateField = (name, value) => {
    if (['fullName', 'subject', 'body'].includes(name) && value.length < 3) {
      return 'Minimum number of characters is 3';
    }
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Must be a valid email address';
    }
    return '';
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.entries(formData).reduce((acc, [key, value]) => {
      const error = validateField(key, value);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormStatus({ success: 'Contact form sent', error: '' });
      setFormData({ fullName: '', subject: '', email: '', body: '' });
    } else {
      setErrors(newErrors);
      setFormStatus({ success: '', error: 'Fill out required fields' });
      console.log('Please correct the errors in the form');
    }
  };

  return (
    <main className="flex-1">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-20">
        <h1 className="text-2xl font-bold mb-6">Contact</h1>
        <form onSubmit={handleSubmit}>
          {['fullName', 'subject', 'email', 'body'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 mb-2 capitalize">
                {field.replace(/([A-Z])/g, ' $1')}:
                {field === 'body' ? (
                  <textarea name={field} value={formData[field]} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                ) : (
                  <input type={field === 'email' ? 'email' : 'text'} name={field} value={formData[field]} onChange={handleChange} required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                )}
              </label>
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative">
            Submit
          </button>
          {formStatus.success && <p className="text-green-500 text-sm mt-2">{formStatus.success}</p>}
          {formStatus.error && <p className="text-red-500 text-sm mt-2">{formStatus.error}</p>}
        </form>
      </div>
    </main>
  );
};
