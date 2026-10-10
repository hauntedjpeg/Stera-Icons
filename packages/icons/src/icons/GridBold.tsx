import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridBoldProps = Omit<IconBaseProps, 'children'>;

const GridBold = memo(
  forwardRef<SVGSVGElement, GridBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.77 2.5h.14q1.1 0 1.9.06c.73.06 1.37.18 1.96.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.06.8.06 1.9v5.82q0 1.1-.06 1.9c-.06.73-.18 1.37-.48 1.96-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-.8.06-1.9.06H9.09q-1.1 0-1.9-.06c-.73-.06-1.37-.18-1.96-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96q-.06-.8-.06-1.9V9.09q0-1.1.06-1.9c.06-.73.18-1.37.48-1.96.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q8 2.5 9.1 2.5h5.68m-4.6 13.33v3.67h3.66v-3.67zm-5.66 0 .04.82c.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28l.82.04v-3.66zm11.32 0v3.66l.82-.04c.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22l.04-.82zm-11.33-2h3.67v-3.66H4.5zm5.67 0h3.66v-3.66h-3.66zm5.66 0h3.67v-3.66h-3.67zM8.17 4.51l-.82.04c-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22l-.04.82h3.66zm2 3.66h3.66V4.5h-3.66zm5.66 0h3.66l-.04-.82c-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28l-.82-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridBold.displayName = 'GridBold';

// Triple export pattern
export { GridBold, GridBold as GridBoldIcon, GridBold as SiGridBold };
export default GridBold;
export type { GridBoldProps };
