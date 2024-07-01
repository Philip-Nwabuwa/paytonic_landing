import Link from "next/link";
import { Button } from "./Button";

const Cta = () => {
  return (
    <section className="max-width">
      <div className="bg-[#fff] grid grid-cols-2 items-center p-10 gap-4 rounded-3xl">
        <h4 className="text-4xl font-bold">
          Seamless Financial Transactions Made Easy
        </h4>
        <div>
          <p className="text-lg mb-6">
            Experience hassle-free financial transactions with the Paytonic app.
            Sign up today!
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
    </section>
  );
};

export default Cta;
