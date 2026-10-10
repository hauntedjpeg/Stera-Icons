import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForkKnifeRegularProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeRegular = memo(
  forwardRef<SVGSVGElement, ForkKnifeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10 2.25c.41 0 .75.34.75.75v6.09l-.01.05-.01.02q0 .06-.04.12v.01l-1.18 2.75q-.26.61-.26 1.28v6.18c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25v-6.18q0-.66-.26-1.28L3.3 9.3v-.02l-.04-.12v-.02l-.01-.05v-.04l-.01-.02V3c0-.41.34-.75.75-.75s.75.34.75.75v5.25h1.5V3.5c0-.41.34-.75.75-.75s.75.34.75.75v4.75h1.5V3c0-.41.34-.75.75-.75m-4.13 9.2q.38.9.38 1.87v6.18c0 .41.34.75.75.75s.75-.34.75-.75v-6.18q0-.97.38-1.87l.73-1.7H5.14zM19.83 2.27c.22-.05.46 0 .64.14q.27.23.28.59v16.5c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25v-3.75H14c-.41 0-.75-.34-.75-.75 0-4.3.35-7.2 1.38-9.17 1.08-2.06 2.82-3 5.2-3.56M17.75 19.5c0 .41.34.75.75.75s.75-.34.75-.75v-3.75h-1.5zm1.5-15.52c-1.6.5-2.62 1.25-3.29 2.54-.8 1.52-1.17 3.88-1.2 7.73h4.49z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForkKnifeRegular.displayName = 'ForkKnifeRegular';

// Triple export pattern
export { ForkKnifeRegular, ForkKnifeRegular as ForkKnifeRegularIcon, ForkKnifeRegular as SiForkKnifeRegular };
export default ForkKnifeRegular;
export type { ForkKnifeRegularProps };
