import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import Image from 'next/image';
import Link from 'next/link';
  

function EnterCode() {
    return (
        <div className='h-screen flex items-center justify-center '>
            <Card className='bg-gray-200 w-[90%] md:w-2/3 h-2/3' >
  <CardHeader>
  <CardDescription><Link href="/dashboard">Back to Dashboard</Link></CardDescription>
    <CardTitle className=' text-3xl font-bold'>Enter Event code</CardTitle>
    
  </CardHeader>
  <CardContent className='flex flex-col items-center justify-center md:flex-row md:flex-row-reverse'>
    <div className=' bg-gray-200 flex-1'>
    <p ></p>
        <Image
        src="/room.png"
        alt="Picture of room"
        width={200}
        height={200}
      />
        join virtual meeting instanly
        interactive chat
        Customizable 2d space
        </div>

        <div className=' bg-gray-300 p-4 flex-1 w-full md:h-full'>
            <p>Enter the 6-digit code provided by the event organizer</p>
        <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 '>Join</button>
        <div>
            <p>{"Don'"}t have a code?</p>
            <Link href="/createevent">Create Event</Link>
        </div>
            </div>
  </CardContent>
</Card>

        </div>
    );
}

export default EnterCode;