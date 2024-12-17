import Link from "next/link";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import { Button } from "./ui/button";
const Header = () => {
    return ( 
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center"> 
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Logo
                        <span className="text-accent">.</span> 
                    </h1>
                </Link>
                
                {/* Desktop nav contact button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact" />
                    <Button> İletişim</Button>
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                    <Link href="/contact" />
                </div>
            </div>
        </header>
     );
}
 
export default Header;