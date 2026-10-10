import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedRegularProps = Omit<IconBaseProps, 'children'>;

const SquareDashedRegular = memo(
  forwardRef<SVGSVGElement, SquareDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 16.56c.41 0 .75.34.75.75v.19c0 1.24 1 2.25 2.25 2.25h.19c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75-1.68-3.75-3.75v-.19c0-.41.34-.75.75-.75M13.75 19.75c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20.5 16.56c.41 0 .75.34.75.75v.19c0 2.07-1.68 3.75-3.75 3.75h-.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.19c1.24 0 2.25-1 2.25-2.25v-.19c0-.41.34-.75.75-.75M3.5 9.5c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.5c0-.41.34-.75.75-.75M20.5 9.5c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.5c0-.41.34-.75.75-.75M6.69 2.75c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-1.24 0-2.25 1-2.25 2.25v.19c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5c0-2.07 1.68-3.75 3.75-3.75zM17.5 2.75c2.07 0 3.75 1.68 3.75 3.75v.19c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5c0-1.24-1-2.25-2.25-2.25h-.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM13.75 2.75c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

SquareDashedRegular.displayName = 'SquareDashedRegular';

// Triple export pattern
export { SquareDashedRegular, SquareDashedRegular as SquareDashedRegularIcon, SquareDashedRegular as SiSquareDashedRegular };
export default SquareDashedRegular;
export type { SquareDashedRegularProps };
