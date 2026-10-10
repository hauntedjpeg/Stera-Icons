import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalculatorRegularProps = Omit<IconBaseProps, 'children'>;

const CalculatorRegular = memo(
  forwardRef<SVGSVGElement, CalculatorRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.75 16.25c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 16.25c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.25 13c.55 0 1 .45 1 1v3.25c0 .55-.45 1-1 1s-1-.45-1-1V14c0-.55.45-1 1-1M8.75 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.75 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.25 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.5 5.75c.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75h-7c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M13.4 2.25q1.44-.01 2.36.05.93.05 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.93.05 2.36v6.8q.01 1.44-.05 2.36-.05.93-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05h-2.8q-1.44.01-2.36-.05-.93-.05-1.67-.41c-.8-.41-1.45-1.06-1.86-1.86-.25-.5-.36-1.04-.41-1.67q-.06-.92-.05-2.36V8.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.92-.06 2.36-.05zm-2.8 1.5c-1 0-1.7 0-2.24.04-.53.05-.86.13-1.1.26q-.8.4-1.21 1.2c-.13.25-.21.58-.26 1.11-.04.55-.04 1.25-.04 2.24v6.8c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h2.8c1 0 1.7 0 2.24-.04.53-.05.86-.13 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24V8.6c0-1 0-1.7-.04-2.24-.05-.53-.13-.86-.26-1.1q-.4-.8-1.2-1.21c-.25-.13-.58-.21-1.11-.26-.55-.04-1.25-.04-2.24-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

CalculatorRegular.displayName = 'CalculatorRegular';

// Triple export pattern
export { CalculatorRegular, CalculatorRegular as CalculatorRegularIcon, CalculatorRegular as SiCalculatorRegular };
export default CalculatorRegular;
export type { CalculatorRegularProps };
