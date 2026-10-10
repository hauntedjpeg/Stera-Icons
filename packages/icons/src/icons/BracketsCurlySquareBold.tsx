import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareBold = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 7c.55 0 1 .45 1 1s-.45 1-1 1h-.5v1c0 .75-.28 1.45-.74 2 .46.55.74 1.25.74 2v1h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.6c-1.05 0-1.9-.85-1.9-1.9V14c0-.48-.32-.9-.78-1.04-.43-.13-.72-.52-.72-.96s.3-.83.72-.96c.46-.14.78-.56.78-1.05V8.9C7.5 7.85 8.35 7 9.4 7zM14.6 7c1.05 0 1.9.85 1.9 1.9V10c0 .48.32.9.78 1.04.43.13.72.52.72.96s-.3.83-.72.96c-.46.14-.78.56-.78 1.05v1.1c0 1.04-.85 1.89-1.9 1.89H14c-.55 0-1-.45-1-1s.45-1 1-1h.5v-1c0-.75.28-1.45.74-2-.46-.55-.74-1.25-.74-2V9H14c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-4.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.9c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlySquareBold.displayName = 'BracketsCurlySquareBold';

// Triple export pattern
export { BracketsCurlySquareBold, BracketsCurlySquareBold as BracketsCurlySquareBoldIcon, BracketsCurlySquareBold as SiBracketsCurlySquareBold };
export default BracketsCurlySquareBold;
export type { BracketsCurlySquareBoldProps };
