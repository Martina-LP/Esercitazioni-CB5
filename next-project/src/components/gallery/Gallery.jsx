import Image from 'next/image';
import styles from './index.module.scss';

const Gallery = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Title}>Gallery</div>
        <div className={styles.Gallery}>
        <Image
          src="https://picsum.photos/300?random=4"
          alt="hero pic"
          height={300}
          width={300}
          priority
        />
        <Image
          src="https://picsum.photos/300?random=6"
          alt="hero pic"
          height={300}
          width={300}
          priority
        />
        <Image
          src="https://picsum.photos/300?random=8"
          alt="hero pic"
          height={300}
          width={300}
          priority
        />
        </div>
    </div>
  );
};

export default Gallery;
