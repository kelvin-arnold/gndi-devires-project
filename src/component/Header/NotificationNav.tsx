import React from "react";
import {UIBadge, UIICon, UIText} from "../../ui";
import {Tooltipwrapper, NotificationIconWrapper} from "./Header.styled";
import {Notification} from "./Header.types";

const NOTIFICATIONS: Notification[] = [
	{
		date: "11 Mar",
		title: "Você tem uma fatura atrasada",
		status: "read",
	},
	{
		date: "11 Mar",
		title: "Você tem uma fatura atrasada",
		status: "new",
	},
];

const NotificationItem = ({status, title, date}: Notification) => (
	<div className="py-3 px-5 hover:bg-secondary-lightest cursor-pointer" style={{width: 400}}>
		<div className="flex flex-row items-center">
			{status === "new" && <div className="w-1.5 h-1.5 rounded-full bg-primary mr-1" />}
			<UIText preset={status === "new" ? "SUBTITLE" : "BODY"}>{title}</UIText>
		</div>
		<div className="opacity-40">
			<UIText preset="BODY_02" color="LIGHTGREY">
				{date}
			</UIText>
		</div>
	</div>
);

const NotificationNav: React.FC = () => {
	return (
		<NotificationIconWrapper>
			<div className="absolute top-3 -right-0.5">
				<UIBadge size="SMALL" color="PRIMARY">
					3
				</UIBadge>
			</div>
			<UIICon name="notification" size="xs" color="LIGHTGREY" />
			<Tooltipwrapper>
				<div className="flex flex-row justify-between items-center px-5 py-3">
					<UIText preset="HEADLINE_06">Notificações</UIText>
					<UIICon name="settings" color="DARK" onClick={() => console.log("settings")} />
				</div>
				{NOTIFICATIONS.map((notification) => NotificationItem(notification))}
			</Tooltipwrapper>
		</NotificationIconWrapper>
	);
};
export default NotificationNav;
