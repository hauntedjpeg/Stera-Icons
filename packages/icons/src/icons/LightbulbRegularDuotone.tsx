import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbRegularDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.37-.44 2.64-1.2 3.67-.85 1.19-1.55 2.25-1.55 3.4v-.07c0-.41-.34-.75-.75-.75h-.67c.26-1.35 1.08-2.52 1.76-3.46.57-.78.91-1.75.91-2.79 0-2.62-2.13-4.75-4.75-4.75S7.25 5.88 7.25 8.5c0 1.04.34 2 .9 2.79.69.94 1.51 2.1 1.77 3.46h-.67q-.31 0-.53.22-.21.22-.22.53v.07c0-1.15-.7-2.21-1.56-3.4-.75-1.03-1.19-2.3-1.19-3.67 0-3.45 2.8-6.25 6.25-6.25" opacity={.4} />
        <path fillRule="evenodd" d="M14.75 14.75c.41 0 .75.34.75.75V18c0 1.2-.78 2.23-1.86 2.6-.24.67-.88 1.15-1.64 1.15s-1.4-.48-1.64-1.15C9.28 20.23 8.5 19.2 8.5 18v-2.5q0-.31.22-.53.22-.21.53-.22zM10 18c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25v-1.75h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbRegularDuotone.displayName = 'LightbulbRegularDuotone';

// Triple export pattern
export { LightbulbRegularDuotone, LightbulbRegularDuotone as LightbulbRegularDuotoneIcon, LightbulbRegularDuotone as SiLightbulbRegularDuotone };
export default LightbulbRegularDuotone;
export type { LightbulbRegularDuotoneProps };
