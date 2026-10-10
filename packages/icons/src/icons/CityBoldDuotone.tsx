import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CityBoldDuotone = memo(
  forwardRef<SVGSVGElement, CityBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m16.67 9-.74.01-.13.02q-.06.04-.1.1l-.02.13-.01.74v9h-2v-5c0-.37 0-.58-.02-.74l-.01-.13q-.04-.06-.1-.1l-.13-.02-.74-.01h-1.34l-.74.01-.13.02q-.06.03-.1.1l-.01.13c-.02.16-.02.37-.02.74v5h-2V6l-.01-.74q0-.1-.02-.13-.03-.07-.1-.1l-.13-.02L7.33 5H6l-.74.01-.13.02q-.06.04-.1.1l-.02.13L5 6v13H3V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q5.5 3 6 3h1.33q.52 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.83.9.2.46.22.87t.02.9v5.03h.1q.4-.04.9-.03h1.34q.5 0 .9.02l.1.01V10q0-.5.02-.9.01-.41.22-.87l.09-.16q.34-.54.9-.82l.1-.06q.41-.14.76-.17.4-.02.9-.02H18q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v9h-2v-9l-.01-.74-.02-.13q-.03-.06-.1-.1l-.13-.02L18 9z" opacity={.4} />
        <path d="M5.92 8V7c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75M5.92 12v-1c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75M16.58 12v-1c0-.41.34-.75.75-.75.42 0 .75.34.75.75v1c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75M5.92 16v-1c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75M11.25 16v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75M16.58 16v-1c0-.41.34-.75.75-.75.42 0 .75.34.75.75v1c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75M21 19c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

CityBoldDuotone.displayName = 'CityBoldDuotone';

// Triple export pattern
export { CityBoldDuotone, CityBoldDuotone as CityBoldDuotoneIcon, CityBoldDuotone as SiCityBoldDuotone };
export default CityBoldDuotone;
export type { CityBoldDuotoneProps };
