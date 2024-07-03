import { Button } from "@/components/common/Button";
import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Send = () => {
  return (
    <section className="w-full flex flex-col gap-10 max-width">
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 lg:p-16 rounded-3xl">
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Send Money Instantly to Bank Accounts
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              With Paytonic, you can transfer money to any Nigerian bank account
              instantly and securely.
            </p>
          </ScrollAnimate>
          <ScrollAnimate className="mt-10 grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Secure</h3>
              <p>
                Transfer money to Nigeria bank accounts with just a few taps on
                your phone.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Convenient</h3>
              <p>
                Send money to friends and family in Nigeria anytime, anywhere.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="#">
                <Button intent="primary">Get started</Button>
              </Link>
              <Link href="#">
                <Button intent={"outlined"} className="flex items-center gap-2">
                  <p>Learn more</p>{" "}
                  <MoveRight className="ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <Image src={""} alt="Bills" className="w-full h-full" />
        </ScrollAnimate>
      </div>
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 lg:p-16 rounded-3xl">
        <ScrollAnimate>
          <Image src={""} alt="Bills" className="w-full h-full" />
        </ScrollAnimate>
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Transfer Money Easily with Paytonic
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              Send money to other Paytonic users using their username. It&apos;s
              quick and hassle-free.
            </p>
          </ScrollAnimate>
          <ScrollAnimate className="mt-10 grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Secure Transfers</h3>
              <p>
                Transfer money securely to friends and family with just a
                username.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-black">Instant Payments</h3>
              <p>
                Experience instant payments when you send money to Paytonic
                users.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="#">
                <Button intent="primary">Get started</Button>
              </Link>
              <Link href="#">
                <Button intent={"outlined"} className="flex items-center gap-2">
                  <p>Learn more</p>{" "}
                  <MoveRight className="ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Send;
