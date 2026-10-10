import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalBoldProps = Omit<IconBaseProps, 'children'>;

const PedestalBold = memo(
  forwardRef<SVGSVGElement, PedestalBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v1q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23h-.08q.17.48.18 1.02c0 1.33-.86 2.45-2.05 2.84l.03.26q.03.4.02.9v5c0 .55-.45 1-1 1s-1-.45-1-1v-5l-.01-.74-.02-.13q-.04-.07-.1-.1l-.13-.02L15 14H9l-.74.01-.13.02q-.06.03-.1.1l-.02.13L8 15v5c0 .55-.45 1-1 1s-1-.45-1-1v-5q0-.5.02-.9l.03-.26C4.86 13.44 4 12.33 4 11q0-.54.18-1.02H4.1q-.41-.01-.87-.23-.65-.33-.98-.98c-.16-.3-.2-.6-.23-.87Q2 7.5 2 7V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q4.5 3 5 3zM7 10c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM5 5l-.74.01-.13.02q-.06.04-.1.1l-.02.13L4 6v1l.01.74.02.13q.04.06.1.1l.13.02L5 8h14l.74-.01.13-.02.1-.1.02-.13L20 7V6l-.01-.74-.02-.13q-.04-.06-.1-.1l-.13-.02L19 5z" clipRule="evenodd" />
        <path d="M10.25 15c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1M13.75 15c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PedestalBold.displayName = 'PedestalBold';

// Triple export pattern
export { PedestalBold, PedestalBold as PedestalBoldIcon, PedestalBold as SiPedestalBold };
export default PedestalBold;
export type { PedestalBoldProps };
