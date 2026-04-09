import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlaylistFillProps = Omit<IconBaseProps, 'children'>;

const PlaylistFill = memo(
  forwardRef<SVGSVGElement, PlaylistFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="playlist-fill" {...props}>
      <path d="M15.13 12.9c0-1.01 1.03-1.66 1.92-1.27l.17.1 5.05 3.1c.87.54.87 1.8 0 2.34l-5.05 3.1c-.92.57-2.1-.09-2.1-1.16zM12 15.13a.88.88 0 0 1 0 1.74H2a.88.88 0 0 1 0-1.75zM12 11.13a.88.88 0 0 1 0 1.74H2a.88.88 0 0 1 0-1.74zM22 7.13a.88.88 0 0 1 0 1.75H2a.87.87 0 1 1 0-1.76zM22 3.13a.88.88 0 0 1 0 1.75H2a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

PlaylistFill.displayName = 'PlaylistFill';

// Triple export pattern (lucide-react style)
export { PlaylistFill, PlaylistFill as PlaylistFillIcon, PlaylistFill as SiPlaylistFill };
export default PlaylistFill;
export type { PlaylistFillProps };
