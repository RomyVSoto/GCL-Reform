"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form submitted:", formData);

    // Opcional: resetear el formulario después del envío
    // setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl px-8 lg:px-10 py-10 lg:py-12 w-full">
      <div className="flex flex-col gap-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-semibold font-roboto text-neutral-700 mb-3"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400 transition-all duration-200"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-semibold font-roboto text-neutral-700 mb-3"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400 transition-all duration-200"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-lg font-semibold font-roboto text-neutral-700 mb-3"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400 transition-all duration-200"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-semibold font-roboto text-neutral-700 mb-3"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400 resize-none transition-all duration-200"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-sky-500 text-white py-4 px-6 text-lg rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200 font-medium mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
}