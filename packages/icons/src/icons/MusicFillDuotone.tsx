import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MusicFillDuotone = memo(
  forwardRef<SVGSVGElement, MusicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.94 16.37c.65 0 1.18.54 1.18 1.2a2.56 2.56 0 0 1-2.56 2.55c-.65 0-1.18-.53-1.18-1.18a2.56 2.56 0 0 1 2.56-2.57M17.94 14.37c.65 0 1.18.54 1.18 1.2a2.56 2.56 0 0 1-2.56 2.55c-.65 0-1.18-.53-1.18-1.18a2.56 2.56 0 0 1 2.56-2.57M18.69 4.1c.23-.03.43.14.43.38v1.78L8.89 7.96v-1.9c0-.18.13-.34.3-.37z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.4 2.38c1.3-.22 2.47.78 2.48 2.1v11.08a4.3 4.3 0 0 1-4.32 4.31 2.94 2.94 0 0 1-2.93-2.93 4.3 4.3 0 0 1 4.3-4.32q.64.01 1.2.26V8.03L8.88 9.74v7.82a4.3 4.3 0 0 1-4.32 4.31 2.94 2.94 0 0 1-2.93-2.93 4.3 4.3 0 0 1 4.3-4.32q.65.01 1.2.26V6.06c0-1.04.75-1.93 1.77-2.1zm-12.46 14a2.56 2.56 0 0 0-2.57 2.56c0 .65.54 1.18 1.2 1.18a2.56 2.56 0 0 0 2.55-2.56c0-.65-.53-1.19-1.18-1.19m12-2a2.56 2.56 0 0 0-2.57 2.56c0 .65.54 1.18 1.2 1.18a2.56 2.56 0 0 0 2.55-2.56c0-.65-.53-1.19-1.18-1.19m.75-10.27-9.5 1.58a.4.4 0 0 0-.31.37v1.9l10.25-1.7V4.48c0-.24-.21-.41-.44-.37" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicFillDuotone.displayName = 'MusicFillDuotone';

// Triple export pattern (lucide-react style)
export { MusicFillDuotone, MusicFillDuotone as MusicFillDuotoneIcon, MusicFillDuotone as SiMusicFillDuotone };
export default MusicFillDuotone;
export type { MusicFillDuotoneProps };
