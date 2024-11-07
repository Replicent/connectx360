import React, { ReactNode } from "react";
import { Button as Btn } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const defaultClass =
  "w-full py-3 rounded-lg font-medium hover:bg-gray-300 space-x-2";

const ButtonFunction = (props: ButtonProps) => {
  return (
    <Btn onClick={props.onClick} className={cn(defaultClass, props.className)}>
      {props.children}
    </Btn>
  );
};

const Button = (props: ButtonProps) => {
  return props.href ? (
    <Link href={props.href}>
      <ButtonFunction {...props} />
    </Link>
  ) : (
    <ButtonFunction {...props} />
  );
};

export default Button;
