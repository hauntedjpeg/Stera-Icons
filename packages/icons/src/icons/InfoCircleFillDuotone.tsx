import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 9c-.48 0-.87.39-.87.87v4.5a.88.88 0 0 0 1.74 0V12c0-.48-.39-.87-.87-.87m0-4.63a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.13c.48 0 .88.39.88.87v4.5a.88.88 0 0 1-1.76 0V12c0-.48.4-.87.88-.87M12 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

InfoCircleFillDuotone.displayName = 'InfoCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { InfoCircleFillDuotone, InfoCircleFillDuotone as InfoCircleFillDuotoneIcon, InfoCircleFillDuotone as SiInfoCircleFillDuotone };
export default InfoCircleFillDuotone;
export type { InfoCircleFillDuotoneProps };
