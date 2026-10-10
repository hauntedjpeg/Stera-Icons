import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingBoldProps = Omit<IconBaseProps, 'children'>;

const SeedlingBold = memo(
  forwardRef<SVGSVGElement, SeedlingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.99 4.02c0 2.55-.33 4.41-.9 5.87-.58 1.48-1.38 2.47-2.23 3.32-1.63 1.63-4.12 1.9-6.03.8-.54 1-.83 2.14-.83 3.3V21c0 .55-.45 1-1 1h-.1l-.2-.04c-.4-.13-.7-.51-.7-.96v-1.34c0-.8-.32-1.56-.88-2.12l-1.85-1.85c-1.53.9-3.54.7-4.86-.62C2.01 13.66 1 11.01 1 8V7h1c3.01 0 5.66 1 7.07 2.41 1.32 1.32 1.53 3.33.62 4.87l1.45 1.45q.3-1.66 1.17-3.09c-1.45-1.95-1.3-4.73.48-6.5.85-.85 1.84-1.65 3.32-2.23 1.46-.57 3.32-.9 5.88-.9h1zM3.05 9.05c.2 2.14.97 3.8 1.78 4.6.52.53 1.26.7 1.93.52l-.97-.96c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l.96.97c.18-.67.01-1.4-.51-1.93-.8-.8-2.47-1.58-4.61-1.78m17.91-4.01c-1.84.07-3.14.35-4.12.74-1.14.44-1.92 1.05-2.63 1.77-.93.92-1.12 2.3-.59 3.41L15.3 9.3c.4-.39 1.03-.39 1.42 0 .39.4.39 1.03 0 1.42l-1.67 1.67c1.11.53 2.49.34 3.4-.59.73-.71 1.34-1.49 1.79-2.63.38-.98.66-2.28.73-4.12" clipRule="evenodd" />
    </IconBase>
  ))
);

SeedlingBold.displayName = 'SeedlingBold';

// Triple export pattern
export { SeedlingBold, SeedlingBold as SeedlingBoldIcon, SeedlingBold as SiSeedlingBold };
export default SeedlingBold;
export type { SeedlingBoldProps };
