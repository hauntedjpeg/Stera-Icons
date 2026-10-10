import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CodeSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm.71 4.52c-.47-.12-.94.17-1.06.64l-2 8c-.12.47.17.94.64 1.06s.94-.17 1.06-.64l2-8c.11-.47-.17-.94-.64-1.06m-4.1 2.23c-.33-.34-.89-.34-1.23 0l-2 2c-.34.34-.34.9 0 1.24l2 2c.34.34.9.34 1.24 0s.34-.9 0-1.24L7.74 12l1.38-1.38c.34-.34.34-.9 0-1.24m7 0c-.33-.34-.89-.34-1.23 0s-.34.9 0 1.24L16.26 12l-1.38 1.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2-2q.25-.26.25-.62t-.25-.62z" clipRule="evenodd" opacity={.4} />
        <path d="M12.15 7.79c.12-.47.6-.76 1.06-.64s.76.6.64 1.06l-2 8c-.12.47-.6.76-1.06.64s-.76-.6-.64-1.06zM7.88 9.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L7.74 12l1.38 1.38c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2-2c-.34-.34-.34-.9 0-1.24zM14.88 9.38c.34-.34.9-.34 1.24 0l2 2q.25.26.25.62t-.25.62l-2 2c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L16.26 12l-1.38-1.38c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

CodeSquareFillDuotone.displayName = 'CodeSquareFillDuotone';

// Triple export pattern
export { CodeSquareFillDuotone, CodeSquareFillDuotone as CodeSquareFillDuotoneIcon, CodeSquareFillDuotone as SiCodeSquareFillDuotone };
export default CodeSquareFillDuotone;
export type { CodeSquareFillDuotoneProps };
