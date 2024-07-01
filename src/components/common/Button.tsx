import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
// import Loader from "./Loader";

const buttonStyles = cva(
  "border rounded-lg transitio-all hover:scale-95 duration-100 inline-flex justify-center items-center disabled:cursor-auto whitespace-nowrap font-medium",
  {
    defaultVariants: {
      block: false,
      intent: "primary",
      size: "md",
    },
    variants: {
      flex: {
        true: "flex flex-row",
      },
      block: {
        true: "flex w-full",
      },
      intent: {
        neutral:
          "!border-0 bg-transparent text-blue-950 hover:opacity-80 disabled:opacity-60",
        outlined:
          "border-blue-950 text-blue-950 hover:opacity-80 disabled:opacity-60",
        "light-outlined":
          "border-white text-white hover:opacity-80 disabled:opacity-60",
        "primary-outlined":
          " text-primary-main bg-primary-main/20 hover:opacity-80 disabled:opacity-60 !font-medium",
        primary:
          "border-transparent bg-primary-main hover:bg-opacity-70 disabled:bg-opacity-70 text-white font-bold",
        "dark-text":
          "border-transparent bg-transparent hover:bg-opacity-70 disabled:bg-opacity-70  text-black font-medium",
        light:
          "border-white bg-white hover:bg-opacity-70 disabled:bg-opacity-70  text-blue-950 font-semibold",
      },
      size: {
        lg: "py-4 px-8 items-center font-semibold text-xl",
        md: "h-12 py-1 px-5 items-center",
        sm: "h-10 px-3.5 items-center text-sm",
      },
    },
  }
);

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof buttonStyles> & {
    isLoading?: boolean;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    block?: boolean;
    center?: boolean;
    disabled?: boolean;
  };

export const Button = ({
  children,
  rightIcon,
  leftIcon,
  title,
  isLoading,
  intent,
  className,
  size,
  disabled = false,
  center,
  block,
  ...rest
}: ButtonProps) => {
  const _className = classNames(
    buttonStyles({ block, intent, size }),
    className
  );

  return (
    <button className={_className} disabled={disabled} {...rest}>
      <div className="flex flex-row items-center font-medium">
        {isLoading ? (
          <span className="mx-auto text-3xl my-auto">
            {/* <Loader className={classNames("text-current")} size={size} /> */}
          </span>
        ) : (
          <>
            {!!leftIcon && (
              <>
                <span className="mr-2">{leftIcon}</span>
                <span className="flex-1" />
              </>
            )}
            <span className="flex flex-row">{children || title}</span>
            {!!rightIcon && (
              <>
                <span className="flex-1" />
                <span className="ml-2 md:ml-4">{rightIcon}</span>
              </>
            )}
          </>
        )}
      </div>
    </button>
  );
};
