import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSearchRegularProps = Omit<IconBaseProps, 'children'>;

const TextSearchRegular = memo(
  forwardRef<SVGSVGElement, TextSearchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 9.25c2.35 0 4.25 1.9 4.25 4.25q-.02 1.23-.62 2.21l2.08 2.08c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-2.08-2.08q-.98.61-2.21.62c-2.35 0-4.25-1.9-4.25-4.25s1.9-4.25 4.25-4.25m0 1.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75" clipRule="evenodd" />
        <path d="M8 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM8 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextSearchRegular.displayName = 'TextSearchRegular';

// Triple export pattern
export { TextSearchRegular, TextSearchRegular as TextSearchRegularIcon, TextSearchRegular as SiTextSearchRegular };
export default TextSearchRegular;
export type { TextSearchRegularProps };
