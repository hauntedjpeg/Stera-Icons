import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBarcodeRegularProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeRegular = memo(
  forwardRef<SVGSVGElement, ScanBarcodeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 14.25c.41 0 .75.34.75.75v1.75c0 1.1.9 2 2 2H7.5c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V15c0-.41.34-.75.75-.75M21 14.25c.41 0 .75.34.75.75v1.75c0 1.93-1.57 3.5-3.5 3.5H16.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75c1.1 0 2-.9 2-2V15c0-.41.34-.75.75-.75M7 7.75c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75M10.33 7.75c.42 0 .75.34.75.75v7c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75M13.67 7.75c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75v-7c0-.41.33-.75.75-.75M17 7.75c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75M7.5 3.75c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25c0-1.93 1.57-3.5 3.5-3.5zM18.25 3.75c1.93 0 3.5 1.57 3.5 3.5V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25c0-1.1-.9-2-2-2H16.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanBarcodeRegular.displayName = 'ScanBarcodeRegular';

// Triple export pattern
export { ScanBarcodeRegular, ScanBarcodeRegular as ScanBarcodeRegularIcon, ScanBarcodeRegular as SiScanBarcodeRegular };
export default ScanBarcodeRegular;
export type { ScanBarcodeRegularProps };
