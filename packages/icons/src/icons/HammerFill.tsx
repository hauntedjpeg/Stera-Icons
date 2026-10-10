import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HammerFillProps = Omit<IconBaseProps, 'children'>;

const HammerFill = memo(
  forwardRef<SVGSVGElement, HammerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.5 2.13q.36 0 .62.25l1.05 1.05 1.44-.71q.18-.1.39-.1h2c.48 0 .87.4.87.88v5c0 .48-.39.88-.87.88h-2q-.2 0-.4-.1l-1.43-.72-1.05 1.06q-.1.09-.21.15l.36 8.7c.08 1.86-1.4 3.4-3.27 3.4-1.86 0-3.35-1.54-3.27-3.4L9.13 9q.02-.26-.3-.48-.36-.27-1.12-.33c-1.01-.05-2.23.35-3.03 1.36-.25.31-.68.41-1.05.24s-.57-.57-.49-.96c1.07-5.36 4.4-6.7 5.86-6.7zm-4.02 16.4c-.04.87.65 1.6 1.52 1.6s1.56-.73 1.52-1.6l-.36-8.66h-2.32z" clipRule="evenodd" />
    </IconBase>
  ))
);

HammerFill.displayName = 'HammerFill';

// Triple export pattern
export { HammerFill, HammerFill as HammerFillIcon, HammerFill as SiHammerFill };
export default HammerFill;
export type { HammerFillProps };
