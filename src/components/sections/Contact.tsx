import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Let's create something amazing together
          </p>
        </div>

        <div className="bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />

          <div className="relative z-10">
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:pranav@example.com"
                className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:scale-110 transition-all duration-300 shadow-lg group"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full hover:scale-110 transition-all duration-300 shadow-lg group"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full hover:scale-110 transition-all duration-300 shadow-lg group"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-800 dark:text-white resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-white/10 text-center animate-scale-in">
              <div className="inline-flex p-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Your message has been sent successfully. I'll get back to you soon!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
