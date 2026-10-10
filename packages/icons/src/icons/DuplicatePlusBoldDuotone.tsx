import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicatePlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, DuplicatePlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2h.18c1.22 0 2.08 0 2.8.25 1.3.46 2.31 1.47 2.77 2.76.2.56.24 1.2.25 2Q16 7 15 7c-.02-.73-.05-1.06-.14-1.33-.25-.71-.82-1.28-1.53-1.53C12.97 4.01 12.48 4 11 4H8.6c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23q-.73.37-1.1 1.1c-.1.2-.18.5-.23 1.01C4 6.92 4 7.6 4 8.6V11c0 1.48.01 1.97.14 2.33.25.71.82 1.28 1.53 1.53.27.1.6.12 1.33.13l.01 2c-.8 0-1.44-.05-2-.24-1.29-.46-2.3-1.47-2.76-2.76-.25-.73-.25-1.6-.25-2.8V8.54q-.01-1.4.05-2.33c.05-.65.17-1.22.44-1.76.43-.85 1.12-1.54 1.97-1.97q.8-.39 1.76-.44Q7.14 2 8.55 2H11" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 10.5c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M15.4 7q1.44-.01 2.38.05.96.05 1.76.44c.85.43 1.54 1.12 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38c-.05.65-.17 1.22-.44 1.76-.43.85-1.12 1.54-1.97 1.97q-.8.39-1.76.44-.94.06-2.38.05h-1.8q-1.44.01-2.38-.05c-.65-.05-1.22-.17-1.76-.44-.85-.43-1.54-1.12-1.97-1.97-.27-.54-.39-1.11-.44-1.76q-.04-.48-.04-1.07L7 15.4v-1.8q-.01-1.44.05-2.38.05-.96.44-1.76c.43-.85 1.12-1.54 1.97-1.97.54-.27 1.11-.39 1.76-.44Q12.16 7 13.6 7zm-1.8 2c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23q-.73.37-1.1 1.1c-.1.2-.18.5-.23 1.01C9 11.92 9 12.6 9 13.6v3.08l.04.94c.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h1.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.73-.37 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-1.8c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01q-.37-.73-1.1-1.1c-.2-.1-.5-.18-1.01-.23C17.08 9 16.4 9 15.4 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

DuplicatePlusBoldDuotone.displayName = 'DuplicatePlusBoldDuotone';

// Triple export pattern
export { DuplicatePlusBoldDuotone, DuplicatePlusBoldDuotone as DuplicatePlusBoldDuotoneIcon, DuplicatePlusBoldDuotone as SiDuplicatePlusBoldDuotone };
export default DuplicatePlusBoldDuotone;
export type { DuplicatePlusBoldDuotoneProps };
