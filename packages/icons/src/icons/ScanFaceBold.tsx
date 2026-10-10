import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceBoldProps = Omit<IconBaseProps, 'children'>;

const ScanFaceBold = memo(
  forwardRef<SVGSVGElement, ScanFaceBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v2c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.93 0-3.5-1.57-3.5-3.5v-2c0-.55.45-1 1-1M20.5 15c.55 0 1 .45 1 1v2c0 1.93-1.57 3.5-3.5 3.5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.83 0 1.5-.67 1.5-1.5v-2c0-.55.45-1 1-1M13.8 13.26c.25-.33.72-.4 1.05-.14.33.24.4.71.15 1.05-.68.9-1.77 1.5-3 1.5s-2.32-.6-3-1.5c-.25-.34-.18-.8.15-1.05s.8-.19 1.05.14c.41.55 1.06.9 1.8.9s1.39-.35 1.8-.9M9.9 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05M14.1 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05" />
        <path fillRule="evenodd" d="M12 5.13c3.8 0 6.88 3.07 6.88 6.87S15.8 18.88 12 18.88 5.13 15.8 5.13 12 8.2 5.13 12 5.13m0 1.75c-2.83 0-5.12 2.29-5.12 5.12s2.29 5.13 5.12 5.13 5.13-2.3 5.13-5.13-2.3-5.12-5.13-5.12" clipRule="evenodd" />
        <path d="M8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6c-.83 0-1.5.67-1.5 1.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-1.93 1.57-3.5 3.5-3.5zM18 2.5c1.93 0 3.5 1.57 3.5 3.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.83-.67-1.5-1.5-1.5h-2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanFaceBold.displayName = 'ScanFaceBold';

// Triple export pattern
export { ScanFaceBold, ScanFaceBold as ScanFaceBoldIcon, ScanFaceBold as SiScanFaceBold };
export default ScanFaceBold;
export type { ScanFaceBoldProps };
