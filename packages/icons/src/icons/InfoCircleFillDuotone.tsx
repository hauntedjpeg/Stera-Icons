import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 9c-.48 0-.87.39-.87.87v4.5c0 .48.39.88.87.88s.88-.4.88-.88V12c0-.48-.4-.87-.88-.87M12 7c-.83 0-1.5.67-1.5 1.5S11.17 10 12 10s1.5-.67 1.5-1.5S12.83 7 12 7" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.13c.48 0 .88.39.88.87v4.5c0 .48-.4.88-.88.88s-.87-.4-.87-.88V12c0-.48.39-.87.87-.87M12 7c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7" />
    </IconBase>
  ))
);

InfoCircleFillDuotone.displayName = 'InfoCircleFillDuotone';

// Triple export pattern
export { InfoCircleFillDuotone, InfoCircleFillDuotone as InfoCircleFillDuotoneIcon, InfoCircleFillDuotone as SiInfoCircleFillDuotone };
export default InfoCircleFillDuotone;
export type { InfoCircleFillDuotoneProps };
