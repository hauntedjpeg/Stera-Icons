import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipBackFillProps = Omit<IconBaseProps, 'children'>;

const SkipBackFill = memo(
  forwardRef<SVGSVGElement, SkipBackFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.61 4c.55.03 1.05.3 1.39.74.25.33.32.73.35 1.04q.03.5.02 1.2v10.03q0 .71-.02 1.2c-.03.32-.1.72-.35 1.05-.34.44-.84.71-1.39.74-.42.03-.78-.13-1.06-.29q-.44-.24-1.02-.64L9.5 14.39q-.62-.4-1.02-.71c-.27-.22-.54-.49-.7-.87-.22-.52-.22-1.1 0-1.62.16-.38.43-.65.7-.87q.4-.31 1.02-.71l7.02-4.68q.59-.4 1.02-.64c.24-.14.55-.28.9-.3zM4.5 4.13c.48 0 .88.39.88.87v14c0 .48-.4.88-.88.88s-.87-.4-.87-.88V5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SkipBackFill.displayName = 'SkipBackFill';

// Triple export pattern
export { SkipBackFill, SkipBackFill as SkipBackFillIcon, SkipBackFill as SiSkipBackFill };
export default SkipBackFill;
export type { SkipBackFillProps };
