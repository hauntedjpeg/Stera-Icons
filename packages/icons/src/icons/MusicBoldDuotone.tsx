import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MusicBoldDuotone = memo(
  forwardRef<SVGSVGElement, MusicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.38 2.26c1.37-.23 2.62.83 2.62 2.22V15.5c-.02-1.3-.85-2.4-2-2.82V8.2L9 9.84v7.67c-.02-1.3-.85-2.4-2-2.83V6.06c0-1.1.8-2.04 1.88-2.22zm.33 1.97L9.2 5.8c-.12.02-.21.13-.21.25v1.76l10-1.67V4.48c0-.16-.14-.28-.3-.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M5.94 14.5C7.63 14.5 9 15.87 9 17.56 9 20.01 7.01 22 4.56 22c-1.69 0-3.06-1.37-3.06-3.06 0-2.45 1.99-4.44 4.44-4.44m0 2c-1.35 0-2.44 1.1-2.44 2.44 0 .58.48 1.06 1.06 1.06C5.91 20 7 18.9 7 17.56c0-.58-.48-1.06-1.06-1.06M17.94 12.5c1.69 0 3.06 1.37 3.06 3.06 0 2.45-1.99 4.44-4.44 4.44-1.69 0-3.06-1.37-3.06-3.06 0-2.45 1.99-4.44 4.44-4.44m0 2c-1.35 0-2.44 1.1-2.44 2.44 0 .58.48 1.06 1.06 1.06 1.35 0 2.44-1.1 2.44-2.44 0-.58-.48-1.06-1.06-1.06" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicBoldDuotone.displayName = 'MusicBoldDuotone';

// Triple export pattern
export { MusicBoldDuotone, MusicBoldDuotone as MusicBoldDuotoneIcon, MusicBoldDuotone as SiMusicBoldDuotone };
export default MusicBoldDuotone;
export type { MusicBoldDuotoneProps };
