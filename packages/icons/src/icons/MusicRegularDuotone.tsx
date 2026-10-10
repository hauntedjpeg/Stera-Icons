import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MusicRegularDuotone = memo(
  forwardRef<SVGSVGElement, MusicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.42 2.5c1.22-.2 2.33.74 2.33 1.98v11.05c-.01-1.06-.62-1.99-1.5-2.45v-5.2L8.75 9.65v7.89c-.01-1.06-.62-1.99-1.5-2.45V6.06c0-.98.7-1.81 1.67-1.97zm.25 1.48-9.5 1.59c-.24.04-.42.24-.42.49V8.1l10.5-1.75V4.48c0-.31-.28-.55-.58-.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M5.94 14.75c1.55 0 2.81 1.26 2.81 2.81 0 2.32-1.87 4.19-4.19 4.19-1.55 0-2.81-1.26-2.81-2.81 0-2.32 1.87-4.19 4.19-4.19m0 1.5c-1.49 0-2.69 1.2-2.69 2.69 0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31M17.94 12.75c1.55 0 2.81 1.26 2.81 2.81 0 2.32-1.87 4.19-4.19 4.19-1.55 0-2.81-1.26-2.81-2.81 0-2.32 1.87-4.19 4.19-4.19m0 1.5c-1.49 0-2.69 1.2-2.69 2.69 0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicRegularDuotone.displayName = 'MusicRegularDuotone';

// Triple export pattern
export { MusicRegularDuotone, MusicRegularDuotone as MusicRegularDuotoneIcon, MusicRegularDuotone as SiMusicRegularDuotone };
export default MusicRegularDuotone;
export type { MusicRegularDuotoneProps };
