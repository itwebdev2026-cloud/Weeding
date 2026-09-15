import type { NextPage } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import CoupleProfile from '@/components/sections/CoupleProfile';
import EventDetails from '@/components/sections/EventDetails';
import CountdownTimer from '@/components/features/CountdownTimer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const inviteeNames: Record<string, string> = {
  'Daren-Family': 'Daren & Family',
  'Rick-Family': 'Rick & Family',
  Pooja: 'Pooja',
  Sarju: 'Sarju',
  Sajid: 'Sajid',
  George: 'George',
  'Obed-Ringbon-Family': 'Obed Ringbon & Family',
  'Evergreen-Ladies': 'Evergreen Ladies'
};

const Home: NextPage = () => {
  const router = useRouter();
  const [guestName, setGuestName] = useState<string>('Daren & Family');

  useEffect(() => {
    if (router.isReady) {
      // Get the 'to' parameter from URL and decode it
      const guest = router.query.to;
      if (typeof guest === 'string') {
        const decodedGuest = decodeURIComponent(guest);
        setGuestName(inviteeNames[decodedGuest] ?? decodedGuest);
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
