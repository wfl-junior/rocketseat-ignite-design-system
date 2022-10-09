import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
  totalSteps: number;
  currentStep?: number;
}

export const MultiStep: React.FC<MultiStepProps> = ({
  totalSteps,
  currentStep = 1,
}) => (
  <MultiStepContainer>
    <Label>
      Passo {currentStep} de {totalSteps}
    </Label>

    <Steps css={{ "--total-steps": totalSteps }}>
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map(step => (
        <Step key={step} active={step <= currentStep} />
      ))}
    </Steps>
  </MultiStepContainer>
);
