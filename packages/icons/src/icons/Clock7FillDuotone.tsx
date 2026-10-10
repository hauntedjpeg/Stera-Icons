import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock7FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v4.76l-1.89 3.27c-.24.41-.1.95.32 1.2.42.23.96.09 1.2-.33l2-3.46v-.01l.06-.12.03-.12.01-.05v-.04l.01-.04V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5.06l-.01.04v.04l-.02.05-.03.12-.06.12-2 3.47c-.24.42-.78.56-1.2.32s-.56-.78-.32-1.2l1.89-3.26V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock7FillDuotone.displayName = 'Clock7FillDuotone';

// Triple export pattern
export { Clock7FillDuotone, Clock7FillDuotone as Clock7FillDuotoneIcon, Clock7FillDuotone as SiClock7FillDuotone };
export default Clock7FillDuotone;
export type { Clock7FillDuotoneProps };
