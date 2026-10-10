import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheeseRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheeseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.56 3.4q.29-.21.64-.12c1 .27 2.53.9 3.98 1.95 1.44 1.04 2.87 2.53 3.53 4.53q-.06-.18-.21-.32-.25-.2-.58-.19l-1 .12c-.61-1.2-1.57-2.17-2.62-2.92-1.13-.82-2.32-1.35-3.16-1.62l-8.41 6.11-2.81.31q-.21.03-.36.15z" opacity={.4} />
        <path fillRule="evenodd" d="M20.92 9.26c.2-.03.42.04.58.18q.25.23.25.56v8c0 .38-.29.7-.67.75l-7 .77q-.32.04-.58-.18-.25-.23-.25-.56V18c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25v1.22c0 .38-.29.7-.67.75l-7 .78c-.2.02-.42-.05-.58-.2-.16-.13-.25-.34-.25-.55v-2c0-.41.34-.75.75-.75.69 0 1.25-.56 1.25-1.25S3.69 14.75 3 14.75c-.41 0-.75-.34-.75-.75v-2c0-.38.29-.7.67-.74l10-1.12q.35-.03.6.2.24.25.23.59V11c0 .7.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-.56c0-.38.29-.7.67-.74zm-3.18 1.86c-.06 1.46-1.26 2.63-2.74 2.63-1.27 0-2.34-.86-2.65-2.03l-8.6.95v.69c1.15.32 2 1.38 2 2.64s-.85 2.32-2 2.64v.52l5.5-.61V18c0-1.52 1.23-2.75 2.75-2.75 1.5 0 2.71 1.2 2.75 2.69l5.5-.61v-6.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseRegularDuotone.displayName = 'CheeseRegularDuotone';

// Triple export pattern
export { CheeseRegularDuotone, CheeseRegularDuotone as CheeseRegularDuotoneIcon, CheeseRegularDuotone as SiCheeseRegularDuotone };
export default CheeseRegularDuotone;
export type { CheeseRegularDuotoneProps };
