import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanXRegularProps = Omit<IconBaseProps, 'children'>;

const ScanXRegular = memo(
  forwardRef<SVGSVGElement, ScanXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.5c0 .97.78 1.75 1.75 1.75H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-1.8 0-3.25-1.46-3.25-3.25V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.5c0 1.8-1.46 3.25-3.25 3.25H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.97 0 1.75-.78 1.75-1.75V16c0-.41.34-.75.75-.75M8.47 8.47c.3-.3.77-.3 1.06 0L12 10.94l2.47-2.46c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06L13.06 12l2.47 2.46c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 13.06l-2.47 2.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 12 8.47 9.53c-.3-.3-.3-.77 0-1.06M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-.97 0-1.75.78-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-1.8 1.46-3.25 3.25-3.25zM18.5 2.25c1.8 0 3.25 1.46 3.25 3.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-.97-.78-1.75-1.75-1.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanXRegular.displayName = 'ScanXRegular';

// Triple export pattern
export { ScanXRegular, ScanXRegular as ScanXRegularIcon, ScanXRegular as SiScanXRegular };
export default ScanXRegular;
export type { ScanXRegularProps };
