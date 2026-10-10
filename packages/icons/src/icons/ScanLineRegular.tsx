import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineRegularProps = Omit<IconBaseProps, 'children'>;

const ScanLineRegular = memo(
  forwardRef<SVGSVGElement, ScanLineRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 14.75c.41 0 .75.34.75.75V17c0 2.07-1.68 3.75-3.75 3.75H7c-2.07 0-3.75-1.68-3.75-3.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75V17c0 1.24 1 2.25 2.25 2.25h10c1.24 0 2.25-1 2.25-2.25v-1.5c0-.41.34-.75.75-.75M21.5 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM17 3.25c2.07 0 3.75 1.68 3.75 3.75v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-1.24-1-2.25-2.25-2.25H7c-1.24 0-2.25 1-2.25 2.25v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-2.07 1.68-3.75 3.75-3.75z" />
    </IconBase>
  ))
);

ScanLineRegular.displayName = 'ScanLineRegular';

// Triple export pattern
export { ScanLineRegular, ScanLineRegular as ScanLineRegularIcon, ScanLineRegular as SiScanLineRegular };
export default ScanLineRegular;
export type { ScanLineRegularProps };
