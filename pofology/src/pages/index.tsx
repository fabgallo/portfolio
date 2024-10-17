import { GoogleAnalytics } from '@next/third-parties/google'
import AboutSection from '@/components/partials/AboutSection';
import ContactSection from '@/components/partials/ContactSection';
import ExperienceSection from '@/components/partials/ExperienceSection';
import HeroSection from '@/components/partials/HeroSection';
import RecentWorkSection from '@/components/partials/RecentWorkSection';
import ServiceSection from '@/components/partials/ServiceSection';
import TestimonialSection from '@/components/partials/TestimonialSection';
import AppLayout from '@/layouts/AppLayout';
import { api } from '@/lib/api';
import type { GetServerSideProps, NextPage } from 'next';

// type Props = {
//   experiences: ;
// }

const Home: NextPage = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <AppLayout title="Home">
      <HeroSection />
      <section className="container pt-20 pb-10">
        <AboutSection />
      </section>
      <section className="container py-16">
        <ExperienceSection />
      </section>
      {/* <section className="container py-16">
        <ServiceSection />
      </section>
      <section className="container py-16">
        <RecentWorkSection />
      </section> */}
      <section className="container py-16">
        <TestimonialSection />
      </section>
      <section id='contact' className="container py-16">
        <ContactSection />
      </section>
      <GoogleAnalytics gaId={gaId} />
    </AppLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   const getExperiences = api.get('/experiences').then((res) => res.data.data);
//   const getEducations = api.get('/educations').then((res) => res.data.data);
//   const profile = api.get('/profile').then((res) => res.data.data);
//   const result = await Promise.all([getExperiences, getEducations, profile]);
//   return {
//     props: {
//       experiences: result[0],
//       educations: result[1],
//       profile: result[2],
//     },
//   };
// };

export default Home;
