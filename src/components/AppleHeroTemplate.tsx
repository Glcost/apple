import Link from "next/link";
import Image from "next/image";

interface AppleHeroTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  theme?: "dark" | "light";
}

export default function AppleHeroTemplate({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  ctaText = "Buy",
  ctaLink = "#",
  secondaryCtaText = "Learn more",
  secondaryCtaLink = "#",
  theme = "light",
}: AppleHeroTemplateProps) {
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen w-full flex flex-col justify-center items-center overflow-hidden relative ${isDark ? "bg-black text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"}`}>
      
      {/* Text Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center mt-20 md:mt-32 px-4 max-w-4xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-1000 ease-out">
        <h2 className={`text-xl md:text-2xl font-semibold tracking-wide mb-2 ${isDark ? "text-neutral-300" : "text-[#86868b]"}`}>
          {subtitle}
        </h2>
        <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-4 md:mb-6 leading-tight">
          {title}
        </h1>
        <p className={`text-lg md:text-2xl max-w-2xl font-medium mb-8 ${isDark ? "text-neutral-400" : "text-[#86868b]"}`}>
          {description}
        </p>
        
        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link href={ctaLink}>
            <button className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${isDark ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"}`}>
              {ctaText}
            </button>
          </Link>
          <Link href={secondaryCtaLink}>
            <button className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${isDark ? "bg-transparent text-white hover:bg-neutral-900 border border-neutral-700" : "bg-transparent text-black hover:bg-neutral-200 border border-neutral-300"}`}>
              {secondaryCtaText}
            </button>
          </Link>
        </div>
      </div>

      {/* Image / Graphic */}
      <div className="w-full h-full flex-1 relative mt-16 md:mt-24 animate-in fade-in duration-1000 delay-300">
        {/* Placeholder gradient mimicking a large product hero */}
        <div className="absolute inset-0 flex items-end justify-center w-full h-[60vh] md:h-[80vh] px-4 md:px-20">
             {imageUrl ? (
               <div className="relative w-full h-full max-w-7xl mx-auto rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden shadow-2xl transition-transform duration-1000 hover:scale-[1.02]">
                  <Image 
                    src={imageUrl} 
                    alt={imageAlt} 
                    fill 
                    className="object-cover object-top"
                  />
               </div>
             ) : (
                 <div className={`w-full h-full max-w-7xl mx-auto rounded-t-[3rem] md:rounded-t-[5rem] shadow-2xl transition-transform duration-1000 hover:scale-[1.02] ${isDark ? 'bg-gradient-to-t from-neutral-900 to-neutral-800' : 'bg-gradient-to-t from-neutral-300 to-neutral-200'}`}>
                    {/* Abstract placeholder shape */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl bg-current"></div>
                    </div>
                 </div>
             )}
        </div>
      </div>

    </div>
  );
}
