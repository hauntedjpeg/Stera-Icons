import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanXFillProps = Omit<IconBaseProps, 'children'>;

const ScanXFill = memo(
  forwardRef<SVGSVGElement, ScanXFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.5c0 .97.78 1.75 1.75 1.75H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-1.8 0-3.25-1.46-3.25-3.25V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.5c0 1.8-1.46 3.25-3.25 3.25H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.97 0 1.75-.78 1.75-1.75V16c0-.41.34-.75.75-.75M8.12 8.12c.48-.5 1.28-.5 1.76 0L12 10.23l2.12-2.1c.48-.5 1.28-.5 1.76 0 .5.48.5 1.27 0 1.76L13.78 12l2.1 2.1c.5.5.5 1.29 0 1.78-.48.49-1.28.49-1.76 0L12 13.77l-2.12 2.11c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L10.23 12 8.12 9.88c-.5-.48-.5-1.28 0-1.76M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-.97 0-1.75.78-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-1.8 1.46-3.25 3.25-3.25zM18.5 2.25c1.8 0 3.25 1.46 3.25 3.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-.97-.78-1.75-1.75-1.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanXFill.displayName = 'ScanXFill';

// Triple export pattern
export { ScanXFill, ScanXFill as ScanXFillIcon, ScanXFill as SiScanXFill };
export default ScanXFill;
export type { ScanXFillProps };
