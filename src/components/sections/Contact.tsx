import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, Sparkles, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowThankYou(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowThankYou(false), 5000);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); // Clear error when user starts typing
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 transition-colors duration-500
                 bg-gradient-to-br from-pink-50/80 via-white/80 to-purple-50/80 
                 dark:from-[#0a0f1f]/80 dark:via-[#1a1440]/80 dark:to-[#2b1e5a]/80"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-16 h-16 bg-pink-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-40 left-10 w-20 h-20 bg-purple-200/30 dark:bg-pink-500/20 rounded-full blur-xl animate-float animation-delay-1000" />
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-blue-200/20 dark:bg-blue-500/15 rounded-full blur-xl animate-float animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full border border-pink-200 dark:border-purple-700 shadow-lg mb-5">
            <Sparkles className="w-4 h-4 text-pink-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-pink-600 dark:text-purple-300 tracking-wide">
              連絡 • Let's Connect
            </span>
          </div>
          
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop- [0_0_10px_rgba(255,182,193,0.4)] uppercase">
              Contact
          </h2>

          {/* Line Animation */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
            <span className="text-lg text-pink-500 dark:text-purple-300 font-light">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse animation-delay-500" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/30 dark:border-white/10 hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-semibold text-gray-800 dark:text-white">pranav@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="font-semibold text-gray-800 dark:text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-semibold text-gray-800 dark:text-white">Mumbai, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/30 dark:border-white/10">
                <a
                  href="mailto:pranav@example.com"
                  className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-white/10 relative overflow-hidden">
              {/* Gradient Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />

              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you."
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-600 dark:text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Modal */}
        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-white/10 text-center animate-scale-in max-w-md w-full">
              <div className="inline-flex p-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Message Sent! 🎉
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                Thank you for reaching out! I've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}