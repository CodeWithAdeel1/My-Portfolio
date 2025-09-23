import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_culfld3",   // EmailJS Service ID
        "template_dbpyd4q",  // EmailJS Template ID
        e.target,
        "5xHbkGQHhGAE3szpa"    // EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear form after sending
        },
        (error) => {
          alert("❌ Failed to send message. " + error.text);
        }
      );
  };

  return (
    <section className="mt-16 rounded-2xl p-8 bg-gradient-to-tr from-slate-800/40 to-slate-700/20 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="mt-2 text-slate-300">
            I'm open to remote internships and collaborations. Feel free to reach out.
          </p>
        </div>

        {/* EmailJS contact form */}
        <form
          className="w-full md:w-1/2 grid grid-cols-1 gap-3"
          onSubmit={sendEmail}
        >
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="p-3 rounded-md bg-slate-800/40 border border-slate-700"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="p-3 rounded-md bg-slate-800/40 border border-slate-700"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            required
            className="p-3 rounded-md bg-slate-800/40 border border-slate-700"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-emerald-500/90 font-semibold hover:bg-emerald-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
