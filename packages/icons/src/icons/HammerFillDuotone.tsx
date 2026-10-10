import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HammerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HammerFillDuotone = memo(
  forwardRef<SVGSVGElement, HammerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.13 9c0 .48.39.87.87.88h.84l-.36 8.66c-.04.86.65 1.59 1.52 1.59s1.56-.73 1.52-1.6l-.36-8.66h1.34q.21 0 .4-.1l.37 8.7c.08 1.86-1.4 3.4-3.27 3.4-1.86 0-3.35-1.54-3.27-3.4z" opacity={.4} />
        <path d="M14.5 2.13q.36 0 .62.25l1.05 1.05 1.44-.71q.18-.1.39-.1h2c.48 0 .87.4.87.88v5c0 .48-.39.88-.87.88h-2q-.2 0-.4-.1l-1.43-.72-1.05 1.06q-.27.25-.62.26H10c-.48 0-.88-.4-.88-.88q.02-.25-.28-.48-.37-.27-1.13-.33c-1.01-.05-2.23.35-3.03 1.36-.25.31-.68.41-1.05.24s-.57-.57-.49-.96c1.07-5.36 4.4-6.7 5.86-6.7z" />
    </IconBase>
  ))
);

HammerFillDuotone.displayName = 'HammerFillDuotone';

// Triple export pattern
export { HammerFillDuotone, HammerFillDuotone as HammerFillDuotoneIcon, HammerFillDuotone as SiHammerFillDuotone };
export default HammerFillDuotone;
export type { HammerFillDuotoneProps };
