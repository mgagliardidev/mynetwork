// components/Popover.js
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

export default function ResponsivePopover() {
  return (
    <div className="sm:hidden">
      <Popover v-slot="{ open }">
        <PopoverButton className="text-gray-700 p-2 rounded-md">
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
        <PopoverPanel className="inset-0 bg-white z-10 flex items-center justify-center fixed">
          <div className="absolute top-2 right-6">
          <PopoverButton className="text-gray-700 p-2 rounded-md h-fit w-fit mt-5 ml-14">
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
}
