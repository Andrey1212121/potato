// JavaScript source code
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);
import { motion } from 'https://cdn.skypack.dev/framer-motion@7';
import { motion, useMotionValue, useViewportScroll } from 'framer-motion';



export default function App() {
    // ссылка на элемент
    const el = useRef()

    // запускаем `gsap` после рендеринга
    useEffect(() => {
        gsap.to(".el", {
            duration: 2, // Длительность анимации 2 секунды
            repeat: -1, // Бесконечное повторение анимации
            yoyo: true, // Движение туда-обратно
            rotation: "+=5", // Вращение на 5 градусов вправо и влево
            ease: "power2.inOut", // Плавная анимация
        })
    })

    return (
        <div className='buttonbox' ref={el}>
            Square
        </div>
    )
}
App()