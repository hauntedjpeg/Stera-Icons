import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCheckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCheckRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanCheckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.8 0-3.25-1.46-3.25-3.25v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M8 2.75c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.97 0-1.75.78-1.75 1.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.97-.78-1.75-1.75-1.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M15.45 8.74c.28-.3.75-.32 1.06-.04.3.28.32.75.04 1.06l-4.88 5.32-.3.31q-.15.17-.46.29-.42.13-.84-.02-.3-.13-.45-.3l-.28-.33-1.92-2.3c-.26-.32-.22-.8.1-1.06s.8-.22 1.06.1l1.91 2.3.04.04.04-.04z" />
    </IconBase>
  ))
);

ScanCheckRegularDuotone.displayName = 'ScanCheckRegularDuotone';

// Triple export pattern
export { ScanCheckRegularDuotone, ScanCheckRegularDuotone as ScanCheckRegularDuotoneIcon, ScanCheckRegularDuotone as SiScanCheckRegularDuotone };
export default ScanCheckRegularDuotone;
export type { ScanCheckRegularDuotoneProps };
