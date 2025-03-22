import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import Link from "next/link";

const svg1 = (
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.76562 0C5.42867 0 6.06455 0.263392 6.53339 0.732233C7.00223 1.20107 7.26562 1.83696 7.26562 2.5C7.26562 3.16304 7.00223 3.79893 6.53339 4.26777C6.06455 4.73661 5.42867 5 4.76562 5C4.10258 5 3.4667 4.73661 2.99786 4.26777C2.52902 3.79893 2.26562 3.16304 2.26562 2.5C2.26562 1.83696 2.52902 1.20107 2.99786 0.732233C3.4667 0.263392 4.10258 0 4.76562 0ZM16.2656 0C16.9287 0 17.5646 0.263392 18.0334 0.732233C18.5022 1.20107 18.7656 1.83696 18.7656 2.5C18.7656 3.16304 18.5022 3.79893 18.0334 4.26777C17.5646 4.73661 16.9287 5 16.2656 5C15.6026 5 14.9667 4.73661 14.4979 4.26777C14.029 3.79893 13.7656 3.16304 13.7656 2.5C13.7656 1.83696 14.029 1.20107 14.4979 0.732233C14.9667 0.263392 15.6026 0 16.2656 0ZM0.265625 9.33438C0.265625 7.49375 1.75937 6 3.6 6H4.93437C5.43125 6 5.90312 6.10938 6.32812 6.30312C6.2875 6.52812 6.26875 6.7625 6.26875 7C6.26875 8.19375 6.79375 9.26562 7.62187 10C7.61562 10 7.60938 10 7.6 10H0.93125C0.565625 10 0.265625 9.7 0.265625 9.33438ZM12.9312 10C12.925 10 12.9187 10 12.9094 10C13.7406 9.26562 14.2625 8.19375 14.2625 7C14.2625 6.7625 14.2406 6.53125 14.2031 6.30312C14.6281 6.10625 15.1 6 15.5969 6H16.9312C18.7719 6 20.2656 7.49375 20.2656 9.33438C20.2656 9.70312 19.9656 10 19.6 10H12.9312ZM7.26562 7C7.26562 6.20435 7.5817 5.44129 8.1443 4.87868C8.70691 4.31607 9.46998 4 10.2656 4C11.0613 4 11.8243 4.31607 12.3869 4.87868C12.9496 5.44129 13.2656 6.20435 13.2656 7C13.2656 7.79565 12.9496 8.55871 12.3869 9.12132C11.8243 9.68393 11.0613 10 10.2656 10C9.46998 10 8.70691 9.68393 8.1443 9.12132C7.5817 8.55871 7.26562 7.79565 7.26562 7ZM4.26562 15.1656C4.26562 12.8656 6.13125 11 8.43125 11H12.1C14.4 11 16.2656 12.8656 16.2656 15.1656C16.2656 15.625 15.8937 16 15.4312 16H5.1C4.64062 16 4.26562 15.6281 4.26562 15.1656Z"
      fill="black"
    />
  </svg>
);

const svg2 = (
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.71909 11C10.3097 11 13.2191 8.5375 13.2191 5.5C13.2191 2.4625 10.3097 0 6.71909 0C3.12847 0 0.219092 2.4625 0.219092 5.5C0.219092 6.70625 0.678467 7.82187 1.45659 8.73125C1.34722 9.025 1.18472 9.28438 1.01284 9.50313C0.862842 9.69688 0.709717 9.84688 0.597217 9.95C0.540967 10 0.494092 10.0406 0.462842 10.0656C0.447217 10.0781 0.434717 10.0875 0.428467 10.0906L0.422217 10.0969C0.250342 10.225 0.175342 10.45 0.244092 10.6531C0.312842 10.8562 0.503467 11 0.719092 11C1.40034 11 2.08784 10.825 2.65972 10.6094C2.94722 10.5 3.21597 10.3781 3.45034 10.2531C4.40972 10.7281 5.52534 11 6.71909 11ZM14.2191 5.5C14.2191 9.00937 11.1222 11.6531 7.45347 11.9688C8.21284 14.2937 10.7316 16 13.7191 16C14.9128 16 16.0285 15.7281 16.991 15.2531C17.2253 15.3781 17.491 15.5 17.7785 15.6094C18.3503 15.825 19.0378 16 19.7191 16C19.9347 16 20.1285 15.8594 20.1941 15.6531C20.2597 15.4469 20.1878 15.2219 20.0128 15.0938L20.0066 15.0875C20.0003 15.0812 19.9878 15.075 19.9722 15.0625C19.941 15.0375 19.8941 15 19.8378 14.9469C19.7253 14.8438 19.5722 14.6938 19.4222 14.5C19.2503 14.2812 19.0878 14.0187 18.9785 13.7281C19.7566 12.8219 20.216 11.7063 20.216 10.4969C20.216 7.59687 17.5628 5.21875 14.1972 5.0125C14.2097 5.17188 14.216 5.33437 14.216 5.49687L14.2191 5.5Z"
      fill="black"
    />
  </svg>
);

