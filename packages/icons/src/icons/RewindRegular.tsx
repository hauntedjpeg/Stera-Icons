import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindRegularProps = Omit<IconBaseProps, 'children'>;

const RewindRegular = memo(
  forwardRef<SVGSVGElement, RewindRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.91 6.02q.68.07 1.13.57l.12.14c.22.3.28.65.31.95q.04.47.03 1.15v6.34q0 .68-.03 1.15c-.03.3-.09.65-.31.95-.3.4-.75.66-1.25.7-.37.04-.7-.09-.98-.22q-.4-.2-.99-.56L13.65 14q-.55-.31-.92-.58c-.24-.17-.5-.4-.64-.73q-.06-.12-.09-.26v2.73q0 .68-.03 1.15c-.03.3-.09.65-.31.95-.3.4-.75.66-1.25.7-.37.04-.7-.09-.98-.22q-.4-.2-.99-.56L3.15 14q-.55-.31-.92-.58c-.24-.17-.5-.4-.64-.73-.17-.39-.2-.83-.06-1.23l.06-.17.06-.12q.24-.4.58-.61.37-.27.92-.58l5.3-3.18q.56-.35.98-.56c.24-.12.53-.23.85-.23h.13q.68.07 1.13.57l.12.14c.22.3.28.65.31.95q.04.47.03 1.15v2.74q0-.06.03-.1l.06-.17.06-.12q.25-.4.58-.61.37-.27.92-.58l5.3-3.18q.56-.35.98-.56c.24-.12.53-.23.85-.23zm-10.63 1.5-.2.08c-.2.1-.46.25-.87.5l-5.29 3.17c-.39.24-.63.38-.8.5l-.16.14q-.03.09 0 .18 0 .02.16.13c.17.13.41.27.8.5l5.3 3.18c.4.25.66.4.86.5l.2.08q.1 0 .16-.09.02-.02.04-.21.02-.31.02-1V8.82q0-.7-.02-1-.02-.2-.04-.22-.06-.08-.16-.09m10.5 0-.2.08c-.2.1-.46.25-.87.5l-5.29 3.17c-.39.24-.63.38-.8.5l-.16.14q-.03.09 0 .18 0 .02.15.13c.18.13.42.27.81.5l5.3 3.18q.58.36.86.5l.2.08q.1 0 .16-.09.02-.02.04-.21.02-.31.02-1V8.82q0-.7-.02-1-.02-.2-.04-.22-.06-.08-.16-.09" clipRule="evenodd" />
    </IconBase>
  ))
);

RewindRegular.displayName = 'RewindRegular';

// Triple export pattern
export { RewindRegular, RewindRegular as RewindRegularIcon, RewindRegular as SiRewindRegular };
export default RewindRegular;
export type { RewindRegularProps };
