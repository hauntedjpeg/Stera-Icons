import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneBoldProps = Omit<IconBaseProps, 'children'>;

const AirplaneBold = memo(
  forwardRef<SVGSVGElement, AirplaneBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.28 3c.9 0 1.74.43 2.27 1.16L15.2 9.2h2.87c.98 0 1.92.39 2.62 1.08l1 1.01q.3.31.3.71 0 .42-.3.7l-1 1.02c-.7.69-1.64 1.08-2.62 1.08h-2.87l-3.66 5.04c-.53.73-1.37 1.16-2.27 1.16h-1.1c-1.04 0-1.74-1.07-1.32-2.03l1.84-4.22-1.98-.07-.73 1.3c-.37.66-1.08 1.07-1.85 1.07H3.5c-.86 0-1.53-.75-1.44-1.61L2.44 12l-.38-3.44c-.1-.86.58-1.61 1.44-1.61h.64c.77 0 1.48.41 1.85 1.08l.73 1.29 1.98-.07-1.84-4.22C6.44 4.07 7.14 3 8.19 3zm1.84 6.8.04.12c.08.27.04.57-.11.81-.18.28-.49.46-.82.47l-4.05.13c-.37.02-.72-.18-.9-.5L4.25 9q-.03-.06-.1-.06h-.03l.32 2.94v.07l.01.03v.11l-.33 2.95h.02q.08 0 .11-.06l1.03-1.82c.18-.32.53-.52.9-.5l4.05.13.13.01q.43.08.69.46c.17.28.2.63.07.93L9.02 19h.26q.4 0 .65-.33l3.96-5.46c.19-.26.49-.41.8-.41h3.4c.44 0 .87-.18 1.2-.5l.3-.3-.3-.3q-.52-.49-1.21-.5H14.7c-.32 0-.62-.15-.81-.41L9.93 5.33c-.15-.2-.4-.33-.65-.33h-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

AirplaneBold.displayName = 'AirplaneBold';

// Triple export pattern
export { AirplaneBold, AirplaneBold as AirplaneBoldIcon, AirplaneBold as SiAirplaneBold };
export default AirplaneBold;
export type { AirplaneBoldProps };
