import Image from "next/image";

import { ScrollAnimate } from "@/components/common/ScrollAnimate";
import aboutImage from "@/assets/images/about.jpg";

const Manage = () => {
  return (
    <section className="w-full flex flex-col gap-10 max-width">
      <div className="bg-white grid lg:grid-cols-2 gap-10 p-10 lg:p-16 rounded-3xl">
        <div>
          <ScrollAnimate>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Transforming the Way You Manage Finances
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="mt-6 text-lg leading-6 text-gray-600">
              At Paytonic, we are dedicated to providing innovative solutions
              that simplify financial transactions. Our mission is to empower
              individuals and businesses to take control of their finances,
              making it easier than ever to pay bills, transfer money, and
              manage their accounts.
            </p>
          </ScrollAnimate>
        </div>
        <ScrollAnimate>
          <Image src={aboutImage} alt="Bills" className="w-full h-full" />
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Manage;
