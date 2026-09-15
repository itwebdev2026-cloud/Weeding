import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';
import { assetPath } from '@/config/asset-path';

export default function EventDetails() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const events = [
    { title: 'Wedding Ceremony', details: weddingConfig.event.akad }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif mb-4 text-white">Save the Date</h2>
            <p className="text-white/90">We invite you to celebrate our special day</p>
          </div>
        </motion.div>

        <div className="grid max-w-2xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden text-center"
              style={{ minHeight: '400px' }}
            >
              {/* Ceremony decorations */}
              {event.title === 'Wedding Ceremony' && (
                <>
                  <div className="absolute -top-8 -left-8 w-32 h-32 opacity-50">
                    <Image
                      src={assetPath('/images/pattern/flower-1.webp')}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-50 rotate-180">
                    <Image
                      src={assetPath('/images/pattern/flower-2.webp')}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </>
              )}

              <h3 className="text-2xl font-serif mb-6 text-center">{event.title}</h3>
              
              <div className="mx-auto max-w-xl space-y-6 text-left">
                <div className="grid grid-cols-[5rem_1fr] items-start gap-4">
                  <span className="text-gray-400">Date</span>
                  <div>
                    <p className="font-medium">{formatDate(event.details.date)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-[5rem_1fr] items-start gap-4">
                  <span className="text-gray-400">Time</span>
                  <div>
                    <p className="font-medium">{event.details.time}</p>
                  </div>
                </div>

                <div className="grid grid-cols-[5rem_1fr] items-start gap-4">
                  <span className="text-gray-400">Venue</span>
                  <div>
                    <p className="font-medium">{event.details.venue}</p>
                    <p className="text-gray-600">{event.details.address}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
