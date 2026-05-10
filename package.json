import React from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Music, Pause, Play, Sparkles, Gift, Camera, Flower2, Star, RotateCcw } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

const images = {
  hero: 'https://blogger.googleusercontent.com/img/a/AVvXsEj-XkF3ma0Y-KltE_GDN1iYbjmy7eZz7PHuHE9fzIIk2daYZFmRYBh7_D-lwsht_fAaYWcV3s0fCl4KEy1dxljawcRzcLgz5r3Ydw3w4SNLeNXDIQxaTC_2nJxh9ryKrLd7ZapyVhWQaDQ2jdXIRFfF1LIsJlsqjhGFb0iJyHqz7kq0Flc977fdbw9s_dI',
  together: 'https://blogger.googleusercontent.com/img/a/AVvXsEj35Yf_s2a-V3ADiHClQd5pjiyHU3HBqZlj3enxQff9-qI-NXtQVPeDjmLtD1QioOXC6kj0FwAfY7n0xIbMWHqRkGMEhRJ9cwmPtufCgDkT8w54vWvrF2S9WdbvvyaTBiySAD01l-cnqknFqejHq3pEmH5_rrGYueb-uXTWKae7vhrocl9nCpmOsguM2ZY',
  final: 'https://blogger.googleusercontent.com/img/a/AVvXsEhenTWq9X8tkjGWUGYXkN9DdBYWwJv8c9DJ8_fwsX745qsn15bVROYXnnVTALvEJwMqGUr_d10S7s-j0dNb_3q2OxkFEiFUkwMdC9IFxAFPN7bBDF-yBc7DYW-OSGc4wbgnSryJJ2mqY4c9EU_F-gMmAnoIvydts65xgeMP0xphm9x64lglzv-_T59v060'
};

const gallery = [
  ['https://blogger.googleusercontent.com/img/a/AVvXsEjeDwl8otHPQ-4nvaeXPZPV6J-NWmcY75vvOFotMGOk3fv0U6USk5yHSpZ25mOjBQPLZMEsQzRPQYdo-Vt5Mc7AFoqsMrEEZT6irx7m2EAjEHsP9o4ER0BLCY7ISzOSYvyHPErzCVvFi7134rutsWI1dmqRBkSMr3jk4XDeLTQu-4l3I_HmRna74bMwZbg','Un recuerdo que vale oro'],
  ['https://blogger.googleusercontent.com/img/a/AVvXsEjN3-FvdyUNHkeXCWV8Vv0gzsQzCJBgE2wHO9XdxQNvY3B1B_rZEANUzNAs1eD8zu-IXXhg5VD2DEZWl4ej1YXkLnyRdnVQQcJ0L-mkJ7MbcN7cRlvyxYPnxOnPjAwGrZOvhpb3_xgaLBj38zCkRCLn66F_At-7Gq4OhTb04J5xRro4DxUZ_11a4zS2alc','Tu sonrisa siempre ilumina todo'],
  ['https://blogger.googleusercontent.com/img/a/AVvXsEjhWA7D1p7W6i5TBBJDb8DwgEYrrMLh6qnuNUz1y4cW2Agu3_9rutwIThHa-3gs8kHaLCQV3uE2o3JFpK4DQNI321cCSx5usQS3LM6BaSkziC_ZZIPRa21D37-c7ojQU2ewZcIzdJxb3AuD7Z8YHgPn19EDoYJOrXIwyAg7ize2EriNaYa5psNL5qGx-tA','Momentos sencillos, amor infinito'],
  ['https://blogger.googleusercontent.com/img/a/AVvXsEgo1YAw737clcfXy8fTuyoCSJohvp2Z8I_2DGYNbpZ2C9WWahY8CKBbOOLVOIfZFrWpvKeXU-omlpbJnxyXG-Op6IUqrruY-2_PPixXzaNTc4EmexD_aMUosNvGZf3NiY1yysR5z-r8L3YGkuIh_BgPCO6YSWvZxGgEd88kd4tjNhcCy3dHfTXxr4Jhd2s','Gracias por estar siempre'],
  ['https://blogger.googleusercontent.com/img/a/AVvXsEjnFS1GbuAkTCtzlReZkL5OGwUY8yt_yVE-7CsrQKHhwkwv35y5RJ5lHOGqoqxoZJwsFa7wOiwtL7lB5_fOYJmQL72dN4jv1q5drCKc4X_eZxtvT-xRYidYlB8QTxK2YOYwUOqGf7WFOWgDcTtgx4jb-O5TlJfPW2Qgusfys7pCU9Uy45WIzHP_dxyOKNc','Mi lugar seguro'],
  ['https://blogger.googleusercontent.com/img/a/AVvXsEguvAVNQ8hi1dZK0i2laMcgw352Td6b1nmCRBx97tyNy6Szda6aNT_t3qJUpzw84sJGTivOjBWlOK-f3JTUF5U0vl7JvOpQsY4FpoJMfHUCeZIH2c0I8SQjNnLFdLxJiSkBJ4RpqNnKoPmYTvpuC2h73kVcbFw2g7mK5CauMjdJP_9kPFbvhWDmM4jIFeM','Cada foto guarda una historia'],
  ['https://blogger.googleusercontent.com/img/a/AVvXsEjqnuB6Rxts_tiwsaepyZRsm2Qh-qhu-kAuVabksUAdyqwhC5ulVIcodMSN2MsrFIiwagNnLJaJmzBw5V-uxCbg3unEE93DyNNyk-g7u3AmoU6ZULZN37f8JmzhtzSqb0cDn9MQfUp6XMwOXeJlT33rzestWKnS1JvBz1ee6bKseWFWKrY6ZDui2CEcUL4','La mejor mamá del mundo'],
  ['https://blogger.googleusercontent.com/img/a/AVvXsEjQtsXJZSonVVdKydUeYaF6AKOkxTIkqo49Jt5YTpQzh2ZrYKQnfiAvHrn74jffBoSEDg4IA-ZFQb9yy86p9sFR0fObKrZap1erHtiK686Hf6wKD4EFl0cOHfqsiFz34-fLyZeBpPM5hMLu6ignFiJfAN3cl0GoHGli9tpyMxKpK5C25jgT326ADrfDZ9w','Amor que nunca se borra']
];

