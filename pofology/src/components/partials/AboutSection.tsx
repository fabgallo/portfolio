import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I am Md Mostafizur Rahman, I am a fullstack developer. I work from Dhaka, Bangladesh. I have rich
            experience in building, designing & customizing website, web apps, mobile apps etc.
          </p>
          <Button className="mt-5">Download CV</Button>
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
              <p>90%</p>
            </div>
            <ProgressBar color="amber" progress={90} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">UI/UX</h6>
              <p>80%</p>
            </div>
            <ProgressBar color="green" progress={80} />
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
            <h2 className="text-3xl font-bold">&infin;</h2>
            <p className="mt-1">Cups of Coffee</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="mt-1">Satisfied clients</p>
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
