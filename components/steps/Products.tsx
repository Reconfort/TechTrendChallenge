import StepProps from "@/types/stepsType";
import {Card, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import Tesla from "@/assets/tesla.png";
import Add from "@/assets/add-circle.svg";
import Close from "@/assets/close.svg";
import Image from "next/image";

interface ProductProps {
    handleNext: () => void
}

const AddedProduct = () => {
    return (
        <div className={'flex gap-2 justify-between items-center p-2 border duration-100 border-slate-200 rounded-xl pr-3 group'}>
            <div className={'w-full flex items-center gap-2'}>
                <Image src={Tesla} alt={'Tech Trends logo'} width={30} height={30} className={'rounded-xl'}/>
                <Typography
                    variant="h6"
                    className={"!font-medium !text-sm"}
                >
                    Google Analytics
                </Typography>
            </div>
            <Image src={Close} alt={'Tech Trends logo'} width={20} height={20} className={'duration-100 group-hover:rotate-180 cursor-pointer'} />
        </div>
    )
}

const ProductCard = ({handleNext}:ProductProps ) => {
    return (
        <div className={'w-full flex gap-2 justify-between items-center p-2 border border-transparent duration-100 hover:border-slate-200 rounded-xl pr-6'}>
            <div className={'w-full flex items-center gap-2'}>
                <Image src={Tesla} alt={'Tech Trends logo'} width={80} height={60}/>
                <Typography
                    variant="h6"
                    className={"!font-medium !text-center"}
                >
                    Google Analytics
                </Typography>
            </div>
            <Image src={Add} alt={'Tech Trends logo'} width={20} height={20} className={'duration-100 hover:rotate-45 cursor-pointer'} onClick={handleNext}/>
        </div>
    )
}

const Products = ({handleNext, currentStep}: StepProps) => {
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
                        Select 3+ products that you use
                    </Typography>
                    <Typography
                        variant="h6"
                        className={"!font-light !text-center !-mt-1"}
                    >
                        Build your tech stack from the get go.
                    </Typography>

                    {/*Search*/}
                    <div className={'w-full flex flex-wrap gap-4 mt-1'}>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    {/*Searched Product*/}
                    <div className={'w-full flex flex-wrap gap-1 p-1'}>
                        <AddedProduct/>
                        <AddedProduct/>
                    </div>

                        {/*Search Content */}
                        <div className={'w-full flex flex-col justify-start items-start gap-4'}>
                            <Typography
                                variant="h6"
                                className={"!text-sm !font-medium !text-center"}
                            >
                                Products
                            </Typography>

                            <div className={'w-full flex flex-col gap-1 p-1'}>
                                <ProductCard handleNext={handleNext}/>
                                <ProductCard handleNext={handleNext}/>
                                <ProductCard handleNext={handleNext}/>
                                <ProductCard handleNext={handleNext}/>
                            </div>


                        </div>
                </DialogContent>
            </Paper>
        </Card>
)
}

export default Products