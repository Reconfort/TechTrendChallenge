import StepProps from "@/types/stepsType";
import {Card, Paper, Typography} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import CustomButton from "@/components/shared/CustomButton";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";

const Audience = ({handleNext, handleBack, currentStep}: StepProps) => {
    return (
        <div>
            <Card
                sx={{
                    minWidth: {xs: "100%", md: 580},
                    minHeight: {xs: 820, md: 555},
                    maxWidth: {xs: "100%", md: 580},
                    maxHeight: {xs: "auto", md: 555},
                }} className={'flex flex-col justify-start items-center'}>
                <Paper elevation={0}
                       className={'!w-full !h-[760px] md:!h-[535px] flex flex-col justify-center items-center !rounded-b-none'}>
                    <DialogContent className={'flex flex-col justify-start items-center gap-3 w-[90%]'}>
                        <Typography
                            variant="h6"
                            className={"!font-medium !text-center !mt-3"}
                        >
                            What is your company size?
                        </Typography>
                        <div className={'w-full grid grid-cols-1 px-[20%] gap-4 mt-1'}>
                            <CustomButton variants={'outlined'} title={'Myself only'} click={handleNext} classes={'bg-[#FDFDFD] !text-slate-600 !border !border-gray-300 !w-full'}/>
                            <CustomButton variants={'outlined'} title={'501-1000 employees'} click={handleNext} classes={'bg-[#FDFDFD] !text-slate-600 !border !border-gray-300 !w-full'}/>
                        </div>
                    </DialogContent>
                </Paper>
            </Card>
        </div>
    )
}

export default Audience