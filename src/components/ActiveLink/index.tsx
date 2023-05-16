import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
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
  const { asPath } = useRouter();

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
