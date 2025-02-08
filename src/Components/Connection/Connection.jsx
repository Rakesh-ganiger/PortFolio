import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Connection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pxghp5k", "template_i5oyi8g", form.current, {
        publicKey: "91hLOO9wWGwD4dTYi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent!..."); // You can replace this with a better notification system
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="ContactForm"
      className="text-white p-8 md:p-16 rounded-lg shadow-md max-w-4xl mx-auto mb-10"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center pb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Contact me
      </h2>

      <form className="space-y-4" ref={form} onSubmit={sendEmail}>
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg text-white bg-slate-900"
            placeholder="Enter your name"
            name="from_name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg text-white bg-slate-900"
            placeholder="Enter your email"
            name="your_email"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg text-white bg-slate-900"
            placeholder="Write your message..."
            name="message"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="py-3 px-8 text-lg font-semibold rounded-full bg-[#465697] hover:bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connection;