const svg3 = (
  <svg
    width="21"
    height="16"
    viewBox="0 0 21 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_46_339)">
      <path
        d="M6.59375 2C3.28125 2 0.59375 4.6875 0.59375 8C0.59375 11.3125 3.28125 14 6.59375 14H14.5938C17.9062 14 20.5938 11.3125 20.5938 8C20.5938 4.6875 17.9062 2 14.5938 2H6.59375ZM16.0938 5.25C16.4253 5.25 16.7432 5.3817 16.9776 5.61612C17.2121 5.85054 17.3438 6.16848 17.3438 6.5C17.3438 6.83152 17.2121 7.14946 16.9776 7.38388C16.7432 7.6183 16.4253 7.75 16.0938 7.75C15.7622 7.75 15.4443 7.6183 15.2099 7.38388C14.9754 7.14946 14.8438 6.83152 14.8438 6.5C14.8438 6.16848 14.9754 5.85054 15.2099 5.61612C15.4443 5.3817 15.7622 5.25 16.0938 5.25ZM12.8438 9.5C12.8438 9.16848 12.9754 8.85054 13.2099 8.61612C13.4443 8.3817 13.7622 8.25 14.0938 8.25C14.4253 8.25 14.7432 8.3817 14.9776 8.61612C15.2121 8.85054 15.3438 9.16848 15.3438 9.5C15.3438 9.83152 15.2121 10.1495 14.9776 10.3839C14.7432 10.6183 14.4253 10.75 14.0938 10.75C13.7622 10.75 13.4443 10.6183 13.2099 10.3839C12.9754 10.1495 12.8438 9.83152 12.8438 9.5ZM5.84375 6.25C5.84375 5.83437 6.17812 5.5 6.59375 5.5C7.00938 5.5 7.34375 5.83437 7.34375 6.25V7.25H8.34375C8.75937 7.25 9.09375 7.58437 9.09375 8C9.09375 8.41563 8.75937 8.75 8.34375 8.75H7.34375V9.75C7.34375 10.1656 7.00938 10.5 6.59375 10.5C6.17812 10.5 5.84375 10.1656 5.84375 9.75V8.75H4.84375C4.42812 8.75 4.09375 8.41563 4.09375 8C4.09375 7.58437 4.42812 7.25 4.84375 7.25H5.84375V6.25Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_46_339">
        <path d="M0.59375 0H20.5938V16H0.59375V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function EnterCode() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#282D4E]">
      <Card className="md:w-2/3 flex md:flex-row m-4 gap-0 md:m-0">
        <div className=" flex-1">
          <CardHeader>
            <CardDescription>
              <Link href="/dashboard">← Back to Dashboard</Link>
            </CardDescription>
            <CardTitle className=" text-3xl font-bold">
              Enter Event code
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-center">
            <div className=" p-4 flex-1 h-full flex flex-col items-center ">
              <p className="text-[#4B5563] mb-8">
                Enter the 6-digit code provided by the event organizer
              </p>
              <InputOTP maxLength={6} className="flex justify-center space-x-2">
                <InputOTPGroup>
                  {[...Array(6)].map((_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className="w-12 h-12 border border-gray-400 rounded-md text-center text-lg font-semibold"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              <button className="bg-[#4F46E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-74">
                Join
              </button>
              <div className="flex flex-col items-center text-sm mt-2">
                <p className="text-gray-500">{"Don'"}t have a code?</p>
                <Link href="/createevent" className="text-[#4F46E5]">
                  Create Event
                </Link>
              </div>
            </div>
          </CardContent>
        </div>
        <div className=" flex-1 h-full flex flex-col items-center rounded-r-lg  gap-2">
          <Image
            src="/room.png"
            alt="Picture of room"
            width={400}
            height={150}
            style={{ width: "300px", height: "225px" }}
            className="rounded-lg"
          />
          <div className="space-y-2 text-gray-700 text-sm flex flex-col items-center gap-1">
            <p className="flex flex-row gap-2">
              {svg1}Join virtual meeting instanly
            </p>
            <p className="flex flex-row gap-2">{svg3}Customizable 2d space</p>
            <p className="flex flex-row gap-2">{svg2}Interactive chat</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EnterCode;
