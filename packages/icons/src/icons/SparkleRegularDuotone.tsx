import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparkleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.67 1.67.04.1 1.24 3.7c.72 2.16 2.42 3.86 4.58 4.58l3.7 1.24c.31.1.52.39.52.71s-.2.61-.51.71l-3.7 1.24c-2.17.72-3.87 2.42-4.6 4.58l-1.23 3.7q0 .06-.04.1.13-.26.04-.57L12 19.63l.52-1.57c.87-2.62 2.92-4.67 5.54-5.54l1.57-.52-1.57-.52c-2.62-.87-4.67-2.92-5.54-5.54L12 4.37l.71-2.13q.1-.3-.04-.57" opacity={.4} />
        <path d="M11.29 1.76c.13-.39.55-.6.95-.47s.6.55.47.95l-1.23 3.7c-.87 2.62-2.92 4.67-5.54 5.54L4.37 12l1.57.52c2.62.88 4.67 2.93 5.54 5.54l1.23 3.7c.13.4-.08.82-.47.95-.4.13-.82-.08-.95-.47l-1.24-3.7c-.72-2.17-2.42-3.87-4.58-4.6l-3.7-1.23c-.31-.1-.52-.39-.52-.7 0-.33.2-.62.51-.72l3.7-1.24c2.17-.72 3.87-2.42 4.6-4.58z" />
    </IconBase>
  ))
);

SparkleRegularDuotone.displayName = 'SparkleRegularDuotone';

// Triple export pattern
export { SparkleRegularDuotone, SparkleRegularDuotone as SparkleRegularDuotoneIcon, SparkleRegularDuotone as SiSparkleRegularDuotone };
export default SparkleRegularDuotone;
export type { SparkleRegularDuotoneProps };
