import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniRegularProps = Omit<IconBaseProps, 'children'>;

const MartiniRegular = memo(
  forwardRef<SVGSVGElement, MartiniRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.5 3.25a.75.75 0 0 1 .53 1.28l-8.28 8.28v6.44H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-6.44L2.97 4.53a.75.75 0 0 1 .53-1.28zM12 11.44l6.69-6.69H5.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniRegular.displayName = 'MartiniRegular';

// Triple export pattern (lucide-react style)
export { MartiniRegular, MartiniRegular as MartiniRegularIcon, MartiniRegular as SiMartiniRegular };
export default MartiniRegular;
export type { MartiniRegularProps };
