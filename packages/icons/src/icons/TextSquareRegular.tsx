import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareRegularProps = Omit<IconBaseProps, 'children'>;

const TextSquareRegular = memo(
  forwardRef<SVGSVGElement, TextSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.92 7.75c.87 0 1.58.7 1.58 1.58 0 .42-.34.75-.75.75S15 9.75 15 9.33q-.01-.07-.08-.08h-1.25c-.5 0-.92.41-.92.92v4.16c0 .51.41.92.92.92.41 0 .75.34.75.75s-.34.75-.75.75h-3.34c-.36 0-.66-.26-.73-.6l-.01-.08V16c0-.41.33-.75.74-.75.5 0 .92-.41.92-.92v-4.16c0-.5-.41-.92-.92-.92H9.08q-.07.01-.08.08c0 .42-.34.75-.75.75s-.75-.33-.75-.75c0-.87.7-1.58 1.58-1.58z" />
        <path fillRule="evenodd" d="M13.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-3.2q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-3.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSquareRegular.displayName = 'TextSquareRegular';

// Triple export pattern
export { TextSquareRegular, TextSquareRegular as TextSquareRegularIcon, TextSquareRegular as SiTextSquareRegular };
export default TextSquareRegular;
export type { TextSquareRegularProps };
