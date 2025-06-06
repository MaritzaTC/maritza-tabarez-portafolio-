import React from "react";

import ProgressPanel from "@/components/organisms/ProgressPanel";
import Skills from "@/components/organisms/Skills";
import PersonalInfo from "@/components/molecules/PersonalInfo";
import ContactInformation from "@/components/molecules/ContactInformation";
/**
 * Renders the left panel of the portfolio layout, containing personal information,
 * contact details, progress panel, and skills sections. The panel is styled to be sticky,
 * vertically aligned, and visually separated by horizontal rules.
 *
 * @component
 * @returns {JSX.Element} The rendered left panel component.
 */
export default function index() {
  return (
    <div className="sticky top-0 self-start w-[305px] min-h-screen p-12 bg-white flex flex-col gap-4 items-center">
      <PersonalInfo></PersonalInfo>
      <hr className="w-[220px] h-[1px] bg-gray-300 my-4 border-none" />
      <ContactInformation></ContactInformation>
      <hr className="w-[220px] h-[1px] bg-gray-300 my-4 border-none" />
      
      <ProgressPanel></ProgressPanel>
      <hr className="w-[220px] h-[1px] bg-gray-300 my-4 border-none" />
      <Skills></Skills>

    </div>
  );
}
