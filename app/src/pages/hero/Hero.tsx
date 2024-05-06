import Buttons from "../../components/buttons/Buttons";
import CarouselInstagram from "../../components/carousel/Carousel";
import { IPropsSlides } from "../../components/carousel/IPropsSlides";
import SplitText from "./SplitText";
import { motion } from "framer-motion";

export default function Hero() {
  const heading = "Iphone 15 Pro Max";
  const descriptionA =
    "A estrutura de titânio é fixada por meio de difusão em estado sólido em um novo quadro interno de alumínio. Uma inovação na indústria, com processo termomecânico que une os dois metais com uma pressão altíssima.";
  const descriptionB =
    "O quadro interno também é feito com 100% de alumínio reciclado, o que amplia o uso total de materiais reciclados e ajuda a atingir nossos objetivos climáticos para 2030.";

  const headingChars = SplitText(heading);
  const descriptionAChars = SplitText(descriptionA);
  const descriptionBChars = SplitText(descriptionB);

  const slides: IPropsSlides = {
    slides: [
      "https://i.imgur.com/1wH3ySf.jpeg",
      "https://i.imgur.com/BpIZCXT.jpeg",
      "https://i.imgur.com/TdBIqtE.jpeg",
      "https://i.imgur.com/QGdE0k2.jpeg",
    ],
  };
  const variants = {
    hidden: {
      opacity: 0,
    },
    reaveal: {
      opacity: 1,
    },
    class: {},
  };

  return (
    <>
      <section className="flex flex-col">
        <br />
        <div className="flex flex-col">
          <video
            src="https://i.imgur.com/OacQLlx.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            className="z-[-2]"
          ></video>
          <div className="flex align-items relative right-0 top-[-150px] justify-end p-4">
            <a href="#buy-now">
              <button className="text-white transition duration-300 ease-in-out delay-75 hover:text-white border border-green-700 hover:border-gray-100 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-100">
                Comprar agora
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-center text-3xl">Um iPhone forjado em titânio.</h1>
          <div className="flex justify-center flex-wrap gap-40 my-20">
            <div className="flex flex-col items-center">
              <img
                className="h-96 max-w-[418px]"
                src="https://www.apple.com/v/iphone-15-pro/c/images/overview/design/dd_finish__mni8m5zuumye_large.jpg"
                alt="moldes de titanium"
              />
              <p className="text-gray-400 text-center text-xl max-w-[300px]">
                As molduras de titânio têm <span className="text-white font-bold">acabamento refinado</span> obtido por
                usinagem de precisão, depois são lixadas, escovadas e jateadas.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="h-96 object-cover max-w-[418px]"
                src="https://i.imgur.com/CnF4gyM.jpeg"
                alt="acabamento de titanium forjado"
              />
              <button id="animate">teste</button>
              <p className="text-gray-400 text-center text-xl max-w-[300px]">
                Os novos cantos são arredondados e as bordas, as mais finas que um iPhone já teve. Detalhes que deixam o
                aparelho ainda <span className="text-white font-bold">mais confortável de segurar</span>.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-center text-5xl p-20 transition delay-75 duration-300">
              {headingChars.map((char, index) => (
                <motion.span
                  key={index * 0.1}
                  transition={{ delay: index * 0.03 }}
                  whileInView={"reaveal"}
                  variants={variants}
                  initial="hidden"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <video className="" src="https://i.imgur.com/qxDg7su.mp4" autoPlay muted loop></video>
          </div>
          <div className="card-desc flex flex-wrap justify-center min-h-[300px]">
            <div className="flex content-center m-8 card-desc-content max-w-[400px]">
              <p className="text-gray-500 text-center text-xl">
                {descriptionAChars.map((char, index) => (
                  <motion.span
                    key={index * 0.1}
                    transition={{ delay: index * 0.01 }}
                    variants={variants}
                    whileInView={"reaveal"}
                    initial="hidden"
                    className=""
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
            </div>
            <div className="flex content-center m-8 card-desc-content max-w-[400px]">
              <p className="text-gray-500 text-center text-xl">
                {descriptionBChars.map((char, index) => (
                  <motion.span
                    key={index * 0.1}
                    transition={{ delay: index * 0.01 }}
                    variants={variants}
                    whileInView={"reaveal"}
                    initial="hidden"
                    className=""
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <CarouselInstagram slides={slides.slides} />
          <div className="flex mx-auto flex-col gap-2 justify-center">
            <div className="flex flex-col gap-4">
              <h2 className="max-w-[300x] text-white text-[26px] font-bold">GPU até 20% mais rápida</h2>
              <p className="xl text-gray-500 max-w-[400px]">agora com 6 núcleos</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-[300x] text-white text-[26px] font-bold">CPU até 10% mais rápida</h2>
              <p className="xl text-gray-500 max-w-[400px]">com 6 núcleos</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-[300x] text-white text-[26px] font-bold">Traçado de raios até 4x mais rápido</h2>
              <p className="xl text-gray-500 max-w-[400px]">que com o A16 Bionic</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-[300x] text-white text-[26px] font-bold">Neural Engine até 2x mais rápido</h2>
              <p className="xl text-gray-500 max-w-[400px]">
                que executa quase 35 trilhões de operações por segundo com 16 núcleos
              </p>
            </div>
          </div>
        </div>
        <div id="buy-now" className="mt-20">
          <h2 className="text-white text-[26px] font-bold my-8">Diponível nas melhores formas de pagamentos</h2>
          <div className="flex flex-wrap items-center justify-center gap-4"></div>
          <Buttons />
        </div>
      </section>
    </>
  );
}
