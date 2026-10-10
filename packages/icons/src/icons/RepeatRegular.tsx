import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatRegularProps = Omit<IconBaseProps, 'children'>;

const RepeatRegular = memo(
  forwardRef<SVGSVGElement, RepeatRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.75c.41 0 .75.34.75.75V13c0 3.18-2.57 5.75-5.75 5.75H4.81l1.72 1.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3q-.21-.22-.22-.53 0-.31.22-.53l3-3c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72H16c2.35 0 4.25-1.9 4.25-4.25v-1.5c0-.41.34-.75.75-.75M17.47 2.47c.3-.3.77-.3 1.06 0l3 3q.22.22.22.53t-.22.53l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.72-1.72H8c-2.35 0-4.25 1.9-4.25 4.25v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V11c0-3.18 2.57-5.75 5.75-5.75h11.19l-1.72-1.72c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

RepeatRegular.displayName = 'RepeatRegular';

// Triple export pattern
export { RepeatRegular, RepeatRegular as RepeatRegularIcon, RepeatRegular as SiRepeatRegular };
export default RepeatRegular;
export type { RepeatRegularProps };
