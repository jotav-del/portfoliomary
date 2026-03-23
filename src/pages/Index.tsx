import { motion } from "framer-motion";
import { MessageCircle, Video, ShoppingBag, Mail } from "lucide-react";
import bgTexture from "@/assets/bg-texture.jpg";
import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";

const links = [
  {
    icon: MessageCircle,
    label: "Parcerias / Contato",
    subtitle: "Fale comigo para parcerias",
    href: "https://wa.me/5569992157680",
    emoji: "📩",
  },
  {
    icon: Video,
    label: "Meus Vídeos",
    subtitle: "Conteúdos em vídeo",
    href: "https://youtube.com/@mariablante?si=u-4xN6nUdnWpD3fK",
    emoji: "🎥",
  },
  {
    icon: Mail,
    label: "Email para contato",
    subtitle: "Contate via email",
    href: "mailto:contato.marybm@gmail.com?subject=Contato&body=Olá,%20vim%20pelo%20seu%20portfólio",
    emoji: "📧",
  }
];

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={bgTexture}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full bg-gold/10 pointer-events-none"
          style={{
            width: 80 + i * 40,
            height: 80 + i * 40,
            top: `${15 + i * 18}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main content */}
      <main className="relative z-10 w-full max-w-md mx-auto px-5 pb-10">
        <ProfileHeader />

        {/* Links */}
        <div className="flex flex-col gap-3 mt-4">
          {links.map((link, i) => (
            <LinkButton key={link.label} {...link} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-12 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="w-10 h-px bg-gold/40 mx-auto mb-4" />
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © Maria Blante — Todos os direitos reservados
          </p>
          <p className="font-display italic text-[10px] text-muted-foreground/60 mt-1">
            feito com 💖
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
