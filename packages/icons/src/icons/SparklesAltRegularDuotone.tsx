import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparklesAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 1.25c.35 0 .66.24.73.59.55 2.46 2.47 4.38 4.93 4.93.35.07.59.38.59.73s-.24.66-.59.73c-2.46.55-4.38 2.47-4.93 4.93-.07.35-.38.59-.73.59s-.66-.24-.73-.59c-.55-2.46-2.47-4.38-4.93-4.93-.35-.07-.59-.38-.59-.73s.24-.66.59-.73c2.46-.55 4.38-2.47 4.93-4.93l.04-.13c.11-.27.38-.46.69-.46m0 2.9c-.75 1.43-1.92 2.6-3.35 3.35 1.43.75 2.6 1.92 3.35 3.35.75-1.43 1.92-2.6 3.35-3.35-1.43-.75-2.6-1.92-3.35-3.35" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M7.5 10.25c.35 0 .66.24.73.59.55 2.46 2.47 4.38 4.93 4.93.35.07.59.38.59.73s-.24.66-.59.73c-2.46.55-4.38 2.47-4.93 4.93-.07.35-.38.59-.73.59s-.66-.24-.73-.59c-.55-2.46-2.47-4.38-4.93-4.93-.35-.07-.59-.38-.59-.73s.24-.66.59-.73c2.46-.55 4.38-2.47 4.93-4.93l.04-.13c.11-.27.38-.46.69-.46m0 2.9c-.75 1.43-1.92 2.6-3.35 3.35 1.43.75 2.6 1.92 3.35 3.35.75-1.43 1.92-2.6 3.35-3.35-1.43-.75-2.6-1.92-3.35-3.35" clipRule="evenodd" />
    </IconBase>
  ))
);

SparklesAltRegularDuotone.displayName = 'SparklesAltRegularDuotone';

// Triple export pattern
export { SparklesAltRegularDuotone, SparklesAltRegularDuotone as SparklesAltRegularDuotoneIcon, SparklesAltRegularDuotone as SiSparklesAltRegularDuotone };
export default SparklesAltRegularDuotone;
export type { SparklesAltRegularDuotoneProps };
