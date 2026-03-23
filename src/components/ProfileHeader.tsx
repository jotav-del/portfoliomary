import { motion } from "framer-motion";
import { User } from "lucide-react";

const ProfileHeader = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 pt-10 pb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Profile Photo */}
      <motion.div
        className="profile-ring"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
  <img 
    src="/foto.jpg" 
    alt="Maria Blante"
    className="w-full h-full object-cover"
  />
</div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="font-display text-3xl font-semibold tracking-wide text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Maria Blante
      </motion.h1>

      {/* Username */}
      <motion.p
        className="font-body text-sm text-muted-foreground tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        @blantex_m
      </motion.p>

      {/* Bio tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mt-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {["Criadora de conteúdo", "Lifestyle", "Humor", "Cristã ✝️", "Casada 💍"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-body tracking-wide rounded-full bg-secondary text-secondary-foreground border border-border/50"
          >
            {tag}
          </span>
        ))}
      </motion.div>


      {/* Gold line separator */}
      <motion.div
        className="w-16 h-px bg-gold mt-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      />
    </motion.div>
  );
};

export default ProfileHeader;
