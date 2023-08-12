/** @format */

import { HiShoppingBag } from "react-icons/hi";
import { FaShopware } from "react-icons/fa";
import { FaCaravan } from "react-icons/fa";

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
		title: "Pending Order",
		color: "rgba(110, 176, 254, 1)",
		backgroundColor: "rgba(204, 224, 254, 1)",
	},

	{
		id: 3,
		ordericons: FaCaravan,
		number: 76,
		title: "Total Dispatch",
		color: "rgba(0, 200, 171, 1)",
		backgroundColor: "rgba(187, 251, 241, 1)",
	},
];

export default orderData;
