import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import { PiInfinity } from 'react-icons/pi';
import ProgressBar from '@/components/shared/ProgressBar';
import { openInNewTab } from '@/lib/utils';

const AboutSection = () => {
  const resume = process.env.NEXT_PUBLIC_RESUME || 'about:blank';

  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I'm Fabio, an experienced Software Development Manager and Front-end Architect. I work from Toronto, Canada. I have over 20 years of expertise in UX/UI design, software architecture, and integration for globally recognized brands.
          </p>
          <Button onClick={() => openInNewTab(resume)} type="button" className="mt-5 px-8">Download CV</Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">People management</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="rose" progress={90} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Front-end</h6>
              <p>80%</p>
            </div>
            <ProgressBar color="amber" progress={80} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">UI/UX</h6>
              <p>75%</p>
            </div>
            <ProgressBar color="green" progress={75} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Back-end</h6>
              <p>50%</p>
            </div>
            <ProgressBar color="blue" progress={50} />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <PiInfinity size={50} />
            <p className="mt-1">Cups of Coffee</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-1">Teams Managed</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
