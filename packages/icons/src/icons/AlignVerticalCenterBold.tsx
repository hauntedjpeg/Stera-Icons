import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalCenterBoldProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterBold = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.65 3q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74V11h1.5V8.6q0-.4.02-.74.01-.36.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2q.34-.03.74-.02h.8q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74V11H21a1 1 0 1 1 0 2h-2.25v2.4q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02a2 2 0 0 1-.57-.11l-.2-.09-.14-.07a2 2 0 0 1-.73-.8 2 2 0 0 1-.2-.77q-.02-.34-.02-.74V13h-1.5v5.4q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02a2 2 0 0 1-.57-.11l-.2-.09-.14-.07a2 2 0 0 1-.73-.8 2 2 0 0 1-.2-.77q-.02-.34-.02-.74V13H3a1 1 0 1 1 0-2h2.25V5.6q0-.4.02-.74.01-.36.2-.77a2 2 0 0 1 .87-.87q.42-.19.77-.2.34-.02.74-.02zm-.8 2-.58.01v.01l-.02.58v12.8l.01.58h.01c.12.02.28.02.58.02h.8l.58-.01v-.01c.02-.12.02-.28.02-.58V5.6l-.01-.58h-.01L8.65 5zm7.5 3-.58.01v.01c-.02.12-.02.28-.02.58v6.8l.01.58h.01c.12.02.28.02.58.02h.8l.58-.01v-.01c.02-.12.02-.28.02-.58V8.6l-.01-.58h-.01L16.15 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalCenterBold.displayName = 'AlignVerticalCenterBold';

// Triple export pattern (lucide-react style)
export { AlignVerticalCenterBold, AlignVerticalCenterBold as AlignVerticalCenterBoldIcon, AlignVerticalCenterBold as SiAlignVerticalCenterBold };
export default AlignVerticalCenterBold;
export type { AlignVerticalCenterBoldProps };
