import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftBold = memo(
  forwardRef<SVGSVGElement, ChevronLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L9.42 12l6.3 6.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7q-.28-.28-.29-.7t.3-.7z" />
    </IconBase>
  ))
);

ChevronLeftBold.displayName = 'ChevronLeftBold';

// Triple export pattern
export { ChevronLeftBold, ChevronLeftBold as ChevronLeftBoldIcon, ChevronLeftBold as SiChevronLeftBold };
export default ChevronLeftBold;
export type { ChevronLeftBoldProps };
