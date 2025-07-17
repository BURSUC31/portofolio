import { ImageGrid } from '@/components/ImageGrid';

export const metadata = {
  title: 'Photos | Dimitrie Tomulesei',
  description: 'My Photos',
};

const photosCloud = [
  {
    src: 'https://tomuleseidimitrie.dev/photo1.jpg',
    alt: 'photo1',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo2.jpg',
    alt: 'photo2',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo3.jpg',
    alt: 'photo3',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo4.jpg',
    alt: 'photo4',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo5.jpg',
    alt: 'photo5',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo6.jpg',
    alt: 'photo6',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo7.jpg',
    alt: 'photo7',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo8.jpg',
    alt: 'photo8',
  },
];

const photosLocal1 = [
  {
    src: 'https://tomuleseidimitrie.dev/photo1.jpg',
    alt: 'photo1',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo2.jpg',
    alt: 'photo2',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo3.jpg',
    alt: 'photo3',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo4.jpg',
    alt: 'photo4',
  },
];

const photosLocal2 = [
  {
    src: 'https://tomuleseidimitrie.dev/photo1.jpg',
    alt: 'photo1',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo2.jpg',
    alt: 'photo2',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo3.jpg',
    alt: 'photo3',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo4.jpg',
    alt: 'photo4',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo5.jpg',
    alt: 'photo5',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo6.jpg',
    alt: 'photo6',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo7.jpg',
    alt: 'photo7',
  },
  {
    src: 'https://tomuleseidimitrie.dev/photo8.jpg',
    alt: 'photo8',
  },
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
