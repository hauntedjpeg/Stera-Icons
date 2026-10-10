import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairRegularProps = Omit<IconBaseProps, 'children'>;

const CrosshairRegular = memo(
  forwardRef<SVGSVGElement, CrosshairRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2.29c3.68.35 6.6 3.28 6.96 6.96H22c.41 0 .75.34.75.75s-.34.75-.75.75h-2.29c-.35 3.68-3.28 6.6-6.96 6.96V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.29c-3.68-.35-6.6-3.28-6.96-6.96H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.29c.35-3.68 3.28-6.61 6.96-6.96V2c0-.41.34-.75.75-.75m-6.2 11.5c.34 2.85 2.6 5.11 5.45 5.45v-5.45zm6.95 0v5.45c2.85-.34 5.11-2.6 5.45-5.45zm0-1.5h5.45c-.34-2.85-2.6-5.11-5.45-5.45zm-1.5-5.45c-2.85.34-5.11 2.6-5.45 5.45h5.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

CrosshairRegular.displayName = 'CrosshairRegular';

// Triple export pattern
export { CrosshairRegular, CrosshairRegular as CrosshairRegularIcon, CrosshairRegular as SiCrosshairRegular };
export default CrosshairRegular;
export type { CrosshairRegularProps };
