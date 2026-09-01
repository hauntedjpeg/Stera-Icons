import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDotRegular = memo(
  forwardRef<SVGSVGElement, CircleDotRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 9.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDotRegular.displayName = 'CircleDotRegular';

// Triple export pattern (lucide-react style)
export { CircleDotRegular, CircleDotRegular as CircleDotRegularIcon, CircleDotRegular as SiCircleDotRegular };
export default CircleDotRegular;
export type { CircleDotRegularProps };
