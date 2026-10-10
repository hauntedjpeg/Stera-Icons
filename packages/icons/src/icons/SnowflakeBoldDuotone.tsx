import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SnowflakeBoldDuotone = memo(
  forwardRef<SVGSVGElement, SnowflakeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 20.23V22c0 .55-.45 1-1 1s-1-.45-1-1v-1.77l1-.58zM5.37 15.83v1.15l-1.53.89c-.48.27-1.1.1-1.37-.37-.27-.48-.1-1.09.37-1.37l1.53-.88zM21.16 16.13c.48.28.64.9.36 1.37-.27.48-.88.64-1.36.37l-1.53-.89v-1.15l1-.58zM13 10.27l3.63-2.1v.58c0 .36.19.69.5.87l.5.28L14 12l3.63 2.1-.5.28c-.31.18-.5.51-.5.87v.58L13 13.73v4.2l-.5-.3c-.27-.15-.6-.17-.88-.05l-.12.05-.5.3v-4.2l-3.63 2.1v-.58q-.02-.48-.39-.8l-.11-.07-.5-.29L10 12 6.37 9.9l.5-.28q.42-.26.5-.74v-.71l3.63 2.1v-4.2l.5.3c.3.17.69.17 1 0l.5-.3zM2.47 6.5c.28-.48.89-.64 1.37-.37l1.53.89v1.15l-1 .58-1.53-.88c-.48-.28-.64-.9-.37-1.37M20.16 6.13c.48-.27 1.09-.1 1.36.37.28.48.12 1.09-.36 1.37l-1.53.88-1-.58V7.02zM12 1c.55 0 1 .45 1 1v1.77l-1 .58-1-.58V2c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M11.62 17.58c.28-.12.6-.1.88.05l3 1.74c.48.27.64.88.37 1.36-.28.48-.9.64-1.37.37L12 19.65 9.5 21.1c-.48.27-1.09.11-1.37-.37-.27-.48-.1-1.09.37-1.36l3-1.74zM2.5 13.02c.28-.48.9-.64 1.37-.37l3 1.73.11.08c.24.19.4.48.4.79v3.46c0 .56-.46 1-1 1-.56 0-1-.44-1-1v-2.88l-2.5-1.45c-.49-.27-.65-.88-.38-1.36M20.13 12.65c.48-.27 1.09-.11 1.36.37.28.48.12 1.09-.36 1.36l-2.5 1.45v2.88c0 .56-.45 1-1 1s-1-.44-1-1v-3.46c0-.36.19-.69.5-.87zM6.37 4.29c.55 0 1 .44 1 1v3.59c-.05.3-.23.58-.5.74l-3 1.73c-.48.27-1.09.11-1.37-.37-.27-.48-.1-1.09.37-1.36l2.5-1.45V5.3c0-.56.45-1 1-1M17.63 4.29c.55 0 1 .44 1 1v2.88l2.5 1.45c.48.27.64.88.36 1.36-.27.48-.88.64-1.36.37l-3-1.73c-.31-.18-.5-.51-.5-.87V5.29c0-.56.45-1 1-1M14.5 2.9c.48-.27 1.09-.11 1.37.37.27.48.1 1.09-.37 1.36l-3 1.74c-.3.17-.7.17-1 0l-3-1.74c-.48-.27-.64-.88-.37-1.36.28-.48.9-.64 1.37-.37L12 4.35z" />
    </IconBase>
  ))
);

SnowflakeBoldDuotone.displayName = 'SnowflakeBoldDuotone';

// Triple export pattern
export { SnowflakeBoldDuotone, SnowflakeBoldDuotone as SnowflakeBoldDuotoneIcon, SnowflakeBoldDuotone as SiSnowflakeBoldDuotone };
export default SnowflakeBoldDuotone;
export type { SnowflakeBoldDuotoneProps };
