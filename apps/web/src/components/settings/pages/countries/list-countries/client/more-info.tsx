"use client";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import { Button } from "@/components/ui/button";

import { MoreVertical } from "lucide-react"

const MoreInfo = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost" size={"icon"}><MoreVertical /></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="update">Edit Fields</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export {MoreInfo};