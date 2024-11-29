"use client"
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from 'lucide-react'
interface ShareButtonsProps {
    shareUrl: string, shareText: string
}
export function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {

    const handleFacebookShare = () => {
        const facebookUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookUrl, "_blank", "noopener,noreferrer");
    };

    const handleInstagramShare = () => {
        const instagramUrl = "https://www.instagram.com/yourProfileOrPostUrl"; // Replace with your Instagram URL
        window.open(instagramUrl, "_blank", "noopener,noreferrer");
    };
    const handleTwitterShare = () => {
        const twitterUrl = `https://twitter.com/intent/post?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        window.open(twitterUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleFacebookShare}>
                <Facebook className="mr-2 h-4 w-4" />
                Share
            </Button>
            <Button variant="outline" size="sm" onClick={handleInstagramShare}>
                <Instagram className="mr-2 h-4 w-4" />
                share
            </Button>
        </div>
    );
}
