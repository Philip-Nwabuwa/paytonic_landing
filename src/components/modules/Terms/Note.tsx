import Link from "next/link";

const Note = () => {
  return (
    <section className="bg-white max-width p-10 lg:p-16  rounded-3xl">
      <h3 className="text-4xl text-center font-black pb-8">
        Terms and Conditions
      </h3>
      <p className="text-xl mb-6">
        Welcome to Paytonic, the banking app provided by Paytonic Inc. By using
        our app, you agree to these terms and conditions. Please read them
        carefully.
      </p>
      <ul className="flex flex-col mb-8 gap-4 list-decimal list-inside">
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            1. <span>Account Access and Security:</span>
          </div>
          <span className="ml-4 text-gray-500">
            You are responsible for maintaining the confidentiality of your
            account and password, and you agree to comply with all applicable
            security measures. Notify us immediately of any unauthorized use or
            security breach
          </span>
        </li>
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            2. <span>Services Provided:</span>
          </div>
          <span className="ml-4 text-gray-500">
            Paytonic offers a range of banking services including but not
            limited to account management, transfers, payments, and financial
            insights.
          </span>
        </li>
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            3. <span>Privacy and Data Protection:</span>
          </div>
          <span className="ml-4 text-gray-500">
            Your privacy is important to us. We collect, use, and protect your
            personal information according to our Privacy Policy.
          </span>
        </li>
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            4. <span>Fees and Charges:</span>
          </div>
          <span className="ml-4 text-gray-500">
            Details of fees and charges applicable to our services are outlined
            in our fee schedule, accessible within the app.
          </span>
        </li>
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            5. <span>Use of the App:</span>
          </div>
          <span className="ml-4 text-gray-500">
            You agree to use Paytonic only for lawful purposes and in compliance
            with all applicable laws and regulations. You may not use Paytonic
            in any manner that could damage, disable, overburden, or impair our
            servers or networks.
          </span>
        </li>
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            6. <span>Termination:</span>
          </div>
          <span className="ml-4 text-gray-500">
            Paytonic reserves the right to terminate or suspend your access to
            the app at any time, for any reason, without notice.
          </span>
        </li>
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            7. <span>Changes to Terms:</span>
          </div>
          <span className="ml-4 text-gray-500">
            Paytonic may update or revise these terms and conditions from time
            to time. You will be notified of any changes within the app.
          </span>
        </li>
        <li className="flex flex-col">
          {" "}
          <div className="flex-shrink-0 text-xl">
            8. <span>Contact Us :</span>
          </div>
          <span className="ml-4 text-gray-500">
            For questions or concerns regarding these terms and conditions,
            please contact us at support@paytonic.com.
          </span>
        </li>
      </ul>
      <p className="text-gray-500 mt-6">
        By using the Paytonic app, you acknowledge that you have read,
        understood, and agree to be bound by these terms and conditions.
      </p>
      <p className="text-gray-500 mt-6">
        This template covers essential aspects typically found in terms and
        conditions for a banking app. Adjustments may be necessary based on
        specific legal requirements and the unique features of Paytonic.
      </p>{" "}
    </section>
  );
};

export default Note;
