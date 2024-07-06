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
    // ������ �� �������
    const el = useRef()

    // ��������� `gsap` ����� ����������
    useEffect(() => {
        gsap.to(".el", {
            duration: 2, // ������������ �������� 2 �������
            repeat: -1, // ����������� ���������� ��������
            yoyo: true, // �������� ����-�������
            rotation: "+=5", // �������� �� 5 �������� ������ � �����
            ease: "power2.inOut", // ������� ��������
        })
    })

    return (
        <div className='buttonbox' ref={el}>
            Square
        </div>
    )
}
App()