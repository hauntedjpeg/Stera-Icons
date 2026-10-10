import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M15.9 12.75q.4 0 .74.02.36.01.77.2.57.3.87.87.19.41.2.77.02.34.02.74v.8q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02h-5.3q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q8 16.55 8 16.15v-.8q0-.4.02-.74.01-.25.11-.57l.09-.2.07-.14a2 2 0 0 1 .8-.73q.42-.19.77-.2.34-.02.74-.02zm-5.3 2-.58.01v.01c-.02.12-.02.28-.02.58v.8l.01.58h.01c.12.02.28.02.58.02h5.3l.58-.01v-.01c.02-.12.02-.28.02-.58v-.8l-.01-.58h-.01c-.12-.02-.28-.02-.58-.02zM15.9 5.25q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v.8q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H4.6q-.4 0-.74-.02-.35-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q2 9.05 2 8.65v-.8q0-.4.02-.74.01-.26.11-.57l.09-.2.07-.14a2 2 0 0 1 .8-.73c.27-.14.54-.18.77-.2q.34-.03.74-.02zm-11.3 2-.58.01-.01.01-.01.58v.8l.01.58h.01c.12.02.28.02.58.02h11.3l.58-.01v-.01c.02-.12.02-.28.02-.58v-.8l-.01-.58h-.01l-.58-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalRightBoldDuotone.displayName = 'AlignHorizontalRightBoldDuotone';

// Triple export pattern
export { AlignHorizontalRightBoldDuotone, AlignHorizontalRightBoldDuotone as AlignHorizontalRightBoldDuotoneIcon, AlignHorizontalRightBoldDuotone as SiAlignHorizontalRightBoldDuotone };
export default AlignHorizontalRightBoldDuotone;
export type { AlignHorizontalRightBoldDuotoneProps };
