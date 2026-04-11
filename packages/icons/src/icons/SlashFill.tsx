import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashFillProps = Omit<IconBaseProps, 'children'>;

const SlashFill = memo(
  forwardRef<SVGSVGElement, SlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.07 2.17a1.25 1.25 0 1 1 1.86 1.66l-16 18a1.25 1.25 0 0 1-1.86-1.66z" />
    </IconBase>
  ))
);

SlashFill.displayName = 'SlashFill';

// Triple export pattern (lucide-react style)
export { SlashFill, SlashFill as SlashFillIcon, SlashFill as SiSlashFill };
export default SlashFill;
export type { SlashFillProps };
