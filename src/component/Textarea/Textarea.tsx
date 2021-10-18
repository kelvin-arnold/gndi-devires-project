// Component generated with util/vox-create-component.js
import React, {useEffect, useState} from "react";
import {UIText} from "../../ui";
import {TextareaWrapper, TextareaInput} from "./Textarea.styled";
import {TextareaProps} from "./Textarea.types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({label, maxLength, ...args}, inRef) => {
		// Refs
		const ref = React.useRef<HTMLTextAreaElement>(null);
		React.useImperativeHandle(inRef, () => ref.current!, [ref]);
		// Context Here
		// States Here
		const [length, setLength] = useState<number>(0);
		// Effects Here
		// Handlers Here
		return (
			<TextareaWrapper>
				{label && (
					<UIText preset="BODY_02" color="GREY">
						{label}
					</UIText>
				)}
				<TextareaInput {...args} ref={ref} onChange={(e) => setLength(e.target.value.length)} />
				{maxLength && (
					<div className="text-right">
						<UIText preset="BODY_02" color="GREY">
							{length} / {maxLength}
						</UIText>
					</div>
				)}
			</TextareaWrapper>
		);
	},
);

export default Textarea;
