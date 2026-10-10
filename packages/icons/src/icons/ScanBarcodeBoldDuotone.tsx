import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBarcodeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanBarcodeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 14c.55 0 1 .45 1 1v1.75c0 .97.78 1.75 1.75 1.75H7.5c.55 0 1 .45 1 1s-.45 1-1 1H5.75C3.68 20.5 2 18.82 2 16.75V15c0-.55.45-1 1-1M21 14c.55 0 1 .45 1 1v1.75c0 2.07-1.68 3.75-3.75 3.75H16.5c-.55 0-1-.45-1-1s.45-1 1-1h1.75c.97 0 1.75-.78 1.75-1.75V15c0-.55.45-1 1-1M7.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1H5.75C4.78 5.5 4 6.28 4 7.25V9c0 .55-.45 1-1 1s-1-.45-1-1V7.25C2 5.18 3.68 3.5 5.75 3.5zM18.25 3.5C20.32 3.5 22 5.18 22 7.25V9c0 .55-.45 1-1 1s-1-.45-1-1V7.25c0-.97-.78-1.75-1.75-1.75H16.5c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M7 7.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1s-1-.45-1-1v-7c0-.55.45-1 1-1M10.33 7.5c.56 0 1 .45 1 1v7c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-7c0-.55.45-1 1-1M13.67 7.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-7c0-.55.44-1 1-1M17 7.5c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1s-1-.45-1-1v-7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ScanBarcodeBoldDuotone.displayName = 'ScanBarcodeBoldDuotone';

// Triple export pattern
export { ScanBarcodeBoldDuotone, ScanBarcodeBoldDuotone as ScanBarcodeBoldDuotoneIcon, ScanBarcodeBoldDuotone as SiScanBarcodeBoldDuotone };
export default ScanBarcodeBoldDuotone;
export type { ScanBarcodeBoldDuotoneProps };
