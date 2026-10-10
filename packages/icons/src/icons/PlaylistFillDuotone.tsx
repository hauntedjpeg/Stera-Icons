import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlaylistFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlaylistFillDuotone = memo(
  forwardRef<SVGSVGElement, PlaylistFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15.13c.48 0 .88.39.88.87s-.4.88-.88.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM12 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM22 7.13c.48 0 .88.39.88.87s-.4.88-.88.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM22 3.13c.48 0 .88.39.88.87s-.4.88-.88.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path d="M15.13 12.9c0-1.01 1.03-1.66 1.92-1.27l.17.1 5.05 3.1c.87.54.87 1.8 0 2.34l-5.05 3.1c-.92.57-2.1-.09-2.1-1.16z" />
    </IconBase>
  ))
);

PlaylistFillDuotone.displayName = 'PlaylistFillDuotone';

// Triple export pattern
export { PlaylistFillDuotone, PlaylistFillDuotone as PlaylistFillDuotoneIcon, PlaylistFillDuotone as SiPlaylistFillDuotone };
export default PlaylistFillDuotone;
export type { PlaylistFillDuotoneProps };
