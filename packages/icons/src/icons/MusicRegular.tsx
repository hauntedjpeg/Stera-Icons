import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicRegularProps = Omit<IconBaseProps, 'children'>;

const MusicRegular = memo(
  forwardRef<SVGSVGElement, MusicRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.42 2.5c1.22-.2 2.33.74 2.33 1.98v11.08c0 2.31-1.87 4.19-4.19 4.19-1.55 0-2.81-1.26-2.81-2.81 0-2.32 1.87-4.19 4.19-4.19q.71 0 1.31.33v-5.2L8.75 9.65v7.92c0 2.31-1.87 4.19-4.19 4.19-1.55 0-2.81-1.26-2.81-2.81 0-2.32 1.87-4.19 4.19-4.19q.71 0 1.31.33V6.06c0-.98.7-1.81 1.67-1.97zM5.94 16.25c-1.49 0-2.69 1.2-2.69 2.69 0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31m12-2c-1.49 0-2.69 1.2-2.69 2.69 0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31m.73-10.27-9.5 1.59c-.24.04-.42.24-.42.49V8.1l10.5-1.75V4.48c0-.31-.28-.55-.58-.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicRegular.displayName = 'MusicRegular';

// Triple export pattern
export { MusicRegular, MusicRegular as MusicRegularIcon, MusicRegular as SiMusicRegular };
export default MusicRegular;
export type { MusicRegularProps };
