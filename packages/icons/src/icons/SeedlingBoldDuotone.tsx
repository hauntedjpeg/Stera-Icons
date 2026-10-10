import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SeedlingBoldDuotone = memo(
  forwardRef<SVGSVGElement, SeedlingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 7c3.01 0 5.66 1 7.07 2.41 1.32 1.32 1.53 3.33.62 4.87l-1.52-1.52c.18-.67.01-1.4-.51-1.93-.8-.8-2.47-1.58-4.61-1.78.2 2.14.97 3.8 1.78 4.6.52.53 1.26.7 1.93.52l1.52 1.52c-1.54.9-3.55.7-4.87-.62C2.01 13.66 1 11.01 1 8V7zM22.99 4.02c0 2.55-.33 4.41-.9 5.87-.58 1.48-1.38 2.47-2.23 3.32-1.63 1.63-4.12 1.9-6.03.8q.48-.9 1.2-1.63c1.12.53 2.5.34 3.42-.59.72-.71 1.33-1.49 1.78-2.63.38-.98.66-2.28.73-4.12-1.84.07-3.14.35-4.12.74-1.14.44-1.92 1.05-2.63 1.77-.93.92-1.12 2.3-.59 3.41q-.75.77-1.31 1.68c-1.45-1.95-1.3-4.73.48-6.5.85-.85 1.84-1.65 3.32-2.23 1.46-.57 3.32-.9 5.88-.9h1z" opacity={0.4} />
        <path d="M15.3 9.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-1.65 1.66c-1.31 1.32-2.05 3.1-2.05 4.95V21q-.01.36-.23.64-.06.08-.13.13-.28.22-.64.23-.37-.01-.64-.23l-.13-.13Q11 21.37 11 21v-1.34c0-.8-.32-1.56-.88-2.12L5.8 13.2c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l3.93 3.94c.32-1.8 1.19-3.47 2.5-4.78z" />
    </IconBase>
  ))
);

SeedlingBoldDuotone.displayName = 'SeedlingBoldDuotone';

// Triple export pattern
export { SeedlingBoldDuotone, SeedlingBoldDuotone as SeedlingBoldDuotoneIcon, SeedlingBoldDuotone as SiSeedlingBoldDuotone };
export default SeedlingBoldDuotone;
export type { SeedlingBoldDuotoneProps };
