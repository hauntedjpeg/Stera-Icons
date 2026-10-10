import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFaceRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanFaceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.8 0-3.25-1.46-3.25-3.25v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M8 2.75c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.97 0-1.75.78-1.75 1.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.97-.78-1.75-1.75-1.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M13.8 13.26c.25-.33.72-.4 1.05-.14.33.24.4.71.15 1.05-.68.9-1.77 1.5-3 1.5s-2.32-.6-3-1.5c-.25-.34-.18-.8.15-1.05s.8-.19 1.05.14c.41.55 1.06.9 1.8.9s1.39-.35 1.8-.9M9.9 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05M14.1 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05" />
        <path fillRule="evenodd" d="M12 5.25c3.73 0 6.75 3.02 6.75 6.75s-3.02 6.75-6.75 6.75S5.25 15.73 5.25 12 8.27 5.25 12 5.25m0 1.5C9.1 6.75 6.75 9.1 6.75 12S9.1 17.25 12 17.25s5.25-2.35 5.25-5.25S14.9 6.75 12 6.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanFaceRegularDuotone.displayName = 'ScanFaceRegularDuotone';

// Triple export pattern
export { ScanFaceRegularDuotone, ScanFaceRegularDuotone as ScanFaceRegularDuotoneIcon, ScanFaceRegularDuotone as SiScanFaceRegularDuotone };
export default ScanFaceRegularDuotone;
export type { ScanFaceRegularDuotoneProps };
