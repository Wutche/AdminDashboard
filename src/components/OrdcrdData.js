/** @format */

import { HiShoppingBag } from "react-icons/hi";
import { FaShopware } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";

const orderData = [
	{
		id: 1,
		ordericons: HiShoppingBag,
		number: 47,
		title: "Order",
		color: "rgba(255, 179, 28, 1)",
		backgroundColor: "rgb(250, 231, 180)",
	},

	{
		id: 2,
		ordericons: FaShopware,
		number: 56,
		title: "Pending",
		color: "rgba(110, 176, 254, 1)",
		backgroundColor: "rgba(204, 224, 254, 1)",
	},

	{
		id: 3,
		ordericons: TbTruckDelivery,
		number: 76,
		title: "Delivered",
		color: "rgba(0, 200, 171, 1)",
		backgroundColor: "rgba(187, 251, 241, 1)",
	},

	{
		id: 4,
		ordericons: HiUsers,
		number: 76,
		title: "Users",
		color: "rgba(255, 255, 255)",
		backgroundColor: "rgb(0, 0, 0)",
	},
];

export default orderData;
