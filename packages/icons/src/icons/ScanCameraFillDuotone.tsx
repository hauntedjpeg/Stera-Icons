import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCameraFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCameraFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-camera-fill-duotone" {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v1.75c0 1.04.83 1.88 1.87 1.88H8a.88.88 0 0 1 0 1.75H6.25c-2 0-3.62-1.63-3.62-3.63V16c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v1.75c0 2-1.63 3.63-3.63 3.63H16a.88.88 0 0 1 0-1.75h1.75c1.04 0 1.88-.84 1.88-1.88V16c0-.48.39-.87.87-.87M8 2.63a.87.87 0 1 1 0 1.75H6.25c-1.04 0-1.87.83-1.87 1.87V8a.87.87 0 1 1-1.75 0V6.25c0-2 1.62-3.62 3.62-3.62zM17.75 2.63c2 0 3.63 1.62 3.63 3.62V8a.88.88 0 0 1-1.75 0V6.25c0-1.04-.84-1.87-1.88-1.87H16a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.7 6.75q.47-.02.83.07.3.1.55.3c.2.17.34.4.51.66l.18.27.11.17q.15.19.4.21h.2q.46-.01.76.04c.88.17 1.57.88 1.73 1.77q.04.28.03.77v2.54q0 .69-.02 1.15t-.21.85q-.31.63-.94.96-.39.2-.84.22t-1.13.02H9.14q-.67 0-1.13-.02t-.84-.22q-.61-.33-.94-.96a2 2 0 0 1-.2-.85q-.04-.45-.03-1.15v-2.54q0-.49.03-.77c.16-.9.85-1.6 1.73-1.77q.29-.04.77-.03h.2a.6.6 0 0 0 .39-.22l.11-.17.18-.27q.23-.41.5-.66.26-.2.56-.3.36-.09.82-.07zm-.7 3.63a1.83 1.83 0 1 0 0 3.66 1.83 1.83 0 0 0 0-3.66" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCameraFillDuotone.displayName = 'ScanCameraFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanCameraFillDuotone, ScanCameraFillDuotone as ScanCameraFillDuotoneIcon, ScanCameraFillDuotone as SiScanCameraFillDuotone };
export default ScanCameraFillDuotone;
export type { ScanCameraFillDuotoneProps };
