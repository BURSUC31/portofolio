import { ImageGrid } from '@/components/ImageGrid';

export const metadata = {
  title: 'Photos | Dimitrie Tomulesei',
  description: 'My Photos',
};

const photosCloud = [
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo1.jpg',
    alt: 'photo1',
  },
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo2.jpg',
    alt: 'photo2',
  },
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo3.jpg',
    alt: 'photo3',
  },
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo4.jpg',
    alt: 'photo4',
  },
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo5.jpg',
    alt: 'photo5',
  },
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo6.jpg',
    alt: 'photo6',
  },
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo7.jpg',
    alt: 'photo7',
  },
  {
    src: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu/photo8.jpg',
    alt: 'photo8',
  },
];

const photosLocal1 = [
  { src: '/photo1.jpg', alt: 'photo1' },
  { src: '/photo2.jpg', alt: 'photo2' },
  { src: '/photo3.jpg', alt: 'photo3' },
  { src: '/photo4.jpg', alt: 'photo4' },
];

const photosLocal2 = [
  { src: '/photo1.jpg', alt: 'photo1' },
  { src: '/photo2.jpg', alt: 'photo2' },
  { src: '/photo3.jpg', alt: 'photo3' },
  { src: '/photo4.jpg', alt: 'photo4' },
  { src: '/photo5.jpg', alt: 'photo5' },
  { src: '/photo6.jpg', alt: 'photo6' },
  { src: '/photo7.jpg', alt: 'photo7' },
  { src: '/photo8.jpg', alt: 'photo8' },
];

export default function PhotosPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <div className="flex flex-col gap-8">
        <ImageGrid columns={3} images={photosCloud} />
        <ImageGrid columns={2} images={photosLocal1} />
        <ImageGrid columns={4} images={photosLocal2} />
      </div>
    </section>
  );
}
