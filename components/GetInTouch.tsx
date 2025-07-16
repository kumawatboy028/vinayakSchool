"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: `Infront of Do Janti Balaji, Churu Road, Fatehpur `,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9829748121, 01571-223121",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "visftr@gmail.com",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Sat: 7:10 AM - 5:00 PM",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 font-medium px-4 py-2 rounded-full text-sm mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3c88] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to join our school community? Contact us today for admissions
            or any queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                We'll get back to you within 24 hours
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <div className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#1f3c88] hover:bg-[#1a3470] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${info.bgColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${info.iconColor}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
              <div className="rounded-lg overflow-hidden h-64 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.303317444767!2d74.9492415150624!3d28.015069399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914a80ebd94f0a1%3A0xcfb2eab801fdabad!2sVinayak%20International%20School!5e0!3m2!1sen!2sin!4v1721040000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vinayak International School Location"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <p>Infront of Do Janti Balaji, Churu Road</p>
                  <p>Fatehpur, Rajasthan</p>
                </div>
                <a
                  href="https://www.google.com/maps?ll=28.01541,74.953419&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=14966282587733863341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
