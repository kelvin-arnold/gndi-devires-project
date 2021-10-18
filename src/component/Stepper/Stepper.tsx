// Component generated with util/vox-create-component.js
import React from "react";
import * as R from "ramda";
import {StepperWrapper, StepItem} from "./Stepper.styled";
import {StepperProps, Step} from "./Stepper.types";
import {UIText, UIICon} from "./../../ui";

export const Stepper: React.VFC<StepperProps> = ({steppes = [], allStepsDone, ...args}) => {
	// Context Here
	// States Here
	const [currentStep, setCurrentStep] = React.useState<Step>({});
	const [allSteppes, setAllSteppes] = React.useState<any[]>(steppes);
	const [stepsDone, setStepsDone] = React.useState<Step[]>([]);
	const [lastDone, setLastDone] = React.useState<number>(-1);
	// Effects Here
	React.useEffect(() => {
		const lDone = R.findLastIndex(R.propEq("done", true))(allSteppes);
		const lDones = R.takeWhile((a) => a.done, allSteppes);
		setCurrentStep(allSteppes[lDone + 1]);
		setStepsDone(lDones);
		setLastDone(lDone);
		return () => {
			setCurrentStep({});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allSteppes]);
	React.useEffect(() => {
		if (allStepsDone) allStepsDone(stepsDone);
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stepsDone]);
	// Handlers Here
	const onSelectStep = (step: Step, i: number) => {
		const prevStep = i - 1;
		const newSteppes =
			lastDone + 2 === i
				? allSteppes.map((stp, idx) => (idx === prevStep ? {...stp, done: true} : {...stp}))
				: lastDone >= i
				? allSteppes.map((stp, idx) => (idx >= i ? {...stp, done: false} : {...stp}))
				: allSteppes.map((stp, idx) => (idx < i ? {...stp, done: true} : {...stp}));
		setCurrentStep(step);
		setLastDone(prevStep);
		setAllSteppes(newSteppes);
	};
	return (
		<StepperWrapper {...args}>
			{allSteppes.map((step, i) => {
				const isCurrent = step.id === currentStep.id;
				return (
					<div className="step" key={step.id}>
						<StepItem onClick={() => onSelectStep(step, i)} done={step.done} current={isCurrent}>
							{step.done ? (
								<UIICon name="check" color="WHITE" size="md" />
							) : (
								<UIText preset="HEADLINE" color="INHERIT">
									{step.label}
								</UIText>
							)}
							<div className="label">
								<UIText preset="BODY_02" color="INHERIT">
									Passo {i + 1}
								</UIText>
							</div>
						</StepItem>
						{i + 1 < steppes.length && (
							<div
								className={`bar ${i <= lastDone ? "bg-primary" : "bg-gray-light bg-opacity-60"}`}
							/>
						)}
					</div>
				);
			})}
		</StepperWrapper>
	);
};

export default Stepper;
