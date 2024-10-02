"use client";

import React, { useState } from "react";
import { FaCar, FaPlane, FaTrain } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // Adjust the import path as needed

const IconSelector = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col justify-center items-center space-y-8 p-8">
        <div className="flex space-x-4">
          <Tooltip>
            <TooltipTrigger
              className={`cursor-pointer p-4 rounded-full ${
                selectedIcon === 'car' ? 'border-indigo-500' : 'border-gray-300'
              }`}
              onClick={() => handleIconClick('car')}
            >
              <FaCar size={40} color={selectedIcon === 'car' ? 'blue' : 'black'} />
            </TooltipTrigger>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              className={`cursor-pointer p-4 rounded-full ${
                selectedIcon === 'plane' ? 'border-indigo-500' : 'border-gray-300'
              }`}
              onClick={() => handleIconClick('plane')}
            >
              <FaPlane size={40} color={selectedIcon === 'plane' ? 'blue' : 'black'} />
            </TooltipTrigger>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              className={`cursor-pointer p-4 rounded-full ${
                selectedIcon === 'train' ? 'border-indigo-500' : 'border-gray-300'
              }`}
              onClick={() => handleIconClick('train')}
            >
              <FaTrain size={40} color={selectedIcon === 'train' ? 'blue' : 'black'} />
            </TooltipTrigger>
          </Tooltip>
        </div>

        <Tooltip>
          <TooltipTrigger
            className={`cursor-pointer p-4 rounded-full ${
              selectedIcon === 'dots' ? 'border-indigo-500' : 'border-gray-300'
            }`}
            onClick={() => handleIconClick('dots')}
          >
            <BsThreeDots size={40} color={selectedIcon === 'dots' ? 'blue' : 'black'} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Other</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default IconSelector;
