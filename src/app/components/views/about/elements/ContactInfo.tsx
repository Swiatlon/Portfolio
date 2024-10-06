'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ContactInfo = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('przemyslaw.swiatlon@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <article className="grid-container">
      <div className="grid place-items-center place-content-center text-center p-7 gap-12">
        <Image
          src="/assets/images/grid4.png"
          alt="Contact Information"
          width={700}
          height={0}
          className="w-10/12 sm:w-3/4 sm:h-[256px] md:h-[300px] h-fit object-contain"
        />
        <header className="space-y-2 grid place-items-center">
          <h3 className="grid-headtext">Contact Me</h3>
          <p className="grid-subtext">
            Looking to get in touch? Whether you have a project in mind, need assistance, or just want to connect, I’m
            here to help
          </p>
          <div
            className="copy-container"
            onClick={handleCopy}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleCopy()}
          >
            <div className="flex m-auto gap-2">
              <Image
                src={hasCopied ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
                alt={hasCopied ? 'Copied!' : 'Copy Email'}
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <p className="text-[#afb0b6] text-xs sm:text-base font-generalsans sm:w-full md:w-3/4">
                przemyslaw.swiatlon@gmail.com
              </p>
            </div>
          </div>
        </header>
      </div>
    </article>
  );
};

export default ContactInfo;
