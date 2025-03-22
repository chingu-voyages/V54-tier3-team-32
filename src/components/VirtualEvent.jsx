import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RefreshCw } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { CircleAlert } from 'lucide-react';

const VirtualEventCard = () => {
  const numberOfParticipents = [5, 10, 15, 20, 25, 30];

  return (
    <Card className="w-[672px]">
      <CardHeader>
        <CardTitle className="font-bold text-3xl text-[#111827]">
          Create a New Virtual Event
        </CardTitle>
        <CardDescription className="text-base text-[#4B5563]">
          Set up your virtual space and invite participants
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-[#374151]"
              >
                Event Name
              </Label>
              <Input id="name" placeholder="Name of your event" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="framework"
                className="text-sm font-medium text-[#374151]"
              >
                Maximum Participants
              </Label>
              <Select>
                <SelectTrigger id="framework" className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {numberOfParticipents.map((numberOfParticipent, index) => (
                    <SelectItem key={index} value={numberOfParticipent}>
                      {numberOfParticipent}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full gap-1.5 space-y-1.5">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-[#374151]"
              >
                Event Description (Optional)
              </Label>
              <Textarea
                placeholder="Describe your event..."
                id="message"
                rows="5"
                cols="50"
                className="h-30 resize-none"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-[#374151]"
              >
                Event Code
              </Label>
              <div className="flex justify-between gap-4">
                <Input
                  id="name"
                  placeholder="Generated Code"
                  className="flex-1 text-[#ADAEBC] bg-[#F9FAFB]"
                  readOnly={true}
                />
                <Button
                  variant="outline"
                  className="bg-[#EDE9FE] text-[#6D28D9] text-base"
                >
                  <RefreshCw color="black" />
                  Generate Code
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-between mt-6 gap-10">
        <div className="flex justify-between gap-4 w-full">
          <Button variant="outline" className="flex-1 bg-[#F3F4F6]">
            Cancel
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white hover:text-white"
          >
            <Rocket />
            Create Event
          </Button>
        </div>
        <p className="text-sm text-[#4B5563] self-start flex items-center gap-2">
          <CircleAlert fill="#111" color="white" size={20} /> Need help? Check
          our guide on creating virtual events
        </p>
      </CardFooter>
    </Card>
  );
};

export default VirtualEventCard;
