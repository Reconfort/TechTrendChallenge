"use client"

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import React from "react";
import CustomButton from "@/components/shared/CustomButton";
import {Card, Paper, Typography} from "@mui/material";

import Logo from "@/assets/logo.svg"
import Close from "@/assets/close.svg"
import Image from "next/image";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props}/>;
});


const Dialogue = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <CustomButton title="Let's get started !" click={handleClickOpen}/>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                className={'w-screen h-screen bg-black/10 backdrop-blur fixed !rounded-2xl top-0 left-0'}
            >
                <Card
                    sx={{
                        minWidth: { xs: "100%", md: 580 },
                        minHeight: { xs: 820, md: 555 },
                        maxWidth: { xs: "100%", md: 580 },
                        maxHeight: { xs: "auto", md: 555 },
                    }} className={'flex flex-col justify-start items-center'}>
                    <Paper elevation={0} className={'w-full p-4 !border-b !border-slate-[#E5E5E9] !rounded-b-none flex justify-between items-center'}>
                        <Image src={Logo} alt={'Tech Trends logo'} width={60} height={60}
                               className={'w-[20px] h-[20x]'}/>
                        <Image src={Close} alt={'Close Dialogue'} width={60} height={60}
                               className={'w-[20px] h-[20x]'} onClick={handleClose}/>
                    </Paper>
                    <div className={'grid grid-cols-8 gap-2 w-full bg-white -mt-1'}>
                        <div className={'!bg-[#D0BAFD] h-[4px] w-full'}></div>
                        <div className={'!bg-[#ECECF1] h-[4px] w-full'}></div>
                        <div className={'!bg-[#ECECF1] h-[4px] w-full'}></div>
                        <div className={'!bg-[#ECECF1] h-[4px] w-full'}></div>
                        <div className={'!bg-[#ECECF1] h-[4px] w-full'}></div>
                        <div className={'!bg-[#ECECF1] h-[4px] w-full'}></div>
                        <div className={'!bg-[#ECECF1] h-[4px] w-full'}></div>
                        <div className={'!bg-[#ECECF1] h-[4px] w-full'}></div>
                    </div>

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
                            <CustomButton title="Let’s do it"/>
                            <DialogContentText id="alert-dialog-slide-description" className={'!font-medium'}>
                                This will only take a minute.
                            </DialogContentText>
                        </DialogContent>
                    </Paper>
                </Card>
            </Dialog>
        </React.Fragment>
    )
}

export default Dialogue;