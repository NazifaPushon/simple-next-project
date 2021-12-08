import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Navbar = () => {
    return (
        
            <nav>
               <div className="logo">
                    <Image src="/logo.png" alt="" width={128} height={77}/>
                </div>
                
                <Link href="/ningas"><a>Ningas</a></Link>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
            
            </nav>
            
        
    );
};

export default Navbar;