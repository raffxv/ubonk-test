'use-client'
import styles from "../styles";
import {Accordion, AccordionItem} from "@nextui-org/react";

import { IoMdCheckmarkCircleOutline  } from 'react-icons/io';

const icons = {
  check:  <IoMdCheckmarkCircleOutline size={22} className='text-green-500'/>,
};

const Accordions = () => {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    const itemClasses = {
      base: "p-2 w-full bg-transparent border-gray-800 border-1 rounded-2xl",
      title: "font-normal text-medium text-white",
      trigger: "px-2 py-0 data-[hover=true]:bg-default-100/10 rounded-full rounded-lg h-14 flex items-center",
      indicator: "text-medium",
      content: "text-small px-2",
    };

  return (
      <div className={`${styles.xPadding} lg:mx-20 lg:px-20 md:mt-20 lg:mt-0`}>
        <div className="justify-center items-center text-center">
       <h4 className="text-5xl text-center py-4 text-white font-extrabold">FAQs</h4>
       <h4 className="text-white/50 ">Most recent frequently ask about Unibonk Airdrop</h4>
       </div>
      <div className="flex justify-center items-center">
    
        <Accordion
          className="p-4 flex flex-col gap-1 w-full max-w-[600px]"
          itemClasses={itemClasses}
          defaultExpandedKeys={["2"]}
        >
          <AccordionItem
            key="1"
            aria-label="Connected devices"
            title="Connected devices"
          >
            <p className="text-gray-500">{defaultContent}</p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Apps Permissions"
            title="Apps Permissions"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Pending tasks"
            classNames={{ subtitle: "text-warning" }}
            title="Pending tasks"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Card expired"
            classNames={{ subtitle: "text-danger" }}
            title="Test tasks"
            
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordions;
