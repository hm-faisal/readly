import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex justify-between items-center px-12 bg-[rgba(0,0,0,0.7)]">
      <div className="">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={50}
          height={25}
          className="rounded-lg"
        />
      </div>
      <div className="">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-2">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
              <Link href="/profile" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="space-x-2">
        {user ? (
          <>
            <LogoutLink className={navigationMenuTriggerStyle()}>
              Log out
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className={navigationMenuTriggerStyle()}>
              Sign in
            </LoginLink>
            <RegisterLink className={navigationMenuTriggerStyle()}>
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
