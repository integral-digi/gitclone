"use client"
import Image from "next/image";
import { sectionContent } from "./InfoSection";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { timelineItemClasses } from '@mui/lab/TimelineItem';

const InfoTwoSection = () => {
    return (
        <section className="w-full">
            <section className="space-y-16">
                <section className="w-full max-w-full">
                    <Image
                        src={sectionContent.stashFeature.imageSrc}
                        width={1286}
                        height={682}
                        alt="Stash Image"
                    />
                </section>
                <section className="w-full flex items-start justify-between lg:flex-col lg:space-y-6">
                    <section className="w-[60%] lg:w-full">
                        <h4 className="text-[2rem] text-white font-bold lg:text-[1.375rem]">
                            {sectionContent.stashFeature.title}
                        </h4>
                    </section>
                    <section className="w-[35%] lg:w-full">
                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                },
                            }}
                        >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <p className="text-white text-base font-medium">
                                        {sectionContent.stashFeature.listText}
                                    </p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <p className="text-white text-base font-medium">
                                        {sectionContent.stashFeature.listDescription}
                                    </p>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default InfoTwoSection;
