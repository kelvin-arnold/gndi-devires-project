import React, {useContext} from "react";
import {UIICon, UIText} from "../../ui";
import AuthContext from "../../context/AuthContext";
import {Tooltipwrapper, UserNavWrapper, UserNavItem} from "./Header.styled";

const UserNav: React.FC = () => {
	const {user, removeSession} = useContext(AuthContext);
	return (
		<div className="flex flex-row items-center cursor-pointer">
			<UIICon name="user" size="xs" color="LIGHTGREY" />
			<UserNavWrapper>
				<div className="ml-2 mr-1">
					<UIText color="LIGHTGREY">Olá, {user?.name ?? "Camila"}</UIText>
				</div>
				<UIICon name="chevronDown" size="xs" color="PRIMARY" />
				<Tooltipwrapper>
					<div className="py-1 flex flex-col">
						<UserNavItem>
							<UIText
								onClick={() => console.log("alterar senha")}
								preset="SUBTITLE"
								color="PRIMARY">
								Alterar senha
							</UIText>
						</UserNavItem>
						<UserNavItem>
							<UIText
								onClick={() => console.log("Gerenciar notificações")}
								preset="BODY"
								color="LIGHTGREY">
								Gerenciar notificações
							</UIText>
						</UserNavItem>
						<UserNavItem>
							<UIText onClick={() => removeSession()} preset="BODY" color="LIGHTGREY">
								Sair
							</UIText>
						</UserNavItem>
						<div className="border-t border-gray-light border-opacity-20 px-5 py-1">
							<UIText preset="BODY_03" color="LIGHTGREY">
								Último acesso: 22/08/2020
							</UIText>
						</div>
					</div>
				</Tooltipwrapper>
			</UserNavWrapper>
		</div>
	);
};
export default UserNav;
