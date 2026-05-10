import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Gift,
  Heart,
  Sparkles,
  Flower2,
  Star,
  Camera,
  RotateCcw,
  ChevronRight,
  Mail,
  Baby,
  HandHeart
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

const images = {
  hero: 'https://blogger.googleusercontent.com/img/a/AVvXsEj-XkF3ma0Y-KltE_GDN1iYbjmy7eZz7PHuHE9fzIIk2daYZFmRYBh7_D-lwsht_fAaYWcV3s0fCl4KEy1dxljawcRzcLgz5r3Ydw3w4SNLeNXDIQxaTC_2nJxh9ryKrLd7ZapyVhWQaDQ2jdXIRFfF1LIsJlsqjhGFb0iJyHqz7kq0Flc977fdbw9s_dI',
  together: 'https://blogger.googleusercontent.com/img/a/AVvXsEj35Yf_s2a-V3ADiHClQd5pjiyHU3HBqZlj3enxQff9-qI-NXtQVPeDjmLtD1QioOXC6kj0FwAfY7n0xIbMWHqRkGMEhRJ9cwmPtufCgDkT8w54vWvrF2S9WdbvvyaTBiySAD01l-cnqknFqejHq3pEmH5_rrGYueb-uXTWKae7vhrocl9nCpmOsguM2ZY',
  final: 'https://blogger.googleusercontent.com/img/a/AVvXsEhenTWq9X8tkjGWUGYXkN9DdBYWwJv8c9DJ8_fwsX745qsn15bVROYXnnVTALvEJwMqGUr_d10S7s-j0dNb_3q2OxkFEiFUkwMdC9IFxAFPN7bBDF-yBc7DYW-OSGc4wbgnSryJJ2mqY4c9EU_F-gMmAnoIvydts65xgeMP0xphm9x64lglzv-_T59v060'
};

const gallery = [
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEjeDwl8otHPQ-4nvaeXPZPV6J-NWmcY75vvOFotMGOk3fv0U6USk5yHSpZ25mOjBQPLZMEsQzRPQYdo-Vt5Mc7AFoqsMrEEZT6irx7m2EAjEHsP9o4ER0BLCY7ISzOSYvyHPErzCVvFi7134rutsWI1dmqRBkSMr3jk4XDeLTQu-4l3I_HmRna74bMwZbg',
    text: 'Un recuerdo que vale oro'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEjN3-FvdyUNHkeXCWV8Vv0gzsQzCJBgE2wHO9XdxQNvY3B1B_rZEANUzNAs1eD8zu-IXXhg5VD2DEZWl4ej1YXkLnyRdnVQQcJ0L-mkJ7MbcN7cRlvyxYPnxOnPjAwGrZOvhpb3_xgaLBj38zCkRCLn66F_At-7Gq4OhTb04J5xRro4DxUZ_11a4zS2alc',
    text: 'Tu sonrisa siempre ilumina todo'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEjhWA7D1p7W6i5TBBJDb8DwgEYrrMLh6qnuNUz1y4cW2Agu3_9rutwIThHa-3gs8kHaLCQV3uE2o3JFpK4DQNI321cCSx5usQS3LM6BaSkziC_ZZIPRa21D37-c7ojQU2ewZcIzdJxb3AuD7Z8YHgPn19EDoYJOrXIwyAg7ize2EriNaYa5psNL5qGx-tA',
    text: 'Momentos sencillos, amor infinito'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEgo1YAw737clcfXy8fTuyoCSJohvp2Z8I_2DGYNbpZ2C9WWahY8CKBbOOLVOIfZFrWpvKeXU-omlpbJnxyXG-Op6IUqrruY-2_PPixXzaNTc4EmexD_aMUosNvGZf3NiY1yysR5z-r8L3YGkuIh_BgPCO6YSWvZxGgEd88kd4tjNhcCy3dHfTXxr4Jhd2s',
    text: 'Gracias por estar siempre'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEjnFS1GbuAkTCtzlReZkL5OGwUY8yt_yVE-7CsrQKHhwkwv35y5RJ5lHOGqoqxoZJwsFa7wOiwtL7lB5_fOYJmQL72dN4jv1q5drCKc4X_eZxtvT-xRYidYlB8QTxK2YOYwUOqGf7WFOWgDcTtgx4jb-O5TlJfPW2Qgusfys7pCU9Uy45WIzHP_dxyOKNc',
    text: 'Mi lugar seguro'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEguvAVNQ8hi1dZK0i2laMcgw352Td6b1nmCRBx97tyNy6Szda6aNT_t3qJUpzw84sJGTivOjBWlOK-f3JTUF5U0vl7JvOpQsY4FpoJMfHUCeZIH2c0I8SQjNnLFdLxJiSkBJ4RpqNnKoPmYTvpuC2h73kVcbFw2g7mK5CauMjdJP_9kPFbvhWDmM4jIFeM',
    text: 'Cada foto guarda una historia'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEjqnuB6Rxts_tiwsaepyZRsm2Qh-qhu-kAuVabksUAdyqwhC5ulVIcodMSN2MsrFIiwagNnLJaJmzBw5V-uxCbg3unEE93DyNNyk-g7u3AmoU6ZULZN37f8JmzhtzSqb0cDn9MQfUp6XMwOXeJlT33rzestWKnS1JvBz1ee6bKseWFWKrY6ZDui2CEcUL4',
    text: 'La mejor mamá del mundo'
  },
  {
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEjQtsXJZSonVVdKydUeYaF6AKOkxTIkqo49Jt5YTpQzh2ZrYKQnfiAvHrn74jffBoSEDg4IA-ZFQb9yy86p9sFR0fObKrZap1erHtiK686Hf6wKD4EFl0cOHfqsiFz34-fLyZeBpPM5hMLu6ignFiJfAN3cl0GoHGli9tpyMxKpK5C25jgT326ADrfDZ9w',
    text: 'Amor que nunca se borra'
  }
];

