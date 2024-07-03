import Link from "next/link";
import React from "react";

const Note = () => {
  return (
    <section className="bg-white max-width p-10 lg:p-16  rounded-3xl">
      <h3 className="text-4xl text-center font-black pb-8">
        What are cookies?
      </h3>
      <p className="text-xl mb-6">
        Cookies are small text files that are placed on your computer or mobile
        device when you visit a website. They are widely used to make websites
        work more efficiently and to provide information to the owners of the
        site. Paytonic uses cookies for various purposes, including but not
        limited to:
      </p>
      <ul className="flex flex-col text-gray-500 mb-8 gap-4 list-decimal list-inside">
        <li className="flex">
          {" "}
          <span className="flex-shrink-0">1.</span>
          <span className="ml-2">Improving website performance</span>
        </li>
        <li className="flex">
          {" "}
          <span className="flex-shrink-0">2.</span>
          <span className="ml-2">
            Analyzing website traffic and usage patterns
          </span>
        </li>
        <li className="flex">
          {" "}
          <span className="flex-shrink-0">3.</span>
          <span className="ml-2">
            Personalizing your experience on our website
          </span>
        </li>
        <li className="flex">
          {" "}
          <span className="flex-shrink-0">4.</span>
          <span className="ml-2">Remembering your preferences</span>
        </li>
      </ul>
      <h3 className="text-2xl text-center font-black pb-4">
        There are different types of cookies used on the Paytonic website:
      </h3>
      <ul className="flex flex-col text-gray-500 gap-4 list-decimal list-inside">
        <li className="flex">
          <span className="flex-shrink-0">1.</span>
          <span className="ml-2">
            Essential cookies: These cookies are necessary for the website to
            function properly. They enable basic functions like page navigation
            and access to secure areas of the website. Without these cookies,
            the website may not function correctly.
          </span>
        </li>
        <li className="flex">
          <span className="flex-shrink-0">2.</span>
          <span className="ml-2">
            Analytical cookies: These cookies help us understand how visitors
            interact with the website by collecting and reporting information
            anonymously. This helps us improve the website and tailor it to the
            needs of our users.
          </span>
        </li>
        <li className="flex">
          <span className="flex-shrink-0">3.</span>
          <span className="ml-2">
            Functional cookies: These cookies enable the website to provide
            enhanced functionality and personalization. They may be set by us or
            by third-party providers whose services we have added to our pages.
          </span>
        </li>
      </ul>
      <p className="text-gray-500 mt-6">
        You can manage your cookie preferences by adjusting the settings on your
        browser. Please note that blocking certain types of cookies may impact
        your experience on the Paytonic website.
      </p>
      <p className="text-gray-500 mt-6">
        For more information about how Paytonic handles your personal data and
        your rights, please refer to our{" "}
        <Link href={"/terms"} className="text-blue-500 hover:underline">
          Terms & Condition
        </Link>
        .
      </p>{" "}
    </section>
  );
};

export default Note;
