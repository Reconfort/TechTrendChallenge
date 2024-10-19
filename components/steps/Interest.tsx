import StepProps from "@/types/stepsType";
import {Card, Paper, Typography} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import CustomButton from "@/components/shared/CustomButton";
import React from "react";

const Interest = ({handleNext, currentStep}: StepProps) => {
    return (
        <Card
            sx={{
                minWidth: {xs: "100%", md: 580},
                minHeight: {xs: 820, md: 555},
                maxWidth: {xs: "100%", md: 580},
                maxHeight: {xs: "auto", md: 555},
            }} className={'flex flex-col justify-start items-center'}>
            <Paper elevation={0}
                   className={'!w-full !h-[760px] md:!h-[535px] flex flex-col justify-center items-center !rounded-b-none'}>
                <DialogContent className={'flex flex-col justify-start items-center gap-3 w-full'}>
                    <Typography
                        variant="h6"
                        className={"!font-medium !text-center !mt-3"}
                    >
                        What is your company size?
                    </Typography>
                    <div className={'w-full flex flex-wrap justify-center items-center gap-3 mt-1'}>
                        <button className={'rounded-full px-8 py-3 text-[#272727] bg-[#F8F8F8] border border-[#E3E3E7]'} onClick={handleNext}>Label</button>
                        <button className={'rounded-full px-8 py-3 text-[#272727] bg-[#F8F8F8] border border-[#E3E3E7]'} onClick={handleNext}>Label</button>
                        <button className={'rounded-full px-8 py-3 text-[#272727] bg-[#F8F8F8] border border-[#E3E3E7]'} onClick={handleNext}>Label</button>
                        <button className={'rounded-full px-8 py-3 text-[#272727] bg-[#F8F8F8] border border-[#E3E3E7]'} onClick={handleNext}>Label</button>
                        <button className={'rounded-full px-8 py-3 text-[#272727] bg-[#F8F8F8] border border-[#E3E3E7]'} onClick={handleNext}>Label</button>
                        <button className={'rounded-full px-8 py-3 text-[#272727] bg-[#F8F8F8] border border-[#E3E3E7]'} onClick={handleNext}>Label</button>
                        {/*<CustomButton variants={'outlined'} title={'Myself'} click={handleNext} classes={'bg-[#FDFDFD] !p-2 !rounded-full !text-slate-600 !border !border-gray-300'}/>*/}
                        {/*<CustomButton variants={'outlined'  } title={' only'} click={handleNext} classes={'bg-[#FDFDFD] !p-2 !rounded-full !text-slate-600 !border !border-gray-300'}/>*/}
                        {/*<CustomButton variants={'outlined'} title={'501'} click={handleNext} classes={'bg-[#FDFDFD] !p-2 !rounded-full !text-slate-600 !border !border-gray-300'}/>*/}
                        {/*<CustomButton variants={'outlined'} title={'1000'} click={handleNext} classes={'bg-[#FDFDFD] !p-2 !rounded-full !text-slate-600 !border !border-gray-300'}/>*/}
                    </div>
                </DialogContent>
            </Paper>
        </Card>
    )
}

export default Interest