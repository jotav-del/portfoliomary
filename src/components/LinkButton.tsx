import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface LinkButtonProps {
  icon: LucideIcon;
  label: string;
  subtitle?: string;
  href: string;
  index: number;
  emoji?: string;
}

const LinkButton = ({ icon: Icon, label, subtitle, href, index, emoji }: LinkButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-button shimmer glass-card flex items-center gap-4 w-full text-left group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 + index * 0.12, duration: 0.5, ease: "easeOut" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
        {emoji ? (
          <span className="text-lg">{emoji}</span>
        ) : (
          <Icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-body font-normal text-foreground text-[15px] leading-snug">
          {label}
        </span>
        {subtitle && (
          <span className="font-body text-xs text-muted-foreground mt-0.5">
            {subtitle}
          </span>
        )}
      </div>
      <div className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.a>
  );
};

export default LinkButton;
