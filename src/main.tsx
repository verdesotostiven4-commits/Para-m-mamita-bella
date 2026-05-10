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
  HandHeart,
  MessageCircleHeart
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
    src: 'https://blogger.googleusercontent.com/img/a/AVvXsEiD3UhDwxReqTiqv4lFEi4dP30LhNqnRRP9OP_ibGDmID8YUY6159GWQdLZZf6akkDeo6NhWJsTksQEURgClYwOiQKOBXGTzd2tbREpkY7PyrldpSd4NwjNnEFz19DdGOW21ys7GdSY_Fxa2XBOz8511VqtqV7wmnbrw3zExH35JBQ6Xt2mvehzZsxaFDw',
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
    text: 'Admiro su fuerza, su paciencia y esa forma tan bonita de cuidar a quienes ama. Eres de esas personas que dan amor incluso cuando están cansadas.'
  },
  {
    title: 'Gracias por…',
    text: 'Gracias por ser mi hogar, mi fuerza y mi mayor inspiración. Gracias por sus consejos, sus sacrificios y por nunca dejar de estar para mí 🥺.'
  },
  {
    title: 'Aunque estemos lejos',
    text: 'Aunque la distancia y los estudios nos tengan lejos, siempre estará presente en mi corazón. Moni también la quiere mucho y agradece todo el apoyo y cariño que nos dá por más lejos que estemos.'
  },
  {
    title: 'Una nueva bendición',
    text: 'Ahora que tenemos a un nuevo ser querido en camino, quiero que sepa que su amor también será parte de esta nueva historia. Su cariño seguirá creciendo en nuestra familia.'
  },
  {
    title: 'Mi promesa',
    text: 'Prometo seguir esforzándome para que siempre se sienta orgullosa de mí. Todo lo que logro también lleva un pedacito suyo 🤭.'
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

function GiftBurst({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="gift-burst-layer" aria-hidden="true">
      {Array.from({ length: 44 }).map((_, index) => {
        const angle = (index / 44) * Math.PI * 2;
        const distance = 105 + (index % 7) * 18;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance - 28;

        return (
          <motion.span
            key={index}
            className="burst-item"
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
            animate={{
              x,
              y,
              scale: [0, 1.45, 0.35],
              opacity: [1, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 1.45, ease: 'easeOut' }}
          >
            {index % 4 === 0 ? '💗' : index % 4 === 1 ? '🌸' : index % 4 === 2 ? '✨' : '💕'}
          </motion.span>
        );
      })}
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState<Step>('intro');
  const [burst, setBurst] = React.useState(false);
  const [giftOpening, setGiftOpening] = React.useState(false);
  const [introFlying, setIntroFlying] = React.useState(false);
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

    setGiftOpening(true);
    setIntroFlying(true);

    setTimeout(() => {
      setBurst(true);
    }, 360);

    setTimeout(() => {
      setBurst(false);
      setStep('hero');
    }, 1700);

    setTimeout(() => {
      setStep('envelope');
      setGiftOpening(false);
      setIntroFlying(false);
    }, 8200);
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
    setGiftOpening(false);
    setIntroFlying(false);
    setBurst(false);
    setStep('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="gift-app">
      <audio ref={audioRef} src="/music/mama.mp3" loop preload="auto" />
      <FloatingDecor />

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
                y: giftOpening ? [0, -8, 3, -4, 0] : [0, -12, 0],
                rotate: giftOpening ? [0, -3, 3, -2, 0] : [0, -2, 2, 0],
                scale: giftOpening ? [1, 1.05, 1.09, 1.02] : [1, 1.03, 1]
              }}
              transition={{
                duration: giftOpening ? 0.9 : 2.2,
                repeat: giftOpening ? 0 : Infinity,
                ease: 'easeInOut'
              }}
            >
              <motion.div
                className="gift-lid"
                animate={
                  giftOpening
                    ? {
                        y: [-2, -48, -76],
                        x: [0, 14, 36],
                        rotate: [0, 16, 28],
                        opacity: [1, 1, 0.92]
                      }
                    : {}
                }
                transition={{ duration: 0.85, ease: 'easeOut' }}
              />
              <motion.div
                className="gift-body"
                animate={
                  giftOpening
                    ? {
                        scale: [1, 1.04, 0.98, 1.02],
                        filter: ['brightness(1)', 'brightness(1.18)', 'brightness(1.05)']
                      }
                    : {}
                }
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                <Gift size={82} />
              </motion.div>
              <div className="gift-glow" />
              <GiftBurst active={burst} />
            </motion.div>

            <motion.p
              className="intro-kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={
                introFlying
                  ? { opacity: [1, 1, 0], y: [0, -38, -110], x: [0, -18, -80], rotate: [0, -8, -18] }
                  : { opacity: 1, y: 0 }
              }
              transition={{ delay: introFlying ? 0 : 0.25, duration: introFlying ? 0.85 : 0.5 }}
            >
              Un regalo hecho con amor
            </motion.p>

            <motion.h1
              className="intro-title"
              initial={{ opacity: 0, y: 18 }}
              animate={
                introFlying
                  ? { opacity: [1, 1, 0], y: [0, -42, -130], x: [0, 12, 76], scale: [1, 1.06, 0.85] }
                  : { opacity: 1, y: 0 }
              }
              transition={{ delay: introFlying ? 0.05 : 0.38, duration: introFlying ? 0.95 : 0.5 }}
            >
              Para Mamita Lore
            </motion.h1>

            <motion.p
              className="intro-subtitle"
              initial={{ opacity: 0, y: 18 }}
              animate={
                introFlying
                  ? { opacity: [1, 1, 0], y: [0, -30, -95], x: [0, 20, 95], rotate: [0, 5, 14] }
                  : { opacity: 1, y: 0 }
              }
              transition={{ delay: introFlying ? 0.1 : 0.5, duration: introFlying ? 0.9 : 0.5 }}
            >
              Toca el regalo y deja que empiece la sorpresa.
            </motion.p>

            <motion.button
              className="main-cta pulse-cta magic-button"
              onClick={startGift}
              whileTap={{ scale: 0.94 }}
              animate={
                introFlying
                  ? { opacity: [1, 1, 0], y: [0, 38, 130], scale: [1, 1.08, 0.8] }
                  : {
                      y: [0, -5, 0],
                      boxShadow: [
                        '0 18px 45px rgba(236, 72, 153, .28)',
                        '0 22px 70px rgba(236, 72, 153, .48)',
                        '0 18px 45px rgba(236, 72, 153, .28)'
                      ]
                    }
              }
              transition={{
                duration: introFlying ? 0.85 : 1.4,
                repeat: introFlying ? 0 : Infinity,
                ease: 'easeInOut'
              }}
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
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-card"
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
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

            <button className="secondary-cta magic-button" onClick={openLetter}>
              Abrir la carta
              <ChevronRight size={21} />
            </button>
          </motion.section>
        )}

        {step === 'letter' && (
          <motion.section
            key="letter"
            className="screen letter-screen compact-letter-screen"
            initial={{ opacity: 0, rotateX: 8, y: 50 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.75 }}
          >
            <div className="paper-card compact-paper-card">
              <img src={images.together} alt="Stiven y Mamita Lore" className="letter-photo" />

              <div className="label-row">
                <Heart size={22} fill="currentColor" />
                <span>Carta</span>
              </div>

              <h2>Para mi mamita bella</h2>

              <div className="reading-text">
                <p>
                  Mamita Lore, gracias por ser mi hogar, mi fuerza y mi mayor admiración. Hoy quiero recordarle que todo lo bonito que soy y todo lo que sigo intentando construir también nace de su amor, sus consejos y su forma de nunca rendirse.
                </p>

                <p>
                  Esta página la hice para que tenga un recuerdo diferente, algo que pueda abrir cuando quiera y sentir que su hijo la abraza con el corazón.
                </p>
              </div>

              <motion.p
                className="signature special-signature"
                initial={{ opacity: 0.65, scale: 0.96 }}
                animate={{
                  opacity: [0.65, 1, 0.85, 1],
                  scale: [0.96, 1.04, 1, 1.03],
                  textShadow: [
                    '0 0 0 rgba(236, 72, 153, 0)',
                    '0 0 18px rgba(236, 72, 153, 0.6)',
                    '0 0 8px rgba(236, 72, 153, 0.25)',
                    '0 0 22px rgba(236, 72, 153, 0.55)'
                  ]
                }}
                transition={{ delay: 12.5, duration: 2.4, repeat: Infinity, repeatDelay: 2 }}
              >
                Con amor, Stiven
              </motion.p>
            </div>

            <motion.button
              className="main-cta magic-button"
              onClick={() => setStep('gallery')}
              whileTap={{ scale: 0.94 }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 18px 45px rgba(236, 72, 153, .28)',
                  '0 24px 75px rgba(236, 72, 153, .48)',
                  '0 18px 45px rgba(236, 72, 153, .28)'
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Ver nuestros recuerdos
              <ChevronRight size={22} />
            </motion.button>
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

            <button className="main-cta magic-button" onClick={nextGallery}>
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
            <div className="section-header chest-header">
              <span>Cofre de amor</span>
              <h2>Mensaje {cardIndex + 1} de {messageCards.length}</h2>
              <HandHeart size={32} />
            </div>

            <AnimatePresence mode="wait">
              <motion.button
                key={cardIndex}
                className="locked-card upgraded-locked-card"
                onClick={openCurrentCard}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, y: 80, scale: 0.86, rotate: -2 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                  scale: 1,
                  rotate: 0
                }}
                exit={{ opacity: 0, y: -80, scale: 0.9, rotate: 3 }}
                transition={{
                  y: { duration: 2.1, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 0.45 },
                  scale: { duration: 0.55 },
                  rotate: { duration: 0.55 }
                }}
              >
                <div className="orbit-glow" />
                <div className="locked-icon">
                  <Flower2 size={35} />
                </div>
                <div className="message-pill">
                  <MessageCircleHeart size={18} />
                  Toca para abrir este mensaje
                </div>
                <h3>{messageCards[cardIndex].title}</h3>
                <p>Un mensajito especial está guardado aquí.</p>
              </motion.button>
            </AnimatePresence>

            <AnimatePresence>
              {cardOpen && (
                <motion.div
                  className="modal-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="modal-card upgraded-modal-card"
                    initial={{ scale: 0.82, opacity: 0, y: 50, rotate: -2 }}
                    animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 35 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    <Heart size={48} fill="currentColor" />
                    <h3>{messageCards[cardIndex].title}</h3>
                    <p>{messageCards[cardIndex].text}</p>
                    <motion.button
                      className="main-cta magic-button"
                      onClick={nextCard}
                      whileTap={{ scale: 0.94 }}
                      animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
                      transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {cardIndex < messageCards.length - 1 ? 'Abrir siguiente mensaje' : 'Ir al final'}
                      <ChevronRight size={22} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        )}

        {step === 'final' && (
          <motion.section
            key="final"
            className="screen final-screen compact-final-screen"
            initial={{ opacity: 0, scale: 1.12, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <motion.div
              className="final-card divine-final-card"
              initial={{ rotate: -2 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.img
                src={images.final}
                alt="Feliz Día de la Madre"
                className="final-img"
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <motion.div
                className="final-star"
                initial={{ scale: 0, rotate: -120 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.35, duration: 0.7, type: 'spring' }}
              >
                <Star size={36} fill="currentColor" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                Feliz Día de la Madre
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58 }}
              >
                Mamita Lore, eres una bendición en mi vida. Gracias por tanto amor, tanta paciencia y tanta fuerza.
              </motion.p>

              <motion.div
                className="baby-note"
                initial={{ opacity: 0, y: 18, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.72 }}
              >
                <Baby size={28} />
                <span>
                  Y ahora que viene una nueva bendición, tu amor seguirá siendo parte de nuestra historia.
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                Te amo muchísimo.
              </motion.h3>

              <motion.p
                className="signature centered special-signature"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Con amor, Stiven
              </motion.p>

              <button className="secondary-cta magic-button" onClick={restart}>
                <RotateCcw size={21} />
                Ver otra vez
              </button>
            </motion.div>
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
