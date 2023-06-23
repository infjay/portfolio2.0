"use client"
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {};

const Contact = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:info@jawid.net?subject=${formData.subject}&
        body=Hi,my name is ${formData.name}. ${formData.message} (${formData.email})`;
        reset() 
    }

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute max-sm:text-sm top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center max-sm:text-sm">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>
        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-orange-400 h-7 w-7 max-sm:h-5 max-sm:w-5 animate-pulse" />
            <p className="max-sm:text-sm" >+4917640458314</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-orange-400 h-7 w-7 max-sm:h-5 max-sm:w-5 animate-pulse" />
            <p className="text-2xl max-sm:text-sm">info@jawid.net</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-orange-400 h-7 w-7 max-sm:h-5 max-sm:w-5 animate-pulse" />
            <p className="text-2xl max-sm:text-sm">Berlin, Germany</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto ">
            <div className="flex max-sm:space-x-0 max-sm:space-y-2 space-x-2 max-sm:flex-col"> 
                <input {...register("name")} placeholder="Name" className="contactInput" type="text" /> 
                <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
            </div>
            <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
            <textarea {...register("message")} placeholder="Message" className="contactInput" />
            <button type="submit" className="bg-orange-400 text-black font-bold py-5 rounded-md px-10 text-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
