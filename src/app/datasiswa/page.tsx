'use client'
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import '@/components/scss/Profil.scss'

interface NumberProps {
  n: number;
}

const Kelas: React.FC<NumberProps> = ({ n }) => {
  const { ref, inView } = useInView();

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 },
    number: n,
    delay: 100,
    reset: true,
    onStart: () => console.log('onStart'),
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
  useEffect(() => {
    console.log('onStart');
  }, []);

  return (
    <div ref={ref}>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    </div>
  );
};

const Siswa: React.FC<NumberProps> = ({ n }) => {
  const { ref, inView } = useInView();

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 },
    number: n,
    delay: 100,
    reset: true,
    onStart: () => console.log('onStart'),
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
  useEffect(() => {
    console.log('onStart');
  }, []);

  return (
    <div ref={ref}>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    </div>
  );
};

const Ruangan: React.FC<NumberProps> = ({ n }) => {
  const { ref, inView } = useInView();

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 },
    number: n,
    delay: 100,
    reset: true,
    onStart: () => console.log('onStart'),
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
  useEffect(() => {
    console.log('onStart');
  }, []);

  return (
    <div ref={ref}>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    </div>
  );
};

const Eksul: React.FC<NumberProps> = ({ n }) => {
  const { ref, inView } = useInView();

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 },
    number: n,
    delay: 100,
    reset: true,
    onStart: () => console.log('onStart'),
    config: { mass: 1, tension: 20, friction: 10 },
  });

  // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
  useEffect(() => {
    console.log('onStart');
  }, []);

  return (
    <div ref={ref}>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    </div>
  );
};


export default function Datasiswa() {

  return (
    <section className="dataSiswa">
      <div className="dataSiswa__container container grid">

        <div className="heading">
          <h1>Data Siswa</h1>
          <p>Sekolah</p>
        </div>

        <div className="content">
          <div className="box">
            <h1>Siswa</h1>
            <h3>
              <Siswa n={562} />
            </h3>
          </div>

          <div className="box">
            <h1>Kelas</h1>
            <h3>
              <Kelas n={29} />
            </h3>
          </div>

          <div className="box">
            <h1>Ruangan</h1>
            <h3>
              <Ruangan n={109} />
            </h3>
          </div>

          <div className="box">
            <h1>Eksul</h1>
            <h3>
              <Eksul n={5} />
            </h3>
          </div>
        </div>

      </div>

    </section>
  )
}
