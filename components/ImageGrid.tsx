import Image from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
};

type ImageGridProps = {
  images: ImageProps[];
  columns: number;
};

export function ImageGrid({ images, columns }: ImageGridProps) {
  const columnClasses: { [key: number]: string } = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid ${columnClasses[columns] || 'grid-cols-3'} gap-4`}>
      {images.map((img) => (
        <div key={img.src} className="relative aspect-square">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
