import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalculatorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalculatorFillDuotone = memo(
  forwardRef<SVGSVGElement, CalculatorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.4 2.5q1.44-.01 2.34.05c.61.05 1.12.15 1.58.39.75.38 1.36 1 1.74 1.74.24.46.34.97.39 1.58q.06.9.05 2.34v6.8q.01 1.44-.05 2.34c-.05.61-.15 1.12-.39 1.58-.38.75-1 1.36-1.74 1.74-.46.24-.97.34-1.58.39q-.9.06-2.34.05h-2.8q-1.44.01-2.34-.05c-.61-.05-1.12-.15-1.58-.39-.75-.38-1.36-1-1.74-1.74-.24-.46-.34-.97-.39-1.58q-.06-.9-.05-2.34V8.6q-.01-1.44.05-2.34c.05-.61.15-1.12.39-1.58.38-.75 1-1.36 1.74-1.74.46-.24.97-.34 1.58-.39q.9-.06 2.34-.05zM8.75 16.25c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3.25 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M15.25 13c-.55 0-1 .45-1 1v3.25c0 .55.45 1 1 1s1-.45 1-1V14c0-.55-.45-1-1-1m-6.5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M12 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M8.75 9.75c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3.25 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3.25 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-6.75-4c-.41 0-.75.34-.75.75v1c0 .41.34.75.75.75h7c.41 0 .75-.34.75-.75v-1c0-.41-.34-.75-.75-.75z" clipRule="evenodd" opacity={.4} />
        <path d="M8.75 16.25c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 16.25c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.25 13c.55 0 1 .45 1 1v3.25c0 .55-.45 1-1 1s-1-.45-1-1V14c0-.55.45-1 1-1M8.75 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.75 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.25 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.5 5.75c.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75h-7c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

CalculatorFillDuotone.displayName = 'CalculatorFillDuotone';

// Triple export pattern
export { CalculatorFillDuotone, CalculatorFillDuotone as CalculatorFillDuotoneIcon, CalculatorFillDuotone as SiCalculatorFillDuotone };
export default CalculatorFillDuotone;
export type { CalculatorFillDuotoneProps };
