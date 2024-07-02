import Link from "next/link";
import { Button } from "./Button";
import { ScrollAnimate } from "./ScrollAnimate";

const Cta = () => {
  return (
    <section className="max-width">
      <div className="bg-[#fff] p-10 lg:p-16 rounded-3xl">
        <ScrollAnimate>
          <div className="grid grid-cols-2 items-center gap-4">
            <h4 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl gradient-text">
              Seamless Financial Transactions Made Easy
            </h4>
            <div>
              <p className="text-lg mb-6">
                Experience hassle-free financial transactions with the Paytonic
                app. Sign up today!
              </p>
              <div className="flex gap-4">
                <Button intent={"primary"}>Get Started</Button>
                <Link href="#">
                  <Button intent={"outlined"}>
                    Learn more <span aria-hidden="true">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Cta;
