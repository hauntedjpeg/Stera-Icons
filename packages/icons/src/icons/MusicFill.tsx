import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicFillProps = Omit<IconBaseProps, 'children'>;

const MusicFill = memo(
  forwardRef<SVGSVGElement, MusicFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.4 2.38c1.3-.22 2.47.78 2.48 2.1v11.08a4.3 4.3 0 0 1-4.32 4.31 2.94 2.94 0 0 1-2.93-2.93 4.3 4.3 0 0 1 4.3-4.32q.64.01 1.2.26V8.03L8.88 9.74v7.82a4.3 4.3 0 0 1-4.32 4.31 2.94 2.94 0 0 1-2.93-2.93 4.3 4.3 0 0 1 4.3-4.32q.65.01 1.2.26V6.06c0-1.04.75-1.93 1.77-2.1z" />
    </IconBase>
  ))
);

MusicFill.displayName = 'MusicFill';

// Triple export pattern (lucide-react style)
export { MusicFill, MusicFill as MusicFillIcon, MusicFill as SiMusicFill };
export default MusicFill;
export type { MusicFillProps };
