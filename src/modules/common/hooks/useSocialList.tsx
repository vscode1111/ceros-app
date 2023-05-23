import { ReactComponent as TwitterSVG } from '../assets/twitter.svg';
import { ReactComponent as TelegramSVG } from '../assets/telegram.svg';
import { ReactComponent as MediumSVG } from '../assets/medium.svg';
import { ReactComponent as DiscordSVG } from '../assets/discord.svg';
import { useMemo } from 'react';
import { ReactString } from 'types';

export interface IItemBase {
  caption?: string;
  description?: string;
  href?: string;
}

export interface IIconItem extends IItemBase {
  Icon?: ReactString;
}

export function useSocialList(): IIconItem[] {
  return useMemo(() => {
    const list: IIconItem[] = [
      {
        Icon: <TwitterSVG />,
        caption: 'twitter',
        // href: TWITTER_LINK,
      },
      {
        Icon: <TelegramSVG />,
        caption: 'telegram',
      },
      {
        Icon: <MediumSVG />,
        caption: 'medium',
      },
      {
        Icon: <DiscordSVG />,
        caption: 'discord',
      },
    ];
    return list;
  }, []);
}
