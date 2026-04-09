import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HammerFillProps = Omit<IconBaseProps, 'children'>;

const HammerFill = memo(
  forwardRef<SVGSVGElement, HammerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hammer-fill" {...props}>
      <path fillRule="evenodd" d="M14.5 2.13q.36 0 .62.25l1.05 1.05 1.44-.71q.18-.1.39-.1h2c.48 0 .87.4.87.88v5c0 .48-.39.88-.87.88h-2a1 1 0 0 1-.4-.1l-1.43-.72-1.05 1.06-.21.15.36 8.7a3.27 3.27 0 1 1-6.54 0L9.13 9q.02-.26-.3-.48-.36-.27-1.12-.33a3.7 3.7 0 0 0-3.03 1.36.88.88 0 0 1-1.54-.72c1.07-5.36 4.4-6.7 5.86-6.7zm-4.02 16.4a1.52 1.52 0 1 0 3.04 0l-.36-8.66h-2.32z" clipRule="evenodd" />
    </IconBase>
  ))
);

HammerFill.displayName = 'HammerFill';

// Triple export pattern (lucide-react style)
export { HammerFill, HammerFill as HammerFillIcon, HammerFill as SiHammerFill };
export default HammerFill;
export type { HammerFillProps };
