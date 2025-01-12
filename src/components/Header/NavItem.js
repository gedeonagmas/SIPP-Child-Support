import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ navItem = {} }) => {
  const { pathname } = useRouter();

  const { name, href } = navItem;
  // const subHref = subNavItems.map((item) => item.href);
  // const current = pathname === href || subHref.includes(pathname);

  return (
    <li className={``}>
      <Link href={href}>
        <a href={href}>{name}</a>
      </Link>
      {/* <ul>
        {subNavItems.map((subItem) => (
          <li key={subItem.id}>
            <Link href={subItem.href}>
              <a href={href}>{subItem.name}</a>
            </Link>
            <ul>
              {subItem.subItems?.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <a href={href}>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </li>
  );
};

export default NavItem;
