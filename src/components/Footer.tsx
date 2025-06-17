import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/Froztedd"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Charan Kumar
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Location:</p>
            <p className="text-sm font-semibold">Los Angeles, CA</p>
          </span>
        </span>
        <Link
          href="https://mail.google.com/mail/?view=cm&to=d.charankumarnaidu@gmail.com"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">d.charankumarnaidu@gmail.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
