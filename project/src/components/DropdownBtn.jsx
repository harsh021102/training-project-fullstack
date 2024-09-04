"use client";
import { Dropdown } from "flowbite-react";

const DropdownBtn = ({title}) => {
  
    return (
      <Dropdown label={title} dismissOnClick={false} className="bg-white">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    );
}

export default DropdownBtn