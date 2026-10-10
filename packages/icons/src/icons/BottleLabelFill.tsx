import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleLabelFillProps = Omit<IconBaseProps, 'children'>;

const BottleLabelFill = memo(
  forwardRef<SVGSVGElement, BottleLabelFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.13 19.75c0 1.17-.96 2.13-2.13 2.13h-4c-1.17 0-2.12-.96-2.12-2.13v-1.87h8.25zM16.13 16.13H7.88v-2.25h8.25zM13.75 2.13c.48 0 .88.39.88.87s-.4.88-.88.88h-.05l.02.18.35 3.76q.03.34.24.6l1.19 1.49c.4.5.62 1.14.63 1.8v.41H7.88v-.42c0-.65.22-1.28.62-1.8l1.2-1.48q.2-.26.23-.6l.35-3.76.02-.18h-.05c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

BottleLabelFill.displayName = 'BottleLabelFill';

// Triple export pattern
export { BottleLabelFill, BottleLabelFill as BottleLabelFillIcon, BottleLabelFill as SiBottleLabelFill };
export default BottleLabelFill;
export type { BottleLabelFillProps };
