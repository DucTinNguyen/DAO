import React from 'react'
import icLogo from '@icons/logoApp.svg'
import Image from 'next/image'
import Link from 'next/link';
import arrow from '@icons/arrow.svg'


interface FooterLink {
    title: string;
    href: string;
    external?: boolean;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerData: FooterSection[] = [
    {
        title: "EXPLORE",
        links: [
            { title: "About MitosisDAO", href: "/" },
            { title: "Science", href: "/science" },
            { title: "Projects", href: "/project" },
            { title: "Contributors", href: "/contributor" },
            { title: "MITOSIS Token", href: "/mitosis-token" },
        ]
    },
    {
        title: "INFO",
        links: [
            { title: "Etherscan", href: "https://etherscan.io/address/0xb1D17eCAdbdae9CA84f40b26eB11F2905903b993" },
            { title: "Dexscreener", href: "https://dexscreener.com/ethereum/0x80f5343a3e5c18b4e9872d04f3046fda2e0f2c83" },
            { title: "Dextools", href: "https://www.dextools.io/app/en/ether/pair-explorer/0x80f5343a3e5c18b4e9872d04f3046fda2e0f2c83?t=1733414899125" },
            { title: "Buy", href: "https://app.uniswap.org/swap?outputCurrency=0xb1D17eCAdbdae9CA84f40b26eB11F2905903b993&chain=ethereum" },
        ]
    },
    {
        title: "COMMUNITY",
        links: [
            { title: "Join our community", href: "https://t.me/MitosisDAO", external: true },
            { title: "Follow X", href: "https://x.com/Mitosis_DAO", external: true },
        ]
    }
];

const Footer = () => {
  return (
      <main className='bg-[#0A090E] border border-[rgba(255,255,255,0.08)] font-roBoTo px-4 lg:px-0'>
          <section className='w-full h-full lg:max-w-[1200px] mx-auto py-[60px] flex flex-col gap-3 lg:flex-row lg:justify-between'>
              <Link href={'/'} className='w-[180px] h-20'>
                  <Image src={icLogo} alt='' className='w-full h-full'/>
              </Link>
              <div className="w-full lg:w-[600px] grid grid-cols-2 md:grid-cols-3 gap-3">
                  {footerData.map((section) => (
                      <div key={section.title} className="space-y-6">
                          <h2 className="text-[rgba(255,255,255,0.60)] text-sm font-normal uppercase">
                              {section.title}
                          </h2>
                          <ul className="space-y-4">
                              {section.links.map((link) => (
                                  <li key={link.title}>
                                      <FooterLink {...link} />
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </section>
          <p className=' py-4 lg:py-10 border-t-[1px] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.6)] text-sm text-center'>@2024 MitosisDAO. All rights reserved. </p>
      </main>
  )
}

export default Footer


const FooterLink: React.FC<FooterLink> = ({ title, href, external }) => {
    const linkClasses = "text-white text-sm font-normal flex items-center justify-between group";

    if (external) {
        return (
            <Link
                href={href}
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>{title}</span>
                <Image src={arrow} alt=''/>
            </Link>
        );
    }

    return (
        <Link href={href} target='_blank' className={linkClasses}>
            <span>{title}</span>
        </Link>
    );
};