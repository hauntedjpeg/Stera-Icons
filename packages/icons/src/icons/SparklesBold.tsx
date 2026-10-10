import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesBoldProps = Omit<IconBaseProps, 'children'>;

const SparklesBold = memo(
  forwardRef<SVGSVGElement, SparklesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.5 4c.44 0 .83.29.96.7l.74 2.44c.68 2.24 2.42 3.98 4.66 4.66l2.43.74c.42.13.71.52.71.96s-.29.83-.7.96l-2.44.74c-2.24.68-3.98 2.42-4.66 4.66l-.74 2.43c-.13.42-.52.71-.96.71s-.83-.29-.96-.7l-.74-2.44c-.68-2.24-2.42-3.98-4.66-4.66l-2.43-.74c-.42-.13-.71-.52-.71-.96s.29-.83.7-.96l2.44-.74c2.24-.68 3.98-2.42 4.66-4.66l.74-2.43c.13-.42.52-.71.96-.71m0 4.35c-.91 2.36-2.79 4.24-5.15 5.15 2.36.91 4.24 2.78 5.15 5.15.91-2.37 2.79-4.24 5.15-5.15-2.37-.91-4.24-2.79-5.15-5.15" clipRule="evenodd" />
        <path d="M18.88 1.4c.04-.12.2-.12.24 0l.2.63c.38 1.27 1.38 2.27 2.65 2.66l.64.2c.12.03.12.2 0 .23l-.64.2c-1.27.38-2.27 1.38-2.66 2.65l-.2.64c-.03.12-.2.12-.23 0l-.2-.64C18.3 6.7 17.3 5.7 16.04 5.31l-.64-.19c-.12-.04-.12-.2 0-.24l.64-.2c1.27-.38 2.27-1.38 2.66-2.65z" />
    </IconBase>
  ))
);

SparklesBold.displayName = 'SparklesBold';

// Triple export pattern
export { SparklesBold, SparklesBold as SparklesBoldIcon, SparklesBold as SiSparklesBold };
export default SparklesBold;
export type { SparklesBoldProps };
