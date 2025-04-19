import { DiscordIcon } from "~/components/icons/discord";
import { FacebookIcon } from "~/components/icons/facebook";
import { GithubIcon } from "~/components/icons/github";
import { GoogleIcon } from "~/components/icons/google";
import { XIcon } from "~/components/icons/x";

export const OAuth = [
  {
    provider: "google" as const,
    icon: GoogleIcon
  },
  {
    provider: "facebook" as const,
    icon: FacebookIcon
  },
  {
    provider: "github" as const,
    icon: GithubIcon
  },
  {
    provider: "discord" as const,
    icon: DiscordIcon
  },
  {
    provider: "twitter" as const,
    icon: XIcon
  }
];
