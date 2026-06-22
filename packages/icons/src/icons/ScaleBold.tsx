import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleBoldProps = Omit<IconBaseProps, 'children'>;

const ScaleBold = memo(
  forwardRef<SVGSVGElement, ScaleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v1.35a5 5 0 0 1 .67.18l3.64 1.3a3 3 0 0 0 1 .17H21a1 1 0 0 1 0 2h-.55l2.48 6.54a1 1 0 0 1-.34 1.15A6 6 0 0 1 19 17a6 6 0 0 1-3.6-1.3 1 1 0 0 1-.33-1.16l2.5-6.6a5 5 0 0 1-.93-.23L13 6.41V20h2a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h2V6.42l-3.64 1.3a5 5 0 0 1-.93.22l2.5 6.6a1 1 0 0 1-.34 1.15A6 6 0 0 1 5 17a6 6 0 0 1-3.6-1.3 1 1 0 0 1-.33-1.16L3.55 8H3a1 1 0 0 1 0-2h2.68a3 3 0 0 0 1.01-.17l3.64-1.3a5 5 0 0 1 .67-.18V3a1 1 0 0 1 1-1M3.22 14.5Q4.16 15 5 15q.84 0 1.78-.5L5 9.8zm14 0q.94.51 1.78.5.84 0 1.78-.5L19 9.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScaleBold.displayName = 'ScaleBold';

// Triple export pattern (lucide-react style)
export { ScaleBold, ScaleBold as ScaleBoldIcon, ScaleBold as SiScaleBold };
export default ScaleBold;
export type { ScaleBoldProps };
