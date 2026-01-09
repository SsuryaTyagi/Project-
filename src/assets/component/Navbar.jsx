import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Navbar = () => {
  return (
    <motion.div
      className="w-full p-[20px] bg-black flex justify-center  text-white text-2xl font-bold gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <NavItem to="/" label="web UI" />
      <NavItem to="/card" label="Card" />
      <NavItem to="/bit" label="ReactBits" />
      <NavItem to="/form" label="Form" />
    </motion.div>
  );
};

const NavItem = ({ to, label }) => (
  <motion.div variants={itemVariants}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative cursor-pointer transition-colors duration-300
         ${isActive ? "text-[#e46033]" : "text-white"}`
      }
    >
      {label}
    </NavLink>
  </motion.div>
);

export default Navbar;
