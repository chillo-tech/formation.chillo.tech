import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const PricingSubscriptionCard = ({
  pricing,
}: {
  pricing: {
    label: string;
    price: string;
    options: string[];
  };
}) => {
  return (
    <div className="relative w-full md:max-w-[450px] shadow-md rounded-md">
      <div className="absolute -top-10 -left-3 md:-top-8 md:-left-3 lg:-left-10 lg:-top-12 w-24 z-10">
        <Image
          src="/images/money-back.svg"
          height={95}
          width={95}
          alt="money-back"
        />
      </div>
      <div className="border border-gray-100  transition-colors duration-200 ease-in-out overflow-hidden rounded-l relative ">
        <div className="w-full flex justify-center">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent  w-full"></div>
          </div>
          <div className="absolute top-0 -translate-y-1/3 w-3/4">
            <div className="bg-violet-100 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        <div className="px-6 md:px-8 lg:px-12 py-12 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div>
              <span className="font-bold text-4xl text-blue-500">
                {pricing.price}
              </span>
            </div>
            <div className="uppercase text-sm font-medium tracking-wider">
              {pricing.label}
            </div>
          </div>
          <div className="mt-10 w-full">
            <ul className="mb-8 space-y-4 text-left">
              {pricing.options.map((option, index) => (
                <li
                  key={`${pricing.label}-${index}`}
                  className="flex flex-row items-start space-x-3"
                >
                  <div>
                    <FaCheck size={20} />
                  </div>
                  <span className="font-medium md:font-semibold text-text ">
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-blue-500  transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
            href="#"
          >
            Abonnez-vous et Economisez
          </Link>
          <p className="my-2 text-sm font-semibold text-heading opacity-45">
            Annulez à tout moment !
          </p>
        </div>
      </div>
    </div>
  );
};

export { PricingSubscriptionCard };
