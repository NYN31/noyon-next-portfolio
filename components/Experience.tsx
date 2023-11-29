'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './SectionHeading';
import { MY_EXPERIENCE, experiencesData } from '@/constants/ExperienceConstant';
import GenericCard from './cards/GenericCard';
const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{MY_EXPERIENCE}</SectionHeading>
      <GenericCard>
        <VerticalTimeline lineColor="#888">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: '#FFFFFF',
                  boxShadow:
                    '0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.05)',
                  border: '1px solid #DDDDDD',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid #9ca3af',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: '#FFFFFF',
                  fontSize: '1.5rem',
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p
                  className="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </GenericCard>
    </section>
  );
};

export default Experience;
