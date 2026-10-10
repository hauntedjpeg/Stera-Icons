import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesFillDuotone = memo(
  forwardRef<SVGSVGElement, SparklesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 4.13c.39 0 .72.25.84.62l.74 2.43c.69 2.27 2.47 4.05 4.74 4.74l2.43.74c.37.12.63.45.63.84s-.26.72-.63.84l-2.43.74c-2.27.69-4.05 2.47-4.74 4.74l-.74 2.43c-.12.37-.45.63-.84.63s-.72-.26-.84-.63l-.74-2.43c-.69-2.27-2.47-4.05-4.74-4.74l-2.43-.74c-.37-.12-.62-.45-.62-.84s.25-.72.62-.84l2.43-.74c2.27-.69 4.05-2.47 4.74-4.74l.74-2.43.05-.14c.15-.3.45-.49.79-.49" />
        <path d="M18.88 1.4c.04-.13.2-.13.24 0l.2.63c.38 1.27 1.38 2.27 2.65 2.66l.64.19c.12.04.12.2 0 .24l-.64.2c-1.27.38-2.27 1.38-2.66 2.65l-.19.64c-.04.12-.2.12-.24 0l-.2-.64C18.3 6.7 17.3 5.7 16.04 5.31l-.64-.2c-.11-.03-.11-.2 0-.23l.64-.2c1.27-.38 2.27-1.38 2.66-2.65z" opacity={.4} />
    </IconBase>
  ))
);

SparklesFillDuotone.displayName = 'SparklesFillDuotone';

// Triple export pattern
export { SparklesFillDuotone, SparklesFillDuotone as SparklesFillDuotoneIcon, SparklesFillDuotone as SiSparklesFillDuotone };
export default SparklesFillDuotone;
export type { SparklesFillDuotoneProps };
