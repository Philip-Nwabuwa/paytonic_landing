import Link from "next/link";

import { Button } from "@/components/common/Button";

const BillsPayment = () => {
  return (
    <section className="w-full flex flex-col gap-10 max-width">
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 rounded-3xl">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
            Pay Bills Effortlessly with Paytonic
          </h2>
          <p className="mt-6 text-lg leading-6 text-gray-600">
            Paytonic provides a quick and easy way to pay bills such as airtime,
            data, electricity, and more. With our user-friendly web app, you can
            conveniently manage all your payments in one place.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-y-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Convenient</h3>
              <p>
                Pay airtime, data, electricity, and other bills with just a few
                clicks.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Secure</h3>
              <p>
                Rest assured that your payments are safe and protected with
                Paytonic.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="#">
                <Button intent="primary">Get started</Button>
              </Link>
              <Link href="#">
                <Button intent={"outlined"}>
                  Learn more <span aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 rounded-3xl">
        <div></div>
        <div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
            Secure and Convenient Money Transfers to Other Users
          </h2>
          <p className="mt-6 text-lg leading-6 text-gray-600">
            With Paytonic, you can securely transfer money to other users in
            Nigeria using their bank account or username. Enjoy hassle-free
            transactions and peace of mind.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-y-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Fast Transfers</h3>
              <p>
                Transfer money instantly to friends, family, or anyone in
                Nigeria with just a few taps.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Secure Payments</h3>
              <p>
                Rest assured that your transactions are protected with advanced
                security measures.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="#">
                <Button intent="primary">Get started</Button>
              </Link>
              <Link href="#">
                <Button intent={"outlined"}>
                  Learn more <span aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillsPayment;
