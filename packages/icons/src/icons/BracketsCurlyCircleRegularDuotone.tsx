import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M10 7.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.6q-.14.01-.15.14V10c0 .77-.31 1.49-.83 2.01.52.52.83 1.24.83 2v1.1q.01.14.14.15H10c.41 0 .75.34.75.75s-.34.75-.75.75h-.6c-.91 0-1.65-.73-1.65-1.64V14c0-.6-.4-1.12-.96-1.3-.32-.09-.54-.38-.54-.71s.22-.62.54-.72c.57-.17.96-.7.96-1.29V8.9c0-.9.74-1.64 1.64-1.64zM14.6 7.25c.92 0 1.65.74 1.65 1.64V10c0 .6.4 1.12.96 1.3.32.09.54.38.54.71s-.22.62-.54.72c-.57.17-.96.7-.96 1.29v1.1c0 .9-.73 1.64-1.64 1.64H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.6q.14-.01.15-.14V14c0-.77.31-1.49.83-2.01-.52-.52-.83-1.24-.83-2V8.9q-.01-.14-.14-.15H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

BracketsCurlyCircleRegularDuotone.displayName = 'BracketsCurlyCircleRegularDuotone';

// Triple export pattern
export { BracketsCurlyCircleRegularDuotone, BracketsCurlyCircleRegularDuotone as BracketsCurlyCircleRegularDuotoneIcon, BracketsCurlyCircleRegularDuotone as SiBracketsCurlyCircleRegularDuotone };
export default BracketsCurlyCircleRegularDuotone;
export type { BracketsCurlyCircleRegularDuotoneProps };
