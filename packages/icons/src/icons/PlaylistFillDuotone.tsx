import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlaylistFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlaylistFillDuotone = memo(
  forwardRef<SVGSVGElement, PlaylistFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15.13a.88.88 0 0 1 0 1.74H2a.88.88 0 0 1 0-1.75zM12 11.13a.88.88 0 0 1 0 1.74H2a.88.88 0 0 1 0-1.74zM22 7.13a.88.88 0 0 1 0 1.75H2a.87.87 0 1 1 0-1.76zM22 3.13a.88.88 0 0 1 0 1.75H2a.87.87 0 1 1 0-1.75z" opacity={0.4} />
        <path d="M15.13 12.9c0-1.01 1.03-1.66 1.92-1.27l.17.1 5.05 3.1c.87.54.87 1.8 0 2.34l-5.05 3.1c-.92.57-2.1-.09-2.1-1.16z" />
    </IconBase>
  ))
);

PlaylistFillDuotone.displayName = 'PlaylistFillDuotone';

// Triple export pattern (lucide-react style)
export { PlaylistFillDuotone, PlaylistFillDuotone as PlaylistFillDuotoneIcon, PlaylistFillDuotone as SiPlaylistFillDuotone };
export default PlaylistFillDuotone;
export type { PlaylistFillDuotoneProps };
