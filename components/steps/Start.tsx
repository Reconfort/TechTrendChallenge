"use client"

import {Card, Paper, Typography} from "@mui/material";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Close from "@/assets/close.svg";
import DialogContent from "@mui/material/DialogContent";
import CustomButton from "@/components/shared/CustomButton";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";
import StepProps from "@/types/stepsType";

const Start = ({handleNext}: StepProps) => {
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
                    <DialogContent className={'flex flex-col justify-center items-center gap-3'}>
                        <Paper elevation={0}
                               className={'!w-[140px] !h-[140px] !bg-[#8D57FA] !border-b !border-slate-[#E5E5E9] flex flex-col justify-center items-center !rounded-full'}>
                            <Typography
                                variant="h2"
                                className={"!font-black !text-white"}>
                                J
                            </Typography>
                        </Paper>
                        <Typography
                            variant="h6"
                            className={"!font-medium !text-center"}
                        >
                            Welcome Jane Doe 🙌
                        </Typography>
                        <p className={'!text-center'}>
                            We need a few details to personalize your experience.
                        </p>
                        <CustomButton title="Let’s do it" classes={'!bg-[#8D57FA] !w-full'} click={handleNext}/>
                        <DialogContentText id="alert-dialog-slide-description" className={'!font-medium'}>
                            This will only take a minute.
                        </DialogContentText>
                    </DialogContent>
                </Paper>
            </Card>
        </div>


    )
}

export default Start