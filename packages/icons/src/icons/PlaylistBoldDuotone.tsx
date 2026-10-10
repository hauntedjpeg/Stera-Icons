import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlaylistBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlaylistBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlaylistBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM12 11c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 7c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 3c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M15 12.9c0-1.1 1.13-1.8 2.1-1.38l.19.1 5.04 3.1c.95.59.95 1.97 0 2.56l-5.04 3.1c-1 .62-2.29-.1-2.29-1.27zm2 5.31L20.6 16 17 13.79z" clipRule="evenodd" />
    </IconBase>
  ))
);

PlaylistBoldDuotone.displayName = 'PlaylistBoldDuotone';

// Triple export pattern
export { PlaylistBoldDuotone, PlaylistBoldDuotone as PlaylistBoldDuotoneIcon, PlaylistBoldDuotone as SiPlaylistBoldDuotone };
export default PlaylistBoldDuotone;
export type { PlaylistBoldDuotoneProps };
