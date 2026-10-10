import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleRegularProps = Omit<IconBaseProps, 'children'>;

const SparkleRegular = memo(
  forwardRef<SVGSVGElement, SparkleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c.33 0 .62.22.72.53l1.09 3.59c.7 2.3 2.51 4.12 4.82 4.82l3.59 1.1c.31.09.53.38.53.71s-.22.62-.53.72l-3.59 1.09c-2.3.7-4.12 2.51-4.82 4.82l-1.1 3.59c-.09.31-.38.53-.71.53s-.62-.22-.72-.53l-1.09-3.59c-.7-2.3-2.51-4.12-4.82-4.82l-3.59-1.1c-.31-.09-.53-.38-.53-.71s.22-.62.53-.72l3.59-1.09c2.3-.7 4.12-2.51 4.82-4.82l1.1-3.59.04-.11c.12-.25.38-.42.67-.42m-.37 4.55c-.85 2.8-3.04 4.98-5.83 5.83L4.58 12l1.22.37c2.8.85 4.98 3.04 5.83 5.83l.37 1.22.37-1.22c.85-2.8 3.04-4.98 5.83-5.83l1.22-.37-1.22-.37c-2.8-.85-4.98-3.04-5.83-5.83L12 4.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleRegular.displayName = 'SparkleRegular';

// Triple export pattern
export { SparkleRegular, SparkleRegular as SparkleRegularIcon, SparkleRegular as SiSparkleRegular };
export default SparkleRegular;
export type { SparkleRegularProps };
