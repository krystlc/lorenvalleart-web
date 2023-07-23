import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import YouTubeIcon from "@/assets/youtube.svg";
import EtsyIcon from "@/assets/etsy.svg";

export default function SectionFollow() {
  const links: { title: string; href: string; icon?: string }[] = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/lorenvalleart",
      icon: FacebookIcon,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/lorenvalleart/",
      icon: InstagramIcon,
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/channel/UCafeShiZ-qkA1izJzcp6ntg",
      icon: YouTubeIcon,
    },
    {
      title: "Etsy",
      href: "https://www.etsy.com/shop/lorenvalleart",
      icon: EtsyIcon,
    },
  ];
  return (
    <section className="flex items-center justify-center h-screen">
      <div className=" space-y-2">
        <p className="mb-4">Follow my channels:</p>
        {links.map((link) => {
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              title={link.title}
              className="flex items-center gap-2"
            >
              {link.icon && (
                <img src={link.icon} alt="Back" className="h-8 w-8" />
              )}
              <span>{link.title}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
