import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrosshairRegularDuotone = memo(
  forwardRef<SVGSVGElement, CrosshairRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.8 12.75c.34 2.85 2.6 5.11 5.45 5.45v1.51c-3.68-.35-6.6-3.28-6.96-6.96zM19.71 12.75c-.35 3.68-3.28 6.6-6.96 6.96v-1.5c2.85-.35 5.11-2.6 5.45-5.46zM12.75 4.29c3.68.35 6.6 3.28 6.96 6.96h-1.5c-.35-2.85-2.6-5.11-5.46-5.45zM11.25 5.8c-2.85.34-5.11 2.6-5.45 5.45H4.29c.35-3.68 3.28-6.61 6.96-6.96z" opacity={0.4} />
        <path d="M12 1.25c.41 0 .75.34.75.75v9.25H22c.41 0 .75.34.75.75s-.34.75-.75.75h-9.25V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.25V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CrosshairRegularDuotone.displayName = 'CrosshairRegularDuotone';

// Triple export pattern
export { CrosshairRegularDuotone, CrosshairRegularDuotone as CrosshairRegularDuotoneIcon, CrosshairRegularDuotone as SiCrosshairRegularDuotone };
export default CrosshairRegularDuotone;
export type { CrosshairRegularDuotoneProps };
