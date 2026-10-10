import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbBoldProps = Omit<IconBaseProps, 'children'>;

const LightbulbBold = memo(
  forwardRef<SVGSVGElement, LightbulbBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c3.59 0 6.5 2.91 6.5 6.5 0 1.43-.46 2.75-1.24 3.82-.87 1.2-1.51 2.2-1.51 3.25V18c0 1.27-.8 2.36-1.92 2.8-.3.7-1 1.2-1.83 1.2-.82 0-1.53-.5-1.84-1.2-1.12-.44-1.91-1.53-1.91-2.8v-2.43c0-1.05-.64-2.06-1.51-3.25-.78-1.07-1.24-2.4-1.24-3.82C5.5 4.91 8.41 2 12 2m-1.75 16c0 .55.45 1 1 1h1.5c.55 0 1-.45 1-1v-1.5h-3.5zM12 4C9.51 4 7.5 6.01 7.5 8.5c0 .99.32 1.9.86 2.64.64.89 1.46 2.03 1.76 3.36h3.76c.3-1.33 1.12-2.47 1.76-3.36.54-.74.86-1.65.86-2.64C16.5 6.01 14.49 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbBold.displayName = 'LightbulbBold';

// Triple export pattern
export { LightbulbBold, LightbulbBold as LightbulbBoldIcon, LightbulbBold as SiLightbulbBold };
export default LightbulbBold;
export type { LightbulbBoldProps };
