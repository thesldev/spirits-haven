"use client";

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        {/* display user menue avatr and dropdown */}
        <div
          onClick={toggleOpen}
          className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
        >
          <Avatar />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            <div>
              <Link href="/orders">
                <MenuItem onClick={toggleOpen}>Your Ordrs</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  toggleOpen();
                  signOut();
                }}
              >
                Logout
              </MenuItem>
            </div>
            <div>
              <Link href="/login">
                <MenuItem onClick={toggleOpen}>Login</MenuItem>
              </Link>
              <Link href="/register">
                <MenuItem onClick={toggleOpen}>Register</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