const cards = [
  ['Lo que admiro de ti','Tu fuerza, tu paciencia y esa forma tan bonita de cuidar a quienes amas.'],
  ['Gracias por…','Por ser mi hogar, mi fuerza y mi mayor bendición.'],
  ['Nunca olvido','Cada sacrificio, cada consejo y cada momento en que estuviste para mí.'],
  ['Mi promesa','Prometo seguir esforzándome para que siempre te sientas orgullosa de mí.']
];

function FloatingLove(){return <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">{Array.from({length:18}).map((_,i)=><motion.span key={i} className="absolute text-pink-300/60" initial={{y:'110vh',x:`${(i*37)%100}vw`,opacity:0}} animate={{y:'-10vh',opacity:[0,.75,0],rotate:[0,20,-20]}} transition={{duration:8+(i%6),repeat:Infinity,delay:i*.7,ease:'linear'}}>{i%3===0?'✿':i%3===1?'♡':'❀'}</motion.span>)}</div>}

function App(){
  const [opened,setOpened]=React.useState(false);
  const [playing,setPlaying]=React.useState(false);
  const [selected,setSelected]=React.useState<number|null>(null);
  const audioRef=React.useRef<HTMLAudioElement>(null);
  const start=async()=>{setOpened(true); setTimeout(()=>document.getElementById('carta')?.scrollIntoView({behavior:'smooth'}),350); try{if(audioRef.current){audioRef.current.volume=.38; await audioRef.current.play(); setPlaying(true)}}catch{setPlaying(false)}};
  const toggleMusic=async()=>{if(!audioRef.current)return; if(playing){audioRef.current.pause(); setPlaying(false)}else{try{audioRef.current.volume=.38; await audioRef.current.play(); setPlaying(true)}catch{}}};
  return <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#ffe1ec_0%,#fff5ed_42%,#ffe7d1_100%)] text-rose-950">
    <audio ref={audioRef} src="/music/mama.mp3" loop preload="auto" />
    <FloatingLove />
    <button onClick={toggleMusic} className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white/75 px-4 py-3 text-sm font-bold shadow-xl backdrop-blur-xl border border-white/70 active:scale-95 transition">{playing?<Pause size={17}/>:<Play size={17}/>} Música</button>

    <section className="relative z-10 flex min-h-screen flex-col items-center justify-end px-5 pb-8 pt-20 text-center">
      <motion.div initial={{scale:.92,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.8}} className="relative mb-6 w-full max-w-[390px] overflow-hidden rounded-[42px] shadow-2xl">
        <img src={images.hero} className="h-[68vh] max-h-[690px] min-h-[470px] w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 via-rose-900/8 to-white/5" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-md"><Sparkles size={15}/> Regalo digital</div>
          <h1 className="text-4xl font-black tracking-tight drop-shadow-lg">Mamita Lore</h1>
          <p className="mt-2 text-sm leading-relaxed text-white/90">Hoy no quería darte algo común. Quería regalarte una experiencia hecha con amor.</p>
        </div>
      </motion.div>
      <motion.button whileTap={{scale:.96}} whileHover={{scale:1.02}} onClick={start} className="relative z-20 flex w-full max-w-[350px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-4 text-base font-black text-white shadow-[0_18px_45px_rgba(225,29,72,.34)]"><Gift/> Abrir mi regalo</motion.button>
      <p className="mt-3 text-xs font-medium text-rose-900/60">Toca el botón para iniciar la música y la sorpresa.</p>
    </section>

    <section id="carta" className="relative z-10 px-5 py-12">
      <motion.div initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass mx-auto max-w-[430px] rounded-[36px] p-5">
        <div className="overflow-hidden rounded-[30px]"><img src={images.together} className="h-[360px] w-full object-cover" loading="lazy" /></div>
        <div className="p-3"><div className="mb-3 flex items-center gap-2 text-rose-600"><Heart fill="currentColor" size={20}/><span className="text-sm font-black uppercase tracking-[.25em]">Carta</span></div>
          <h2 className="text-3xl font-black">Para mi mamita bella</h2>
          <p className="mt-4 text-[15px] leading-7 text-rose-950/75">Mamita Lore, gracias por ser mi hogar, mi fuerza y mi mayor bendición. Hoy quiero recordarte que todo lo bonito que soy y todo lo que sigo intentando construir también nace de tu amor, tus consejos y tu forma de nunca rendirte.</p>
          <p className="mt-3 text-[15px] leading-7 text-rose-950/75">Esta página la hice para que tengas un recuerdo diferente, algo que puedas abrir cuando quieras y sentir que tu hijo te abraza con el corazón.</p>
          <p className="mt-5 text-right text-lg font-black text-rose-700">Con amor, Stiven</p></div>
      </motion.div>
    </section>

    <section className="relative z-10 px-5 py-10"><div className="mx-auto max-w-[430px]"><div className="mb-5 flex items-end justify-between"><div><p className="text-sm font-black uppercase tracking-[.25em] text-rose-500">Recuerdos</p><h2 className="text-3xl font-black">Nuestra galería</h2></div><Camera className="text-rose-500"/></div>
      <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-4">{gallery.map(([src,txt],i)=><motion.article key={src} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="glass min-w-[78%] snap-center rounded-[30px] p-3"><img src={src} className="h-[330px] w-full rounded-[24px] object-cover" loading="lazy"/><p className="px-2 pt-3 text-center text-sm font-bold text-rose-950/75">{txt}</p></motion.article>)}</div></div></section>

    <section className="relative z-10 px-5 py-10"><div className="mx-auto max-w-[430px]"><p className="text-sm font-black uppercase tracking-[.25em] text-rose-500">Cofre</p><h2 className="text-3xl font-black">Toca una tarjeta</h2><div className="mt-5 grid grid-cols-1 gap-4">{cards.map(([title,text],i)=><motion.button key={title} whileTap={{scale:.98}} onClick={()=>setSelected(i)} className="glass rounded-[28px] p-5 text-left"><div className="flex items-center gap-3"><div className="rounded-2xl bg-rose-100 p-3 text-rose-600"><Flower2/></div><div><h3 className="text-xl font-black">{title}</h3><p className="text-sm text-rose-950/60">Toca para abrir este mensaje</p></div></div></motion.button>)}</div></div></section>

    <section className="relative z-10 px-5 py-12"><motion.div initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="glass mx-auto max-w-[430px] rounded-[38px] p-5 text-center"><img src={images.final} className="h-[340px] w-full rounded-[30px] object-cover" loading="lazy"/><div className="py-6"><Star className="mx-auto mb-3 text-amber-500" fill="currentColor"/><h2 className="text-4xl font-black">Feliz Día de la Madre</h2><p className="mt-4 leading-7 text-rose-950/75">Mamita Lore, eres una bendición en mi vida. Gracias por tanto amor, tanta paciencia y tanta fuerza.</p><p className="mt-5 text-xl font-black text-rose-700">Te amo muchísimo.</p><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 font-black text-white shadow-xl"><RotateCcw size={18}/> Ver otra vez</button></div></motion.div></section>

    <AnimatePresence>{selected!==null&&<motion.div className="fixed inset-0 z-[70] grid place-items-center bg-rose-950/50 p-5 backdrop-blur-sm" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}><motion.div onClick={e=>e.stopPropagation()} initial={{scale:.86,opacity:0,y:30}} animate={{scale:1,opacity:1,y:0}} exit={{scale:.9,opacity:0}} className="max-w-[360px] rounded-[34px] bg-white p-7 text-center shadow-2xl"><Heart className="mx-auto mb-4 text-rose-500" fill="currentColor" size={42}/><h3 className="text-2xl font-black">{cards[selected][0]}</h3><p className="mt-4 leading-7 text-rose-950/70">{cards[selected][1]}</p><button onClick={()=>setSelected(null)} className="mt-6 rounded-full bg-rose-500 px-6 py-3 font-black text-white">Cerrar</button></motion.div></motion.div>}</AnimatePresence>
  </main>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
