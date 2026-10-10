import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronSquareRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.97 7.47c.3-.3.77-.3 1.06 0l4 4q.21.22.22.53 0 .31-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L13.44 12 9.97 8.53c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M12 3.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34s0 2.47-.07 3.34c-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07s-2.47 0-3.34-.07c-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34s0-2.47.07-3.34c.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07m0 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4-.8.4-1.45 1.05-1.86 1.85-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23s0 2.43.07 3.22c.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06s2.43 0 3.22-.07c.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23s0-2.43-.07-3.22c-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronSquareRightRegular.displayName = 'ChevronSquareRightRegular';

// Triple export pattern
export { ChevronSquareRightRegular, ChevronSquareRightRegular as ChevronSquareRightRegularIcon, ChevronSquareRightRegular as SiChevronSquareRightRegular };
export default ChevronSquareRightRegular;
export type { ChevronSquareRightRegularProps };
