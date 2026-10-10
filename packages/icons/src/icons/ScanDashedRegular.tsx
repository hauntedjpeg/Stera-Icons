import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedRegularProps = Omit<IconBaseProps, 'children'>;

const ScanDashedRegular = memo(
  forwardRef<SVGSVGElement, ScanDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 14.75c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2c-1.8 0-3.25-1.46-3.25-3.25v-2c0-.41.34-.75.75-.75M20 14.75c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M21.5 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM8.5 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-2c-.97 0-1.75.78-1.75 1.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-1.8 1.46-3.25 3.25-3.25zM17.5 3.25c1.8 0 3.25 1.46 3.25 3.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.97-.78-1.75-1.75-1.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanDashedRegular.displayName = 'ScanDashedRegular';

// Triple export pattern
export { ScanDashedRegular, ScanDashedRegular as ScanDashedRegularIcon, ScanDashedRegular as SiScanDashedRegular };
export default ScanDashedRegular;
export type { ScanDashedRegularProps };