const messageCards = [
  {
    title: 'Lo que admiro de ti',
    text: 'Admiro tu fuerza, tu paciencia y esa forma tan bonita de cuidar a quienes amas. Eres de esas personas que dan amor incluso cuando están cansadas.'
  },
  {
    title: 'Gracias por…',
    text: 'Gracias por ser mi hogar, mi fuerza y mi mayor bendición. Gracias por tus consejos, tus sacrificios y por nunca dejar de estar para mí.'
  },
  {
    title: 'Aunque estemos lejos',
    text: 'Aunque la distancia y los estudios nos tengan lejos, siempre estás presente en mi corazón. Moni también te quiere mucho y agradece todo el cariño que nos das.'
  },
  {
    title: 'Una nueva bendición',
    text: 'Ahora que viene una nueva bendición en camino, quiero que sepas que tu amor también será parte de esa nueva historia. Tu cariño seguirá creciendo en nuestra familia.'
  },
  {
    title: 'Mi promesa',
    text: 'Prometo seguir esforzándome para que siempre te sientas orgullosa de mí. Todo lo que logro también lleva un pedacito de ti.'
  }
];

type Step = 'intro' | 'hero' | 'envelope' | 'letter' | 'gallery' | 'cards' | 'final';

function FloatingDecor() {
  return (
    <div className="floating-decor" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, index) => (
        <motion.span
          key={index}
          className="floating-symbol"
          initial={{
            y: '110vh',
            x: `${(index * 41) % 100}vw`,
            opacity: 0,
            rotate: 0
          }}
          animate={{
            y: '-12vh',
            opacity: [0, 0.7, 0],
            rotate: [0, 18, -18]
          }}
          transition={{
            duration: 9 + (index % 6),
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'linear'
          }}
        >
          {index % 4 === 0 ? '♡' : index % 4 === 1 ? '✿' : index % 4 === 2 ? '❀' : '✧'}
        </motion.span>
      ))}
    </div>
  );
}

