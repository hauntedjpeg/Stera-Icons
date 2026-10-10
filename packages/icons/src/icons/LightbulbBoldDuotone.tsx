import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbBoldDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c3.59 0 6.5 2.91 6.5 6.5 0 1.43-.46 2.75-1.24 3.82-.87 1.2-1.51 2.2-1.51 3.25v-.07c0-.55-.45-1-1-1h-.87c.3-1.33 1.12-2.47 1.76-3.36.54-.74.86-1.65.86-2.64C16.5 6.01 14.49 4 12 4S7.5 6.01 7.5 8.5c0 .99.32 1.9.86 2.64.64.89 1.46 2.03 1.76 3.36h-.87q-.42 0-.7.3-.3.28-.3.7v.07c0-1.05-.64-2.06-1.51-3.25-.78-1.07-1.24-2.4-1.24-3.82C5.5 4.91 8.41 2 12 2" opacity={.4} />
        <path fillRule="evenodd" d="M14.75 14.5c.55 0 1 .45 1 1V18c0 1.27-.8 2.36-1.92 2.8-.3.7-1 1.2-1.83 1.2-.82 0-1.53-.5-1.84-1.2-1.12-.44-1.91-1.53-1.91-2.8v-2.5q0-.42.3-.7.28-.3.7-.3zm-4.5 3.5c0 .55.45 1 1 1h1.5c.55 0 1-.45 1-1v-1.5h-3.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbBoldDuotone.displayName = 'LightbulbBoldDuotone';

// Triple export pattern
export { LightbulbBoldDuotone, LightbulbBoldDuotone as LightbulbBoldDuotoneIcon, LightbulbBoldDuotone as SiLightbulbBoldDuotone };
export default LightbulbBoldDuotone;
export type { LightbulbBoldDuotoneProps };
