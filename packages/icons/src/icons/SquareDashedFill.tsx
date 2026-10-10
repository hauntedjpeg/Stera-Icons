import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedFillProps = Omit<IconBaseProps, 'children'>;

const SquareDashedFill = memo(
  forwardRef<SVGSVGElement, SquareDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 16.44c.48 0 .88.39.88.87v.19c0 1.17.95 2.13 2.12 2.13h.19c.48 0 .87.39.87.87s-.39.88-.87.88H6.5c-2.14 0-3.87-1.74-3.87-3.88v-.19c0-.48.39-.87.87-.87M13.75 19.63c.48 0 .88.39.88.87s-.4.88-.88.88h-3.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM20.5 16.44c.48 0 .88.39.88.87v.19c0 2.14-1.74 3.88-3.88 3.88h-.19c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.19c1.17 0 2.13-.96 2.13-2.13v-.19c0-.48.39-.87.87-.87M15.67 6.5c1 0 1.83.82 1.83 1.83v7.34c0 1-.82 1.83-1.83 1.83H8.33c-1 0-1.83-.82-1.83-1.83V8.33c0-1 .82-1.83 1.83-1.83zM3.5 9.38c.48 0 .88.39.88.87v3.5c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3.5c0-.48.39-.87.87-.87M20.5 9.38c.48 0 .88.39.88.87v3.5c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3.5c0-.48.39-.87.87-.87M6.69 2.63c.48 0 .87.39.87.87s-.39.88-.87.88H6.5c-1.17 0-2.12.95-2.12 2.12v.19c0 .48-.4.87-.88.87s-.87-.39-.87-.87V6.5c0-2.14 1.73-3.87 3.87-3.87zM17.5 2.63c2.14 0 3.88 1.73 3.88 3.87v.19c0 .48-.4.87-.88.87s-.87-.39-.87-.87V6.5c0-1.17-.96-2.12-2.13-2.12h-.19c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM13.75 2.63c.48 0 .88.39.88.87s-.4.88-.88.88h-3.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

SquareDashedFill.displayName = 'SquareDashedFill';

// Triple export pattern
export { SquareDashedFill, SquareDashedFill as SquareDashedFillIcon, SquareDashedFill as SiSquareDashedFill };
export default SquareDashedFill;
export type { SquareDashedFillProps };
