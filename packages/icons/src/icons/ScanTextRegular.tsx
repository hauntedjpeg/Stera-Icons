import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanTextRegularProps = Omit<IconBaseProps, 'children'>;

const ScanTextRegular = memo(
  forwardRef<SVGSVGElement, ScanTextRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.8 0-3.25-1.46-3.25-3.25v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M12.5 13.25c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM16 9.25c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM8 2.75c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.97 0-1.75.78-1.75 1.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.97-.78-1.75-1.75-1.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanTextRegular.displayName = 'ScanTextRegular';

// Triple export pattern
export { ScanTextRegular, ScanTextRegular as ScanTextRegularIcon, ScanTextRegular as SiScanTextRegular };
export default ScanTextRegular;
export type { ScanTextRegularProps };
