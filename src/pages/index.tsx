import type { NextPage } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import CoupleProfile from '@/components/sections/CoupleProfile';
import EventDetails from '@/components/sections/EventDetails';
import CountdownTimer from '@/components/features/CountdownTimer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const [guestName, setGuestName] = useState<string>('Daren & Family');

  useEffect(() => {
    if (router.isReady) {
      // Get the 'to' parameter from URL and decode it
      const guest = router.query.to;
      if (typeof guest === 'string') {
        setGuestName(decodeURIComponent(guest));
      }
    }
  }, [router.isReady, router.query]);

  return (
    <MainLayout guestName={guestName}>
      <Hero guestName={guestName} />
      <CoupleProfile />
      <CountdownTimer />
      <EventDetails />
    </MainLayout>
  );
};

export default Home;
