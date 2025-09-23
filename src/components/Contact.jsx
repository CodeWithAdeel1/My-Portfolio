import React from "react";

export default function Contact() {
  return (
    <section className="mt-16 rounded-2xl p-8 bg-gradient-to-tr from-slate-800/40 to-slate-700/20 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="mt-2 text-slate-300">
            I'm open to remote internships and collaborations. Feel free to reach out.
          </p>
        </div>

        {/* Functional contact form */}
        <form
          className="w-full md:w-1/2 grid grid-cols-1 gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            const name = data.get("name");
            const email = data.get("email");
            const message = data.get("message");
            window.location.href = `mailto:codewithadeel1@gmail.com?subject=Portfolio Contact from ${name}&body=${message} (${email})`;
          }}
        >
          <input name="name" type="text" placeholder="Your name" required className="p-3 rounded-md bg-slate-800/40 border border-slate-700" />
          <input name="email" type="email" placeholder="Your email" required className="p-3 rounded-md bg-slate-800/40 border border-slate-700" />
          <textarea name="message" rows={4} placeholder="Message" required className="p-3 rounded-md bg-slate-800/40 border border-slate-700" />
          <button type="submit" className="px-4 py-2 rounded-md bg-emerald-500/90 font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}
