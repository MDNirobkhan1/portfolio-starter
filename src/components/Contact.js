import React, { useState } from "react";

// motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your form submission logic, e.g., API call
    console.log("Form submitted with:", { email, name, phone, message });

    // Clear form fields after submission
    setEmail("");
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="py-16 lg:section mt-80" id="contact">
      <div className="container mx-auto mt-8 mb-12">
        <h2 className="text-4xl text-center mb-10">Contact Us</h2>
        <div className="flex flex-col lg:flex-row">
          {/* Text Section */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[60px] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          {/* Form Section */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-4 items-start"
          >
            <input
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              className="bg-transparent border-b py-6 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className="btn btn-sm" type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
