import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbFillProps = Omit<IconBaseProps, 'children'>;

const LightbulbFill = memo(
  forwardRef<SVGSVGElement, LightbulbFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 18c0 1.2-.78 2.23-1.86 2.6-.24.67-.88 1.15-1.64 1.15s-1.4-.48-1.64-1.15C9.28 20.23 8.5 19.2 8.5 18v-1.62h7zM12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.37-.44 2.64-1.2 3.67-.61.86-1.15 1.65-1.4 2.46h-7.3c-.25-.81-.79-1.6-1.4-2.46-.76-1.03-1.2-2.3-1.2-3.67 0-3.45 2.8-6.25 6.25-6.25" />
    </IconBase>
  ))
);

LightbulbFill.displayName = 'LightbulbFill';

// Triple export pattern
export { LightbulbFill, LightbulbFill as LightbulbFillIcon, LightbulbFill as SiLightbulbFill };
export default LightbulbFill;
export type { LightbulbFillProps };
