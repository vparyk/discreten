import FacebookIcon from "@/public/img/icon/facebook-icon";
import InstagramIcon from "@/public/img/icon/instagram-icon";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      {/* Instagram */}
      <Link
        href="https://www.instagram.com/discretencoaching"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </Link>

      {/* Facebook */}
      <Link
        href="https://www.facebook.com/profile.php?id=61572480759365"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </Link>
    </div>
  );
}
