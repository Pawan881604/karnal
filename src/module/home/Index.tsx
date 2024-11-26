import React from 'react'
import ServiceSecton from './ServiceSecton'
import TechnologyStack from './TechnologyStack'
import ContsctUs from './ContsctUs'
import HeroSection from './HeroSection'
import OurProjects from './OurProjects'
import OurBlog from './OurBlog'
import ChooseUs from './ChooseUs'
import InfintySliderLR from '@/components/common/InfintySliderLR'
import FAQAccordion from '@/components/common/FAQAccordion'
import Image from 'next/image'

const Index = () => {
    return (
        <>
        
            <HeroSection />

            {/* <InfintySliderLR /> */}
            <ServiceSecton />
            <TechnologyStack />
            <ChooseUs />
            <OurProjects />
            <OurBlog />
            <div className='block max-w-[1180px] m-auto lg:flex items-center'>
                <div className='w-full lg:w-[49]'>
                    <FAQAccordion />
                </div>
                <div className='w-full lg:w-[49]'>
                    <Image
                        src={"/upload/16607.jpg"}
                        alt={"faq"}
                        layout="responsive"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <ContsctUs />
        </>
    )
}

export default Index