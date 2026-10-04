import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleRegularProps = Omit<IconBaseProps, 'children'>;

const ScaleRegular = memo(
  forwardRef<SVGSVGElement, ScaleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c.41 0 .75.34.75.75v1.57q.45.07.87.22l3.47 1.26q.54.2 1.12.2H21a.75.75 0 0 1 0 1.5h-.91l2.61 6.87c.12.32.02.67-.25.87A5.8 5.8 0 0 1 19 16.75c-1.2 0-2.35-.45-3.45-1.26a.75.75 0 0 1-.25-.87l2.62-6.88q-.69-.04-1.34-.28L13.11 6.2l-.36-.1v14.15H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V6.1l-.36.1-3.47 1.26q-.65.24-1.34.28l2.62 6.88c.12.32.02.67-.25.87A5.8 5.8 0 0 1 5 16.75c-1.2 0-2.35-.45-3.45-1.26a.75.75 0 0 1-.25-.87L3.9 7.75H3a.75.75 0 0 1 0-1.5h2.8q.56 0 1.1-.2l3.48-1.26q.42-.15.87-.22V3c0-.41.34-.75.75-.75M2.91 14.6q1.1.66 2.09.65 1 .01 2.09-.65L5 9.1zm14 0q1.1.66 2.09.65 1 .01 2.09-.65L19 9.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScaleRegular.displayName = 'ScaleRegular';

// Triple export pattern (lucide-react style)
export { ScaleRegular, ScaleRegular as ScaleRegularIcon, ScaleRegular as SiScaleRegular };
export default ScaleRegular;
export type { ScaleRegularProps };
