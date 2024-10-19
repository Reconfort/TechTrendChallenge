"use client";
import React from 'react';
import { Card, Paper, Typography } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import CustomButton from '@/components/shared/CustomButton';
import { useGetResponsibilitiesQuery } from '@/store/slices/apiSlice';
import StepProps from '@/types/stepsType';

const Work = ({ handleNext }: StepProps) => {
    const { data, error, isLoading } = useGetResponsibilitiesQuery();

    // Responsibilities default to an empty array if no data
    const responsibilities = data || [];

    return (
        <div>
            <Card
                sx={{
                    minWidth: { xs: '100%', md: 580 },
                    minHeight: { xs: 820, md: 555 },
                    maxWidth: { xs: '100%', md: 580 },
                    maxHeight: { xs: 'auto', md: 555 },
                }}
                className={'flex flex-col justify-start items-center'}
            >
                <Paper
                    elevation={0}
                    className={
                        '!w-full !h-[760px] md:!h-[535px] flex flex-col justify-center items-center !rounded-b-none'
                    }
                >
                    <DialogContent className={'flex flex-col justify-start items-center gap-3 w-[90%]'}>
                        <Typography variant="h6" className={'!font-medium !text-center !mt-3'}>
                            What is your main work responsibility?
                        </Typography>
                        <div className={'w-full grid grid-cols-2 gap-4 mt-1'}>
                            {/* Conditional rendering based on the loading, error, or success state */}
                            {isLoading ? (
                                <div className={'w-full col-span-2 grid grid-cols-2 gap-4 mt-1'}>
                                    <div className={'w-full h-14 rounded-xl bg-slate-100 animate-pulse'}></div>
                                    <div className={'w-full h-14 rounded-xl bg-slate-100 animate-pulse'}></div>
                                    <div className={'w-full h-14 rounded-xl bg-slate-100 animate-pulse'}></div>
                                    <div className={'w-full h-14 rounded-xl bg-slate-100 animate-pulse'}></div>
                                    <div className={'w-full h-14 rounded-xl bg-slate-100 animate-pulse'}></div>
                                    <div className={'w-full h-14 rounded-xl bg-slate-100 animate-pulse'}></div>
                                    <div className={'w-full h-14 rounded-xl bg-slate-100 animate-pulse'}></div>
                                </div>
                            ) : error ? (
                                <p>Error fetching data</p>
                            ) : (
                                responsibilities.map((responsibility: { name: string }, index: number) => (
                                    <span key={index}>
                                        <CustomButton
                                            variants={'outlined'}
                                            title={responsibility.name}
                                            click={handleNext}
                                            classes={
                                                'bg-[#FDFDFD] !text-slate-600 !border !border-gray-300 !w-full'
                                            }
                                        />
                                    </span>
                                ))
                            )}
                        </div>
                    </DialogContent>
                </Paper>
            </Card>
        </div>
    );
};

export default Work;
