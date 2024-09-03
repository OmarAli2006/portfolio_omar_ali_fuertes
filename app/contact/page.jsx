"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+ 591) 723 819 63",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ali.potosi@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Nazarea 71, Villa Armonia, Potosi, Bolivia",
  },
];

import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Maneja otros campos de entrada como antes
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/send-email", formData);
      if (response.status === 200) {
        toast.success("Email sent successfully!"); // Show success toast
      // Clear the form if needed
    } else {
      toast.error("Error sending email. Please try again."); // Show error toast
    }
    } catch (error) {
      console.error(error);
      toast.error("Error sending email. Please try again.");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
              I’m excited to collaborate with you on your next web development project. With a passion for creating innovative and user-friendly websites, I offer tailored solutions to meet your unique needs. Let’s transform your ideas into reality and achieve outstanding results together!
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                />
              </div>
              {/* Select */}
              <Select
                name="service"
                onValueChange={(value) =>
                  handleChange({ target: { name: "service", value } })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Service">Web Development</SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="IT Consultant">IT Consultant</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TextArea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your menssage here"
                onChange={handleChange}
              />
              {/* Button */}
              <Button size="md" className="max-w-40" type="submit">
                {" "}
                Send Message
              </Button>
            </form>
            
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                      bg-[#27272c] text-accent rounded-md flex items-center
                      justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
