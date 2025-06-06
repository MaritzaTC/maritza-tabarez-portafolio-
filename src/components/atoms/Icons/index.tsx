import React from "react";
import { Icon } from '@iconify/react';
import Image from 'next/image';

const IconLinks = ({ icon }: { icon: string }) => {
    return (
        <div className="bg-[#FFB400] rounded-full w-12 h-12 flex justify-center items-center " >
              <Icon icon={`${icon}`} width='28' height='28' className='text-black'   />
        </div>
    );
};  


const IconCard1 = ({ icon }: { icon: string }) => {
    return (
        <div className="  flex justify-center items-center">
              <Icon icon={`${icon}`} width='68' height='68' className='text-[#FFB400]' />
        </div>
    );
}
const IconCard2 = ({ icon }: { icon: string }) => {
    return (
        <div className="  flex justify-center items-center">
              <Icon icon={`${icon}`} width='74' height='74' className='text-[#FFB400]' />
        </div>
    );
}
const IconCard3 = ({ icon }: { icon: string }) => {
    return (
        <div className="  flex justify-center items-center">
              <Icon icon={`${icon}`} width='78' height='78' className='text-[#FFB400]' />
        </div>
    );
}
const IconSkill = () => {
    return (
        <Image
        src="/Icons.png"
        alt="Check mark"
        width={15}
        height={15}
      />
    );
}


/**
 * Renders a circular button containing an icon centered within it.
 *
 * @param icon - The name or identifier of the icon to display.
 * @param className - Optional additional CSS classes to apply to the icon.
 * @returns A JSX element representing the icon button.
 */
const ButtonIcon = ({ icon, className }: { icon: string; className?: string }) => {
    return (
        <div className=" rounded-full w-12 h-12 flex justify-center items-center " >
              <Icon icon={`${icon}`} width='16' height='16' className={`text-[18px] font-bold ${className ?? ''}`}   />
        </div>
    );
};  

export {IconLinks, IconCard1,IconCard2,IconCard3,IconSkill,ButtonIcon};