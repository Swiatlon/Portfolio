"use client";
import { FC, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SubmitButton from "./SubmitButton";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const methods = useForm<ContactFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    const emailServiceId = String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    const emailTemplateId = String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    const emailPublicKey = String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    setLoading(true);
    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: data.name,
          to_name: "Przemyslaw",
          from_email: data.email,
          to_email: "przemyslaw.swiatlon@gmail.com",
          message: data.message,
        },
        emailPublicKey
      )
      .then(
        () => {
          setLoading(false);
          enqueueSnackbar("Thank you for your message 😃", {
            variant: "success",
          });
          methods.reset();
        },
        () => {
          setLoading(false);
          enqueueSnackbar("I didn't receive your message 😢", {
            variant: "error",
          });
        }
      );
  };

  return (
    <div className="relative flex items-center flex-col w-full md:w-[600px] lg:w[1000px] border rounded p-6 sm:p-12 border-black-300 bg-black-200">
      <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient ">
        Let&apos;s talk
      </h3>
      <p className="text-white-600 mt-3 text-center sm:px-10">
        Whether you&apos;re looking to build a new website, improve your
        existing platform, or bring a unique project to life, I&apos;m here to
        help.
      </p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="mt-12 flex flex-col space-y-7 gap-3 w-full md:w-[600px] lg:w[1000px] sm:px-24"
        >
          <InputField
            label="Full Name"
            name="name"
            placeholder="Your name"
            disabled={loading}
          />
          <InputField
            label="Email address"
            name="email"
            type="email"
            placeholder="Your email"
            disabled={loading}
          />
          <TextAreaField
            label="Your message"
            name="message"
            placeholder="Hi, I wanna give you a job..."
            disabled={loading}
          />
          <SubmitButton loading={loading} />
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
