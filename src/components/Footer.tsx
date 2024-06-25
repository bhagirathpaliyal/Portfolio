import Navbar from "./Navbar"
interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <div className="flex flex-col items-center gap-[50px] animate-[appear_linear] animationTimeline">
      <div ><Navbar scrollToSection={scrollToSection}/></div>
    <div className="text-center mb-[32px]">Copyright © 2024 Bhagirath Paliyal. All Rights Reserved.</div>

    </div>
  )
}

export default Footer