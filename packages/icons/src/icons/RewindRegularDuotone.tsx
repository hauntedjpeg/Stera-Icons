import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RewindRegularDuotone = memo(
  forwardRef<SVGSVGElement, RewindRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.41 6.02q.68.07 1.13.57l.12.14c.22.3.28.65.31.95q.04.47.03 1.15v6.34q0 .68-.03 1.15c-.03.3-.09.65-.31.95-.3.4-.75.66-1.25.7-.37.04-.7-.09-.98-.22q-.4-.2-.99-.56L3.15 14q-.55-.31-.92-.58c-.24-.17-.5-.4-.64-.73-.17-.39-.2-.83-.06-1.23l.06-.17.06-.12q.24-.4.58-.61.37-.27.92-.58l5.3-3.18q.56-.35.98-.56c.24-.12.53-.23.85-.23zm-.13 1.5-.2.08c-.2.1-.46.25-.87.5l-5.29 3.17c-.39.24-.63.38-.8.5l-.16.14q-.03.09 0 .18 0 .02.16.13c.17.13.41.27.8.5l5.3 3.18c.4.25.66.4.86.5l.2.08q.1 0 .16-.09.02-.02.04-.21.02-.31.02-1V8.82q0-.7-.02-1-.02-.2-.04-.22-.06-.08-.16-.09" clipRule="evenodd" />
        <path fillRule="evenodd" d="M20.91 6.02q.68.07 1.13.57l.12.14c.22.3.29.65.31.95q.04.47.03 1.15v6.34q0 .68-.03 1.15c-.02.3-.09.65-.3.95-.3.4-.76.66-1.26.7-.37.04-.7-.09-.97-.22q-.42-.2-1-.56L13.65 14q-.55-.31-.92-.58c-.24-.17-.5-.4-.64-.73-.17-.39-.2-.83-.06-1.23l.06-.17.06-.12q.24-.4.58-.61.37-.27.92-.58l5.3-3.18q.56-.35.99-.56c.23-.12.52-.23.84-.23zm-.12 1.5q-.02 0-.2.08-.28.14-.88.5l-5.29 3.17c-.39.24-.63.38-.8.5l-.16.14q-.03.09 0 .18 0 .02.16.13c.17.13.41.27.8.5l5.3 3.18q.59.36.87.5.18.09.2.08.1 0 .16-.09l.03-.21q.02-.31.02-1V8.82q0-.7-.02-1l-.03-.22q-.07-.08-.16-.09" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RewindRegularDuotone.displayName = 'RewindRegularDuotone';

// Triple export pattern
export { RewindRegularDuotone, RewindRegularDuotone as RewindRegularDuotoneIcon, RewindRegularDuotone as SiRewindRegularDuotone };
export default RewindRegularDuotone;
export type { RewindRegularDuotoneProps };
