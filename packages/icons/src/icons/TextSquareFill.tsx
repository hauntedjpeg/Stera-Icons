import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareFillProps = Omit<IconBaseProps, 'children'>;

const TextSquareFill = memo(
  forwardRef<SVGSVGElement, TextSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-4.52 4.5c-.94 0-1.7.76-1.7 1.7 0 .49.39.88.87.88.47 0 .85-.37.87-.84h1.21c.44 0 .8.36.8.8v4.16c0 .44-.36.8-.8.8q-.37.01-.62.25-.12.12-.18.28-.04.07-.05.16t-.02.18.02.18q.01.07.05.16l.08.15c.15.23.42.39.72.39h3.34l.09-.01q.31-.03.53-.25l.1-.13q.1-.15.13-.31.03-.09.02-.18t-.02-.18q-.01-.07-.05-.16l-.08-.15-.05-.07-.05-.06q-.22-.21-.53-.25h-.1c-.43 0-.78-.36-.79-.8v-4.16c0-.44.36-.8.8-.8h1.21c.02.47.4.84.87.84.48 0 .88-.4.88-.88 0-.94-.77-1.7-1.71-1.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSquareFill.displayName = 'TextSquareFill';

// Triple export pattern
export { TextSquareFill, TextSquareFill as TextSquareFillIcon, TextSquareFill as SiTextSquareFill };
export default TextSquareFill;
export type { TextSquareFillProps };
