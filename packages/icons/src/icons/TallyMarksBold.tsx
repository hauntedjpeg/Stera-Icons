import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksBoldProps = Omit<IconBaseProps, 'children'>;

const TallyMarksBold = memo(
  forwardRef<SVGSVGElement, TallyMarksBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 4c.55 0 1 .45 1 1v1.55l1.48-.9c.47-.3 1.09-.14 1.37.33.3.47.14 1.09-.33 1.37L19 8.9V19c0 .55-.45 1-1 1s-1-.45-1-1v-8.88l-2 1.22V19c0 .55-.45 1-1 1s-1-.45-1-1v-6.44l-2 1.22V19c0 .55-.45 1-1 1s-1-.45-1-1v-4l-2 1.23V19c0 .55-.45 1-1 1s-1-.45-1-1v-1.55l-1.48.9c-.47.3-1.09.14-1.37-.33-.3-.47-.14-1.09.33-1.37L5 15.1V5c0-.55.45-1 1-1s1 .45 1 1v8.88l2-1.22V5c0-.55.45-1 1-1s1 .45 1 1v6.44l2-1.22V5c0-.55.45-1 1-1s1 .45 1 1v4l2-1.23V5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

TallyMarksBold.displayName = 'TallyMarksBold';

// Triple export pattern
export { TallyMarksBold, TallyMarksBold as TallyMarksBoldIcon, TallyMarksBold as SiTallyMarksBold };
export default TallyMarksBold;
export type { TallyMarksBoldProps };
