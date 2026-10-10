import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairFillProps = Omit<IconBaseProps, 'children'>;

const CrosshairFill = memo(
  forwardRef<SVGSVGElement, CrosshairFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 22c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3.06q.42.06.87.06t.88-.06zm-1.76-9.12v6.06c-3.16-.4-5.67-2.9-6.06-6.07zm7.82 0c-.4 3.16-2.9 5.67-6.07 6.06v-6.07zM22 11.12c.48 0 .88.4.88.88s-.4.88-.88.88h-3.06q.06-.44.06-.88 0-.45-.06-.87zm-16.94 0Q5 11.57 5 12q0 .45.06.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zm7.82-6.06c3.16.4 5.67 2.9 6.06 6.07h-6.07zm-1.76 6.07H5.07c.4-3.17 2.9-5.68 6.07-6.07zm.88-10c.48 0 .88.39.88.87v3.06Q12.44 5 12 5q-.45 0-.87.06V2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

CrosshairFill.displayName = 'CrosshairFill';

// Triple export pattern
export { CrosshairFill, CrosshairFill as CrosshairFillIcon, CrosshairFill as SiCrosshairFill };
export default CrosshairFill;
export type { CrosshairFillProps };
