import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.8 0-3.25-1.46-3.25-3.25v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M8 2.75c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.97 0-1.75.78-1.75 1.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.97-.78-1.75-1.75-1.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.04 6.5c2.5 0 4.54 2.03 4.54 4.54 0 .9-.26 1.72-.7 2.42l2.08 2.08c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-2.08-2.08c-.7.44-1.53.7-2.42.7-2.5 0-4.54-2.03-4.54-4.54 0-2.5 2.03-4.54 4.54-4.54m0 1.5C9.36 8 8 9.36 8 11.04s1.36 3.04 3.04 3.04 3.04-1.36 3.04-3.04S12.72 8 11.04 8" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchRegularDuotone.displayName = 'ScanSearchRegularDuotone';

// Triple export pattern
export { ScanSearchRegularDuotone, ScanSearchRegularDuotone as ScanSearchRegularDuotoneIcon, ScanSearchRegularDuotone as SiScanSearchRegularDuotone };
export default ScanSearchRegularDuotone;
export type { ScanSearchRegularDuotoneProps };
