import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EuroCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EuroCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, EuroCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m1.25 5c-1.45 0-2.67.3-3.48 1.25q-.65.8-.86 2H8c-.41 0-.75.34-.75.75s.34.75.75.75h.76l-.01.5.01.5H8c-.41 0-.75.34-.75.75s.34.75.75.75h.9q.23 1.2.87 2c.8.96 2.03 1.25 3.48 1.25h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.25c-1.3 0-1.95-.27-2.33-.72q-.3-.34-.48-1.03h2.06c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.24l-.01-.5.01-.5h2.24c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.06q.18-.7.48-1.03c.38-.45 1.03-.72 2.33-.72h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 6.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-1.3 0-1.95.27-2.33.72q-.3.34-.48 1.03h2.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.24l-.01.5.01.5h2.24c.41 0 .75.34.75.75s-.34.75-.75.75h-2.06q.18.7.48 1.03c.38.45 1.03.72 2.33.72h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-1.45 0-2.67-.3-3.48-1.25q-.65-.8-.86-2H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.76l-.01-.5.01-.5H8c-.41 0-.75-.34-.75-.75S7.59 10 8 10h.9q.23-1.2.87-2c.8-.96 2.03-1.25 3.48-1.25z" />
    </IconBase>
  ))
);

EuroCircleFillDuotone.displayName = 'EuroCircleFillDuotone';

// Triple export pattern
export { EuroCircleFillDuotone, EuroCircleFillDuotone as EuroCircleFillDuotoneIcon, EuroCircleFillDuotone as SiEuroCircleFillDuotone };
export default EuroCircleFillDuotone;
export type { EuroCircleFillDuotoneProps };
