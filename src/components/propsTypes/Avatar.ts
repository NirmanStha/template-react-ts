export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: string;
  className?: string;
  username?: string;
  bgColorName?: string;
  avatarItems?: AvatarItems[];
}
export interface AvatarItems {
  title: string;
  url?: string;
}
