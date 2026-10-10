import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CalculatorBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CalculatorBoldDuotone = memo(
  forwardRef<SVGSVGElement, CalculatorBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.4 2q1.44-.01 2.38.05.96.06 1.76.44c.85.43 1.54 1.12 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v6.8q.01 1.44-.05 2.38-.06.96-.44 1.76c-.43.85-1.12 1.54-1.97 1.97q-.8.39-1.76.44-.94.06-2.38.05h-2.8q-1.44.01-2.38-.05c-.65-.05-1.22-.17-1.76-.44-.85-.43-1.54-1.12-1.97-1.97-.27-.54-.39-1.11-.44-1.76Q4 16.84 4 15.4V8.6q-.01-1.44.05-2.38.05-.96.44-1.76c.43-.85 1.12-1.54 1.97-1.97.54-.27 1.11-.39 1.76-.44Q9.16 2 10.6 2zm-2.8 2c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23q-.73.37-1.1 1.1c-.1.2-.18.5-.23 1.01C6 6.92 6 7.6 6 8.6v6.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.73-.37 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V8.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01q-.37-.73-1.1-1.1c-.2-.1-.5-.18-1.01-.23C15.08 4 14.4 4 13.4 4z" clipRule="evenodd" opacity={.4} />
        <path d="M8.75 16.25c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 16.25c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.25 13c.55 0 1 .45 1 1v3.25c0 .55-.45 1-1 1s-1-.45-1-1V14c0-.55.45-1 1-1M8.75 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.75 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.25 9.75c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M15.5 5.75c.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75h-7c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

CalculatorBoldDuotone.displayName = 'CalculatorBoldDuotone';

// Triple export pattern
export { CalculatorBoldDuotone, CalculatorBoldDuotone as CalculatorBoldDuotoneIcon, CalculatorBoldDuotone as SiCalculatorBoldDuotone };
export default CalculatorBoldDuotone;
export type { CalculatorBoldDuotoneProps };
