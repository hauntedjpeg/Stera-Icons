import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanPlusRegularProps = Omit<IconBaseProps, 'children'>;

const ScanPlusRegular = memo(
  forwardRef<SVGSVGElement, ScanPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.8 0-3.25-1.46-3.25-3.25v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M12 7.25c.41 0 .75.34.75.75v3.25H16c.42 0 .75.33.75.75 0 .4-.33.75-.75.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.4 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75M8 2.75c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.97 0-1.75.78-1.75 1.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.97-.78-1.75-1.75-1.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanPlusRegular.displayName = 'ScanPlusRegular';

// Triple export pattern
export { ScanPlusRegular, ScanPlusRegular as ScanPlusRegularIcon, ScanPlusRegular as SiScanPlusRegular };
export default ScanPlusRegular;
export type { ScanPlusRegularProps };
