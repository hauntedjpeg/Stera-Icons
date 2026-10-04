import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 2a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" opacity={.4} />
        <path fillRule="evenodd" d="M8.65 5.5q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v11.3q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02a2 2 0 0 1-.57-.11l-.2-.09-.14-.07a2 2 0 0 1-.73-.8 2 2 0 0 1-.2-.77q-.02-.34-.02-.74V8.1q0-.4.02-.74.01-.35.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2q.34-.03.74-.02zm-.8 2-.58.01v.01l-.02.58v11.3l.01.58h.01c.12.02.28.02.58.02h.8l.58-.01v-.01c.02-.12.02-.28.02-.58V8.1l-.01-.58h-.01l-.58-.02zM16.15 5.5q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v5.3q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02a2 2 0 0 1-.57-.11l-.2-.09-.14-.07a2 2 0 0 1-.73-.8 2 2 0 0 1-.2-.77q-.02-.34-.02-.74V8.1q0-.4.02-.74.01-.35.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2q.34-.03.74-.02zm-.8 2-.58.01v.01c-.02.12-.02.28-.02.58v5.3l.01.59h.01l.58.01h.8l.58-.01v-.01c.02-.12.02-.28.02-.58V8.1l-.01-.58h-.01l-.58-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalTopBoldDuotone.displayName = 'AlignVerticalTopBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopBoldDuotone, AlignVerticalTopBoldDuotone as AlignVerticalTopBoldDuotoneIcon, AlignVerticalTopBoldDuotone as SiAlignVerticalTopBoldDuotone };
export default AlignVerticalTopBoldDuotone;
export type { AlignVerticalTopBoldDuotoneProps };
