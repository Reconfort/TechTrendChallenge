"use client"

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {nextStep, prevStep} from "@/store/slices/stepSlice";
import Start from "@/components/steps/Start";
import Work from "@/components/steps/Work";
import Audience from "@/components/steps/Audience";
import CompanySize from "@/components/steps/CompanySize";
import Interest from "@/components/steps/Interest";
import Introduction from "@/components/steps/Introduction";
import Products from "@/components/steps/Products";
import Profile from "@/components/steps/Profile";
import CustomButton from "@/components/shared/CustomButton";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Close from "@/assets/close.svg";
import {Paper} from "@mui/material";

type StepsWrapperProps = {
    handleClose: () => void;
}

const StepsWrapper = ({handleClose}: StepsWrapperProps) => {

    const dispatch = useDispatch();
    const currentStep = useSelector((state: RootState) => state.step.currentStep);

    const handleNext = () => {
        dispatch(nextStep());
    };

    const handleBack = () => {
        dispatch(prevStep());
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Start handleNext={handleNext} handleBack={handleBack} currentStep={currentStep} />;
            case 2:
                return <Work handleNext={handleNext} handleBack={handleBack} currentStep={currentStep}/>;
            case 3:
                return <CompanySize handleNext={handleNext} handleBack={handleBack} currentStep={currentStep}/>;
            case 4:
                return <Audience handleNext={handleNext} handleBack={handleBack} currentStep={currentStep}/>;
            case 5:
                return <Interest handleNext={handleNext} handleBack={handleBack} currentStep={currentStep}/>;
            case 6:
                return <Products handleNext={handleNext} handleBack={handleBack} currentStep={currentStep}/>;
            case 7:
                return <Profile handleNext={handleNext} handleBack={handleBack} currentStep={currentStep}/>;
            default:
                return <Introduction handleNext={handleNext} handleBack={handleBack} currentStep={currentStep}/>;

        }
    };

    return (
        <div>
            <Paper elevation={0}
                   className={'w-full p-4 !border-b !border-slate-[#E5E5E9] !rounded-b-none flex justify-between items-center'}>
                <Image src={Logo} alt={'Tech Trends logo'} width={60} height={60}
                       className={'w-[20px] h-[20x]'}/>
                <Image src={Close} alt={'Close Dialogue'} width={60} height={60}
                       className={'w-[20px] h-[20x]'} onClick={handleClose}/>
            </Paper>
            {currentStep > 1 && (
                <div className={'grid grid-cols-8 gap-2 w-full bg-white -mt-1'}>
                    {Array.from({ length: 8 }, (_, index) => (
                        <div
                            key={index}
                            className={`h-[4px] w-full ${index + 1 < currentStep ? '!bg-[#D0BAFD]' : '!bg-[#ECECF1]'}`}
                        ></div>
                    ))}
                </div>
            )}
            {renderStep()}
            {currentStep > 1 && (
                <div className={'w-full flex justify-start items-start  border-t border-[#ECECF1]'}>
                    <CustomButton variants={'text'} title="Back" click={handleBack}
                                  classes={'!bg-transparent !text-indigo-600'}/>
                </div>
            )}
        </div>
    )
}

export default StepsWrapper