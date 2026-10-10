import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortNarrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortNarrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, SortNarrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM19 7.25c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM16 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M6 3.25c.41 0 .75.34.75.75v14.19l2.72-2.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4 4-.11.1-.11.05-.05.02-.09.03h-.04l-.04.01-.09.01h-.08l-.06-.01h-.01l-.06-.02-.08-.03-.08-.04-.05-.03-.11-.09-4-4c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.72 2.72V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SortNarrowRegularDuotone.displayName = 'SortNarrowRegularDuotone';

// Triple export pattern
export { SortNarrowRegularDuotone, SortNarrowRegularDuotone as SortNarrowRegularDuotoneIcon, SortNarrowRegularDuotone as SiSortNarrowRegularDuotone };
export default SortNarrowRegularDuotone;
export type { SortNarrowRegularDuotoneProps };
