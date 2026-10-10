import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicBoldProps = Omit<IconBaseProps, 'children'>;

const MusicBold = memo(
  forwardRef<SVGSVGElement, MusicBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.38 2.26c1.37-.23 2.62.83 2.62 2.22v11.08c0 2.45-1.99 4.44-4.44 4.44-1.69 0-3.06-1.37-3.06-3.06 0-2.45 1.99-4.44 4.44-4.44q.56 0 1.06.2V8.17L9 9.85v7.71C9 20.01 7.01 22 4.56 22c-1.69 0-3.06-1.37-3.06-3.06 0-2.45 1.99-4.44 4.44-4.44q.56 0 1.06.2V6.05c0-1.1.8-2.04 1.88-2.22zM5.94 16.5c-1.35 0-2.44 1.1-2.44 2.44 0 .58.48 1.06 1.06 1.06C5.91 20 7 18.9 7 17.56c0-.58-.48-1.06-1.06-1.06m12-2c-1.35 0-2.44 1.1-2.44 2.44 0 .58.48 1.06 1.06 1.06 1.35 0 2.44-1.1 2.44-2.44 0-.58-.48-1.06-1.06-1.06m.77-10.27L9.2 5.8c-.12.02-.21.13-.21.25v1.76l10-1.67V4.48c0-.16-.14-.28-.3-.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicBold.displayName = 'MusicBold';

// Triple export pattern
export { MusicBold, MusicBold as MusicBoldIcon, MusicBold as SiMusicBold };
export default MusicBold;
export type { MusicBoldProps };
