import React from 'react';
import { weddingConfig } from '../../config/wedding-config';
import MusicPlayer from '../features/MusicPlayer';
import Footer from './Footer';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import { assetPath } from '../../config/asset-path';

interface MainLayoutProps {
  children: React.ReactNode;
  guestName?: string;
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="p-8 text-center">
      <h2 className="text-2xl font-bold text-wedding-text mb-4">Something went wrong</h2>
      <p className="text-wedding-text/80">{error.message}</p>
    </div>
  );
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Head>
        <title>{`${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name} Wedding`}</title>
        <meta name="description" content={`Wedding invitation for ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`} />
      </Head>
      <MusicPlayer isPlaying={true} />
      <div className="relative overflow-x-hidden">

        {/* Animated Background */}
        <div
          className="fixed inset-0 bg-repeat bg-[length:100px] opacity-50 animate-move-bg z-10"
          style={{ backgroundImage: `url(${assetPath('/images/pattern/subtle-pattern.webp')})` }}
        ></div>

        {/* Main Content */}
        <div className="relative z-30">
          {React.Children.map(children, (child) => (
            <section className="relative">
              {child}
            </section>
          ))}
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}
