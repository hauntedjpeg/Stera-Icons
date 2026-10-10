import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FortressBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FortressBoldDuotone = memo(
  forwardRef<SVGSVGElement, FortressBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.14 3.01c.32.05.6.25.75.54L5.62 5h.76l.73-1.45.07-.12C7.36 3.16 7.67 3 8 3h2c.55 0 1 .45 1 1v4h2V4c0-.55.45-1 1-1h2c.33 0 .64.16.82.43l.07.12.73 1.45h.76l.73-1.45c.14-.3.43-.5.75-.54L20 3h2c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1s-1-.45-1-1V5h-.38l-.73 1.45c-.16.34-.51.55-.89.55h-2c-.38 0-.73-.21-.9-.55L15.39 5H15v4c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V5h-.38l-.73 1.45C7.73 6.79 7.38 7 7 7H5c-.38 0-.73-.21-.9-.55L3.39 5H3v15c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1h2z" opacity={.4} />
        <path d="M12 13c2.2 0 4 1.8 4 4v2h7c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2c.55 0 1 .45 1 1s-.45 1-1 1H1c-.55 0-1-.45-1-1s.45-1 1-1h7v-2c0-2.2 1.8-4 4-4M6 8.5c.55 0 1 .45 1 1V11c0 .55-.45 1-1 1s-1-.45-1-1V9.5c0-.55.45-1 1-1M18 8.5c.55 0 1 .45 1 1v1.6c-.06.5-.48.9-1 .9s-.94-.4-1-.9V9.5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

FortressBoldDuotone.displayName = 'FortressBoldDuotone';

// Triple export pattern
export { FortressBoldDuotone, FortressBoldDuotone as FortressBoldDuotoneIcon, FortressBoldDuotone as SiFortressBoldDuotone };
export default FortressBoldDuotone;
export type { FortressBoldDuotoneProps };
