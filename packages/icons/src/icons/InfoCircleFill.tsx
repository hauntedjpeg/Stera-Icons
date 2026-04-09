import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InfoCircleFillProps = Omit<IconBaseProps, 'children'>;

const InfoCircleFill = memo(
  forwardRef<SVGSVGElement, InfoCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="info-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 9c-.48 0-.87.39-.87.87v4.5a.88.88 0 0 0 1.74 0V12c0-.48-.39-.87-.87-.87m0-4.63a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

InfoCircleFill.displayName = 'InfoCircleFill';

// Triple export pattern (lucide-react style)
export { InfoCircleFill, InfoCircleFill as InfoCircleFillIcon, InfoCircleFill as SiInfoCircleFill };
export default InfoCircleFill;
export type { InfoCircleFillProps };
