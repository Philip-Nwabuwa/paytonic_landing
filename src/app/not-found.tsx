import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/common/Button";
import NotFoundImage from "@/assets/images/404/404.svg";

export default function NotFound() {
  return (
    <div className="max-width flex flex-col gap-10 items-center justify-center">
      <Image src={NotFoundImage} alt={"404 Image"} />
      <h2 className="text-3xl sm:text-5xl font-black text-gray-900 ">
        Could not find requested resource
      </h2>
      <Link href="/">
        <Button intent={"primary"}>Return Home</Button>
      </Link>
    </div>
  );
}
