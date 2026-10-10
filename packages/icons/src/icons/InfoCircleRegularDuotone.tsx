import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const InfoCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, InfoCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 11.25c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V12c0-.41.34-.75.75-.75M12 7c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7" />
    </IconBase>
  ))
);

InfoCircleRegularDuotone.displayName = 'InfoCircleRegularDuotone';

// Triple export pattern
export { InfoCircleRegularDuotone, InfoCircleRegularDuotone as InfoCircleRegularDuotoneIcon, InfoCircleRegularDuotone as SiInfoCircleRegularDuotone };
export default InfoCircleRegularDuotone;
export type { InfoCircleRegularDuotoneProps };
