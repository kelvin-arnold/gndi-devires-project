// Component generated with util/vox-create-component.js
import React from "react";
import {Overlay, ModalWrapper, ModalContainer} from "./Modal.styled";
import {ModalProps} from "./Modal.types";
import {UIText, UIButton, UIICon} from "./../../ui";

export const Modal: React.VFC<ModalProps> = ({
	title,
	description,
	primaryAction,
	secondaryAction,
	showModal = false,
	onModalClose = () => {},
	...args
}) => {
	// Context Here
	// States Here
	const [visible, setVisible] = React.useState<boolean>();
	// Effects Here
	React.useEffect(() => {
		setVisible(showModal);
	}, [showModal]);
	// Handlers Here
	const hideModal = () => {
		setVisible(!visible);
		onModalClose();
	};
	if (!visible) return null;
	return (
		<ModalContainer {...args}>
			<Overlay onClick={hideModal} />
			<ModalWrapper>
				<div className="header">
					{title && <UIText preset="HEADLINE">{title}</UIText>}{" "}
					<UIICon name="times" color="DARK" onClick={hideModal} />
				</div>
				<div className="body">{description && <UIText color="GREY">{description}</UIText>}</div>
				<div className="footer">
					{secondaryAction && (
						<UIButton
							outline
							preset="PRIMARY"
							{...{onClick: secondaryAction.onClick, label: secondaryAction.label}}
						/>
					)}
					{primaryAction && (
						<UIButton {...{onClick: primaryAction.onClick, label: primaryAction.label}} />
					)}
				</div>
			</ModalWrapper>
		</ModalContainer>
	);
};

export default Modal;
