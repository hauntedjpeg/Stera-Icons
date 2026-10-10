import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksRegularProps = Omit<IconBaseProps, 'children'>;

const TallyMarksRegular = memo(
  forwardRef<SVGSVGElement, TallyMarksRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 4.25c.41 0 .75.34.75.75v2l1.86-1.14c.35-.22.81-.1 1.03.25s.1.81-.25 1.03l-2.64 1.61V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.67l-2.5 1.53V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.89l-2.5 1.53V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.44l-2.5 1.53V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2l-1.86 1.14c-.35.22-.81.1-1.03-.25s-.1-.81.25-1.03l2.64-1.61V5c0-.41.34-.75.75-.75s.75.34.75.75v9.33l2.5-1.53V5c0-.41.34-.75.75-.75s.75.34.75.75v6.88l2.5-1.52V5c0-.41.34-.75.75-.75s.75.34.75.75v4.44l2.5-1.53V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TallyMarksRegular.displayName = 'TallyMarksRegular';

// Triple export pattern
export { TallyMarksRegular, TallyMarksRegular as TallyMarksRegularIcon, TallyMarksRegular as SiTallyMarksRegular };
export default TallyMarksRegular;
export type { TallyMarksRegularProps };
