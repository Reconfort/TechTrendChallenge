export default interface StepProps {
    handleNext: () => void;
    handleBack?: () => void;
    currentStep: number;
}