import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraFillProps = Omit<IconBaseProps, 'children'>;

const ScanCameraFill = memo(
  forwardRef<SVGSVGElement, ScanCameraFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v1.75c0 1.04.83 1.88 1.87 1.88H8c.48 0 .88.39.88.87s-.4.88-.88.88H6.25c-2 0-3.62-1.63-3.62-3.63V16c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v1.75c0 2-1.63 3.63-3.63 3.63H16c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h1.75c1.04 0 1.88-.84 1.88-1.88V16c0-.48.39-.87.87-.87" />
        <path fillRule="evenodd" d="M12.7 6.75q.47-.02.83.07.3.1.55.3c.2.17.34.4.51.66l.18.27.11.17q.15.19.4.21h.2q.46-.01.76.04c.88.17 1.57.88 1.73 1.77q.04.28.03.77v2.54q0 .69-.02 1.15t-.21.85q-.31.63-.94.96-.39.19-.84.22t-1.13.02H9.14q-.67 0-1.13-.02-.45-.04-.84-.22-.61-.33-.94-.96-.18-.39-.2-.85-.04-.46-.03-1.15v-2.54q0-.49.03-.77c.16-.9.85-1.6 1.73-1.77q.29-.04.77-.03h.2q.23-.03.39-.22l.11-.17.18-.27q.23-.41.5-.66.26-.2.56-.3c.25-.08.5-.07.82-.07zm-.7 3.63c-1.01 0-1.83.82-1.83 1.83s.82 1.83 1.83 1.83 1.83-.82 1.83-1.83-.82-1.84-1.83-1.84" clipRule="evenodd" />
        <path d="M8 2.63c.48 0 .88.39.88.87s-.4.88-.88.88H6.25c-1.04 0-1.87.83-1.87 1.87V8c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6.25c0-2 1.62-3.62 3.62-3.62zM17.75 2.63c2 0 3.63 1.62 3.63 3.62V8c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6.25c0-1.04-.84-1.87-1.88-1.87H16c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ScanCameraFill.displayName = 'ScanCameraFill';

// Triple export pattern
export { ScanCameraFill, ScanCameraFill as ScanCameraFillIcon, ScanCameraFill as SiScanCameraFill };
export default ScanCameraFill;
export type { ScanCameraFillProps };
