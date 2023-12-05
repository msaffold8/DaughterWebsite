import Image1 from './image1.jpg';
import Image2 from './image2.jpg';
import Image3 from './image3.jpg';
import Image4 from './image4.jpg';
import Image5 from './image6.jpg';
import Image6 from './image7.jpg';
import Image7 from './image8.jpg';
import Image8 from './image9.jpg';
import Image9 from './image10.jpg';
import Image10 from './image11.jpg';
import Image11 from './image11.jpg';




import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'

export default function Gallery() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,

    // ... add other images here
  ];

  return (
    <SimpleLayout
      title="Welcome to My Gallery!"
      intro="Here are pictures from my adventures and fun times!"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="grid gap-4">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-auto max-w-full rounded-lg"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}