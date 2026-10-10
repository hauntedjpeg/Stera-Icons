import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CodeCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m1.21 5.02c-.47-.12-.94.17-1.06.64l-2 8c-.12.47.17.94.64 1.06s.94-.17 1.06-.64l2-8c.12-.47-.17-.94-.64-1.06m-4.1 2.23c-.33-.34-.89-.34-1.23 0l-2 2c-.34.34-.34.9 0 1.24l2 2c.34.34.9.34 1.24 0s.34-.9 0-1.24L7.74 12l1.38-1.38c.34-.34.34-.9 0-1.24m7 0c-.33-.34-.89-.34-1.23 0s-.34.9 0 1.24L16.26 12l-1.38 1.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2-2q.24-.26.25-.62 0-.36-.25-.62z" clipRule="evenodd" opacity={.4} />
        <path d="M12.15 7.79c.12-.47.6-.76 1.06-.64s.76.6.64 1.06l-2 8c-.12.47-.6.76-1.06.64s-.76-.6-.64-1.06zM7.88 9.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L7.74 12l1.38 1.38c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2-2c-.34-.34-.34-.9 0-1.24zM14.88 9.38c.34-.34.9-.34 1.24 0l2 2q.25.26.25.62t-.25.62l-2 2c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L16.26 12l-1.38-1.38c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

CodeCircleFillDuotone.displayName = 'CodeCircleFillDuotone';

// Triple export pattern
export { CodeCircleFillDuotone, CodeCircleFillDuotone as CodeCircleFillDuotoneIcon, CodeCircleFillDuotone as SiCodeCircleFillDuotone };
export default CodeCircleFillDuotone;
export type { CodeCircleFillDuotoneProps };
