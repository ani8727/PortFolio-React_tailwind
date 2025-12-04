import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/avrzejja", userInfo);
      toast.success("Your message has been sent 🎉");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <>
      <div
        id="contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-slate-200"
      >
        <h1 className="text-3xl font-bold mb-3 text-slate-100">Contact Me</h1>
        <span className="text-slate-300">Feel free to reach out by filling the form below.</span>

        <div className="flex flex-col items-center justify-center mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-900/60 w-96 px-8 py-6 rounded-xl shadow-lg glass-card"
          >
            <h1 className="text-xl font-semibold mb-5 text-center text-slate-100">Send Your Message</h1>

            {/* FULL NAME */}
            <div className="flex flex-col mb-4">
              <label className="block text-slate-300 font-medium">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Full name is required</span>
              )}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col mb-4">
              <label className="block text-slate-300 font-medium">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight 
              focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col mb-4">
              <label className="block text-slate-300 font-medium">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg border py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <span className="text-red-500 text-sm">Message is required</span>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="btn-primary text-white font-semibold px-4 py-2 rounded-lg w-full duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
