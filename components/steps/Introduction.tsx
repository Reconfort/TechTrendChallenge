import StepProps from "@/types/stepsType";
import {Card, Paper, Typography} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import CustomButton from "@/components/shared/CustomButton";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";
import Check from "@/assets/check.svg";
import Image from "next/image";

const Introduction = ({handleNext, currentStep}: StepProps) => {
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
                <DialogContent className={'flex flex-col justify-center items-center gap-3'}>

                    <Typography
                        variant="h6"
                        className={"!font-medium !text-center"}
                    >
                        You’re all set!
                    </Typography>
                    <p className={'!text-center'}>
                        Start stackin’, reviewin’, discussin’ and more... 🙌
                    </p>
                    <Paper elevation={0}
                           className={'!w-[60px] !h-[60px] !bg-[#8D57FA]/30 !border-b !border-slate-[#E5E5E9] flex justify-center items-center !rounded-full'}>
                        <Image src={Check} alt={'Tech Trends logo'} width={32} height={32}
                               className={'w-[29px] h-[21px]'}/>
                    </Paper>
                </DialogContent>
            </Paper>
        </Card>
    )
}

export default Introduction