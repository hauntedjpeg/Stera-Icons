import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniRegularProps = Omit<IconBaseProps, 'children'>;

const MartiniRegular = memo(
  forwardRef<SVGSVGElement, MartiniRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.5 3.25c.3 0 .58.18.7.46.1.28.04.6-.17.82l-8.28 8.28v6.44H16c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25v-6.44L2.97 4.53c-.21-.21-.28-.54-.16-.82.11-.28.39-.46.69-.46zM12 11.44l6.69-6.69H5.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniRegular.displayName = 'MartiniRegular';

// Triple export pattern
export { MartiniRegular, MartiniRegular as MartiniRegularIcon, MartiniRegular as SiMartiniRegular };
export default MartiniRegular;
export type { MartiniRegularProps };
