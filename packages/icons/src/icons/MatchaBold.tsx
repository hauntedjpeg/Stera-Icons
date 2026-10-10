import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MatchaBoldProps = Omit<IconBaseProps, 'children'>;

const MatchaBold = memo(
  forwardRef<SVGSVGElement, MatchaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3c2.55 0 4.9.29 6.63.77.86.24 1.63.54 2.21.92.54.35 1.16.94 1.16 1.81q0 .13-.02.25l-.23 2.2q-.15 1.36-.68 2.6C22.2 12.43 23 13.6 23 15c0 1.96-1.57 3.47-3.48 4.43C17.54 20.42 14.88 21 12 21s-5.54-.58-7.52-1.57C2.57 18.47 1 16.96 1 15c0-1.4.8-2.56 1.93-3.46q-.53-1.21-.68-2.6l-.23-2.19L2 6.5c0-.87.62-1.46 1.16-1.8.58-.39 1.35-.7 2.2-.93C7.12 3.29 9.47 3 12 3m8.07 10.3c-1.65 2.26-4.3 3.7-7.27 3.7h-1.6c-2.97 0-5.62-1.44-7.27-3.7C3.27 13.9 3 14.5 3 15c0 .8.67 1.79 2.38 2.64C7.02 18.46 9.36 19 12 19s4.98-.54 6.62-1.36C20.32 16.8 21 15.8 21 15c0-.51-.27-1.1-.93-1.7m-.33-4.44q-.6.24-1.3.42c-1.72.45-3.98.72-6.44.72s-4.72-.27-6.44-.72q-.7-.18-1.3-.42.18 1.37.81 2.53C6.27 13.56 8.6 15 11.2 15h1.6c2.61 0 4.93-1.44 6.13-3.61q.64-1.16.81-2.53M12 5c-2.42 0-4.58.27-6.1.7q-1.14.32-1.64.66l-.18.14q.07.08.29.2.56.35 1.7.65c1.5.4 3.6.65 5.93.65s4.42-.25 5.93-.65q1.14-.3 1.7-.64.22-.13.3-.21l-.19-.14q-.5-.34-1.64-.66C16.58 5.27 14.42 5 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaBold.displayName = 'MatchaBold';

// Triple export pattern
export { MatchaBold, MatchaBold as MatchaBoldIcon, MatchaBold as SiMatchaBold };
export default MatchaBold;
export type { MatchaBoldProps };
