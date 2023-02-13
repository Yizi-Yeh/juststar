import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface LinkProps {
  href: string;
}

export default function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return <NextLink href={href}>{children}</NextLink>;
}
