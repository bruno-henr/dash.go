import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { ReactElement, ReactNode, cloneElement } from "react";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

const ActiveLink: React.FC<IActiveLinkProps> = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}) => {
  const asPath = usePathname()

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath == rest.as) ) {
    isActive = true;
  }

  if(
    !shouldMatchExactHref && (asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) { isActive = true; }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
};

export default ActiveLink;
