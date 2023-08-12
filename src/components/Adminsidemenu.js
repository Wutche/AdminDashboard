/** @format */

import React from "react";
import Logo from "../components/Logo";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { SiAdobeaudition } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Adminsidemenu = () => {
	return (
		<div className="adminsidemenu">
			<div className="navitems">
				<Logo />

				<div className="navlinks">
					<NavLink to={"/overview"}>
						{" "}
						<span>
							{" "}
							<RiDashboard2Fill />{" "}
						</span>
						Overview
					</NavLink>

					<NavLink to={"/order"}>
						{" "}
						<span>
							{" "}
							<FaShopify />{" "}
						</span>
						Orders
					</NavLink>

					<NavLink>
						{" "}
						<span>
							<MdInventory />
						</span>
						Inventory
					</NavLink>

					<NavLink>
						{" "}
						<span>
							<VscFeedback />
						</span>
						Reviews
					</NavLink>

					<NavLink>
						{" "}
						<span>
							<SiAdobeaudition />
						</span>{" "}
						Audit
					</NavLink>
				</div>
			</div>

			<div className="settings">
				<NavLink to={"/settings"}>
					{" "}
					<span>
						{" "}
						<AiFillSetting />{" "}
					</span>{" "}
					Settings
				</NavLink>

				<NavLink>
					{" "}
					<span>
						<BiLogOutCircle />{" "}
					</span>{" "}
					Log Out
				</NavLink>
			</div>
		</div>
	);
};

export default Adminsidemenu;
