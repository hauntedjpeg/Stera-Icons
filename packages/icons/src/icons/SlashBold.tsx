import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashBoldProps = Omit<IconBaseProps, 'children'>;

const SlashBold = memo(
  forwardRef<SVGSVGElement, SlashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.25 2.34c.37-.42 1-.45 1.42-.09.4.37.44 1 .08 1.41l-16 18c-.37.42-1 .45-1.41.09-.42-.37-.45-1-.09-1.41z" />
    </IconBase>
  ))
);

SlashBold.displayName = 'SlashBold';

// Triple export pattern
export { SlashBold, SlashBold as SlashBoldIcon, SlashBold as SiSlashBold };
export default SlashBold;
export type { SlashBoldProps };
