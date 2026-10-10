import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksBoldDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 19c0 .55-.45 1-1 1s-1-.45-1-1v-1.55l2-1.22zM11 19c0 .55-.45 1-1 1s-1-.45-1-1v-4l2-1.22zM15 19c0 .55-.45 1-1 1s-1-.45-1-1v-6.44l2-1.22zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-8.88l2-1.23zM6 4c.55 0 1 .45 1 1v8.88l-2 1.23V5c0-.55.45-1 1-1M10 4c.55 0 1 .45 1 1v6.44l-2 1.22V5c0-.55.45-1 1-1M14 4c.55 0 1 .45 1 1v4l-2 1.22V5c0-.55.45-1 1-1M18 4c.55 0 1 .45 1 1v1.55l-2 1.22V5c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M20.48 5.65c.47-.3 1.09-.14 1.37.33.3.47.14 1.09-.33 1.37l-18 11c-.47.3-1.09.14-1.37-.33-.3-.47-.14-1.09.33-1.37z" />
    </IconBase>
  ))
);

TallyMarksBoldDuotone.displayName = 'TallyMarksBoldDuotone';

// Triple export pattern
export { TallyMarksBoldDuotone, TallyMarksBoldDuotone as TallyMarksBoldDuotoneIcon, TallyMarksBoldDuotone as SiTallyMarksBoldDuotone };
export default TallyMarksBoldDuotone;
export type { TallyMarksBoldDuotoneProps };
