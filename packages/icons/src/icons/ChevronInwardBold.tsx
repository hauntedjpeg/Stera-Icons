import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardBold = memo(
  forwardRef<SVGSVGElement, ChevronInwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.3 14.3c.38-.4 1.02-.4 1.4 0l6 6c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 16.42l-5.3 5.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42zM17.3 2.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-6 6c-.38.4-1.02.4-1.4 0l-6-6c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0L12 7.58z" />
    </IconBase>
  ))
);

ChevronInwardBold.displayName = 'ChevronInwardBold';

// Triple export pattern
export { ChevronInwardBold, ChevronInwardBold as ChevronInwardBoldIcon, ChevronInwardBold as SiChevronInwardBold };
export default ChevronInwardBold;
export type { ChevronInwardBoldProps };
