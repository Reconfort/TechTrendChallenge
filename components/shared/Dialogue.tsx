"use client"

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import React from "react";
import CustomButton from "@/components/shared/CustomButton";

import StepsWrapper from "@/components/shared/StepsWrapper";

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
            <CustomButton title="Let's get started !" click={handleClickOpen} classes={'!bg-[#8D57FA]'}/>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                className={'w-screen h-screen bg-black/10 backdrop-blur fixed !rounded-2xl top-0 left-0'}
            >
                <StepsWrapper handleClose={handleClose}/>
            </Dialog>
        </React.Fragment>
    )
}

export default Dialogue;