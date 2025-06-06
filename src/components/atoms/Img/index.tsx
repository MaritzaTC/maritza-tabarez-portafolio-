import React from 'react'
import Image from 'next/image';


/**
 * Renders a circular profile image using the Next.js `Image` component.
 *
 * @returns {JSX.Element} A styled image element with a fixed size and rounded appearance.
 */
const Img1 = () => {
    return (
       <Image
             src="/maritza1.png"
             alt="Maritza"
             width={150}
             height={150}
             className=' w-[150px] h-full rounded-full aspect-square object-cover bg-gray-100'
           />
    );
}

const Img2 = () => {
    return (
       <Image 
             src="/Maritza.png"
             alt="Photo of Maritza"
             width={325.72}
             height={459.09}
           />
    );
}
const KnowledgeImg = ({ icon }: { icon: string }) => {
    return (
        <Image
        src={icon}
        alt="Check mark"
        width={68}
        height={68}
      />
    );
}
const Img3 = ({ img}: { img: string }) => {
    return (
       <Image 
             src={img}
             alt="Check mark"
             width={310}
             height={300}
             
           />
    );
}



export {Img1,Img2,KnowledgeImg,Img3};


