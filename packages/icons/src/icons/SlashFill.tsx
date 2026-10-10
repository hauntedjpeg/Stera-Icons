import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashFillProps = Omit<IconBaseProps, 'children'>;

const SlashFill = memo(
  forwardRef<SVGSVGElement, SlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.07 2.17c.46-.52 1.25-.56 1.76-.1.52.45.56 1.24.1 1.76l-16 18c-.45.52-1.24.56-1.76.1-.52-.45-.56-1.24-.1-1.76z" />
    </IconBase>
  ))
);

SlashFill.displayName = 'SlashFill';

// Triple export pattern
export { SlashFill, SlashFill as SlashFillIcon, SlashFill as SiSlashFill };
export default SlashFill;
export type { SlashFillProps };