function Burst({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="burst-layer" aria-hidden="true">
      {Array.from({ length: 34 }).map((_, index) => {
        const angle = (index / 34) * Math.PI * 2;
        const distance = 120 + (index % 6) * 18;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        return (
          <motion.span
            key={index}
            className="burst-item"
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{ x, y, scale: [0, 1.35, 0.4], opacity: [1, 1, 0] }}
            transition={{ duration: 1.15, ease: 'easeOut' }}
          >
            {index % 3 === 0 ? '💗' : index % 3 === 1 ? '🌸' : '✨'}
          </motion.span>
        );
      })}
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState<Step>('intro');
  const [burst, setBurst] = React.useState(false);
  const [galleryIndex, setGalleryIndex] = React.useState(0);
  const [cardIndex, setCardIndex] = React.useState(0);
  const [cardOpen, setCardOpen] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playMusic = async () => {
    try {
      if (!audioRef.current) return;
      audioRef.current.volume = 0.42;
      await audioRef.current.play();
    } catch {
      // El navegador puede bloquear el audio si no hubo interacción.
    }
  };

  const startGift = async () => {
    await playMusic();

    if ('vibrate' in navigator) {
      navigator.vibrate([80, 40, 120, 40, 160]);
    }

    setBurst(true);

    setTimeout(() => {
      setBurst(false);
      setStep('hero');
    }, 1200);

    setTimeout(() => {
      setStep('envelope');
    }, 5200);
  };

  const openLetter = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(70);
    }
    setStep('letter');
  };

  const nextGallery = () => {
    if (galleryIndex < gallery.length - 1) {
      setGalleryIndex((prev) => prev + 1);
    } else {
      setStep('cards');
    }
  };

  const openCurrentCard = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(60);
    }
    setCardOpen(true);
  };

  const nextCard = () => {
    setCardOpen(false);

    setTimeout(() => {
      if (cardIndex < messageCards.length - 1) {
        setCardIndex((prev) => prev + 1);
      } else {
        setStep('final');
      }
    }, 250);
  };

  const restart = () => {
    setGalleryIndex(0);
    setCardIndex(0);
    setCardOpen(false);
    setStep('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="gift-app">
      <audio ref={audioRef} src="/music/mama.mp3" loop preload="auto" />
      <FloatingDecor />
      <Burst active={burst} />

      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.section
            key="intro"
            className="screen intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.55 }}
          >
            <motion.div
              className="gift-box"
              animate={{
                y: [0, -12, 0],
                rotate: [0, -2, 2, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="gift-lid" />
              <div className="gift-body">
                <Gift size={82} />
              </div>
              <div className="gift-glow" />
            </motion.div>

            <motion.p
              className="intro-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Un regalo hecho con amor
            </motion.p>

            <motion.h1
              className="intro-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
            >
              Para Mamita Lore
            </motion.h1>

            <motion.p
              className="intro-subtitle"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Toca el regalo y deja que empiece la sorpresa.
            </motion.p>

            <motion.button
              className="main-cta pulse-cta"
              onClick={startGift}
              whileTap={{ scale: 0.94 }}
              animate={{ boxShadow: ['0 18px 45px rgba(236, 72, 153, .28)', '0 22px 70px rgba(236, 72, 153, .48)', '0 18px 45px rgba(236, 72, 153, .28)'] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              <Sparkles size={23} />
              Abrir regalo para Lore
            </motion.button>
          </motion.section>
        )}

        {step === 'hero' && (
          <motion.section
            key="hero"
            className="screen hero-screen"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-card"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={images.hero} alt="Mamita Lore" className="hero-img" />
              <div className="hero-overlay" />
              <div className="hero-content">
                <span className="hero-badge">
                  <Sparkles size={17} />
                  Feliz día, mamita
                </span>
                <h2>Mamita Lore</h2>
                <p>Hoy no quería darte algo común. Quería regalarte un momento bonito, hecho con amor.</p>
              </div>
            </motion.div>

            <motion.p
              className="auto-note"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Preparando tu carta…
            </motion.p>
          </motion.section>
        )}

        {step === 'envelope' && (
          <motion.section
            key="envelope"
            className="screen envelope-screen"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="envelope"
              onClick={openLetter}
              whileTap={{ scale: 0.96 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="envelope-flap" />
              <Mail size={82} className="envelope-icon" />
              <div className="envelope-seal">
                <Heart size={28} fill="currentColor" />
              </div>
            </motion.div>

            <h2 className="section-title centered">Hay una carta para ti</h2>
            <p className="soft-text centered">Toca la carta, Mamita Lore.</p>

            <button className="secondary-cta" onClick={openLetter}>
              Abrir la carta
              <ChevronRight size={21} />
            </button>
          </motion.section>
        )}

        {step === 'letter' && (
          <motion.section
            key="letter"
            className="screen letter-screen"
            initial={{ opacity: 0, rotateX: 8, y: 50 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.75 }}
          >
            <div className="paper-card">
              <img src={images.together} alt="Stiven y Mamita Lore" className="letter-photo" />

              <div className="label-row">
                <Heart size={22} fill="currentColor" />
                <span>Carta</span>
              </div>

              <h2>Para mi mamita bella</h2>

              <p>
                Mamita Lore, gracias por ser mi hogar, mi fuerza y mi mayor bendición. Hoy quiero recordarte que todo lo bonito que soy y todo lo que sigo intentando construir también nace de tu amor, tus consejos y tu forma de nunca rendirte.
              </p>

              <p>
                Esta página la hice para que tengas un recuerdo diferente, algo que puedas abrir cuando quieras y sentir que tu hijo te abraza con el corazón.
              </p>

              <p className="signature">Con amor, Stiven</p>
            </div>

            <button className="main-cta" onClick={() => setStep('gallery')}>
              Ver nuestros recuerdos
              <ChevronRight size={22} />
            </button>
          </motion.section>
        )}

        {step === 'gallery' && (
          <motion.section
            key="gallery"
            className="screen gallery-screen"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-header">
              <span>Recuerdos</span>
              <h2>Nuestra galería</h2>
              <Camera size={30} />
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={galleryIndex}
                className="memory-card"
                initial={{ opacity: 0, scale: 0.92, x: 60 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.92, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <img src={gallery[galleryIndex].src} alt={gallery[galleryIndex].text} />
                <p>{gallery[galleryIndex].text}</p>
              </motion.article>
            </AnimatePresence>

            <div className="progress-dots">
              {gallery.map((_, index) => (
                <span key={index} className={index === galleryIndex ? 'active' : ''} />
              ))}
            </div>

            <button className="main-cta" onClick={nextGallery}>
              {galleryIndex < gallery.length - 1 ? 'Siguiente recuerdo' : 'Abrir cofre de mensajes'}
              <ChevronRight size={22} />
            </button>
          </motion.section>
        )}

        {step === 'cards' && (
          <motion.section
            key="cards"
            className="screen cards-screen"
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -55 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <span>Cofre</span>
              <h2>Mensaje {cardIndex + 1} de {messageCards.length}</h2>
              <HandHeart size={32} />
            </div>

            <motion.button
              className="locked-card"
              onClick={openCurrentCard}
              whileTap={{ scale: 0.96 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="locked-icon">
                <Flower2 size={35} />
              </div>
              <h3>{messageCards[cardIndex].title}</h3>
              <p>Toca para abrir este mensaje</p>
            </motion.button>

            <AnimatePresence>
              {cardOpen && (
                <motion.div
                  className="modal-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="modal-card"
                    initial={{ scale: 0.82, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  >
                    <Heart size={48} fill="currentColor" />
                    <h3>{messageCards[cardIndex].title}</h3>
                    <p>{messageCards[cardIndex].text}</p>
                    <button className="main-cta" onClick={nextCard}>
                      {cardIndex < messageCards.length - 1 ? 'Abrir siguiente mensaje' : 'Ir al final'}
                      <ChevronRight size={22} />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        )}

        {step === 'final' && (
          <motion.section
            key="final"
            className="screen final-screen"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="final-card">
              <img src={images.final} alt="Feliz Día de la Madre" className="final-img" />
              <div className="final-star">
                <Star size={36} fill="currentColor" />
              </div>

              <h2>Feliz Día de la Madre</h2>
              <p>
                Mamita Lore, eres una bendición en mi vida. Gracias por tanto amor, tanta paciencia y tanta fuerza.
              </p>

              <div className="baby-note">
                <Baby size={28} />
                <span>
                  Y ahora que viene una nueva bendición, tu amor seguirá siendo parte de nuestra historia.
                </span>
              </div>

              <h3>Te amo muchísimo.</h3>
              <p className="signature centered">Con amor, Stiven</p>

              <button className="secondary-cta" onClick={restart}>
                <RotateCcw size={21} />
                Ver otra vez
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
