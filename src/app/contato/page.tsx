"use client"

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-[1024px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <h1 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Contact Us.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto font-medium">
            We're here to help. Reach out for support, sales, or just to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {/* Form Section */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ease-out fill-mode-both">
            <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-8 tracking-tight">Send a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#1d1d1f]">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-[#f5f5f7] border border-transparent rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-colors"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#1d1d1f]">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-[#f5f5f7] border border-transparent rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#1d1d1f]">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#f5f5f7] border border-transparent rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-colors"
                  placeholder="jane@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="topic" className="text-sm font-medium text-[#1d1d1f]">What is this regarding?</label>
                <select 
                  id="topic" 
                  className="w-full bg-[#f5f5f7] border border-transparent rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-colors appearance-none"
                >
                  <option>Sales and Product Inquiries</option>
                  <option>Technical Support</option>
                  <option>Order Status</option>
                  <option>General Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#1d1d1f]">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-[#f5f5f7] border border-transparent rounded-xl px-4 py-3 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:bg-white transition-colors resize-none"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3.5 rounded-full font-medium transition-colors flex items-center justify-center space-x-2 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send size={16} />}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="md:col-span-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-both">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100">
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">Connect with us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5f5f7] p-3 rounded-full text-[#1d1d1f]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">Phone Support</p>
                    <p className="text-sm text-[#86868b] mt-1">1-800-MY-APPLE</p>
                    <p className="text-xs text-[#86868b] mt-1">Mon-Fri, 8am-10pm CT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5f5f7] p-3 rounded-full text-[#1d1d1f]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">Email Support</p>
                    <p className="text-sm text-[#86868b] mt-1">support@apple.com</p>
                    <p className="text-xs text-[#86868b] mt-1">Usually replies within 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#f5f5f7] p-3 rounded-full text-[#1d1d1f]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">Corporate Headquarters</p>
                    <p className="text-sm text-[#86868b] mt-1">One Apple Park Way<br/>Cupertino, CA 95014</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1d1d1f] rounded-3xl p-8 text-center text-white flex flex-col items-center justify-center min-h-[200px]">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">Looking for a store?</h3>
              <p className="text-[#a1a1a6] text-sm mb-6">Find an Apple Retail Store near you.</p>
              <Link href="/loja" className="bg-white text-[#1d1d1f] hover:bg-neutral-200 px-6 py-2.5 rounded-full font-medium transition-colors text-sm">
                Find a Store
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}